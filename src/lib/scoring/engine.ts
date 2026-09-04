import type {
  SubjectExamConfig,
  ScoreLevel,
  CalculationOutput,
  SectionCalculationResult,
  ExamYearConfig,
} from '../../data/exam-config/subject-types';

export function getExamYearConfig(config: SubjectExamConfig, year?: number): ExamYearConfig {
  const targetYear = year && config.examYears[year] ? year : config.defaultYear;
  return config.examYears[targetYear] || Object.values(config.examYears)[0];
}

export function calculateSubjectScore(
  config: SubjectExamConfig,
  year: number,
  inputScores: Record<string, number | string | undefined>
): CalculationOutput {
  const yearConfig = getExamYearConfig(config, year);

  const rawScores: Record<string, number> = {};
  const sections: SectionCalculationResult[] = [];
  let compositeScore = 0;

  for (const section of yearConfig.sections) {
    const rawVal = inputScores[section.id];
    let num = typeof rawVal === 'number' ? rawVal : Number(rawVal);
    if (isNaN(num) || num < 0) num = 0;
    if (num > section.maxScore) num = section.maxScore;
    num = Math.round(num * 10) / 10; // allow half-points if any, or whole numbers

    rawScores[section.id] = num;

    const percentage = section.maxScore > 0 ? (num / section.maxScore) * 100 : 0;
    const multiplier = section.maxScore > 0 ? section.weightPercent / section.maxScore : 0;
    const weightedContribution = num * multiplier;

    compositeScore += weightedContribution;

    sections.push({
      id: section.id,
      name: section.name,
      shortName: section.shortName,
      rawScore: num,
      maxScore: section.maxScore,
      percentage: Math.round(percentage * 10) / 10,
      weightPercent: section.weightPercent,
      weightedContribution: Math.round(weightedContribution * 100) / 100,
    });
  }

  compositeScore = Math.round(compositeScore * 100) / 100;
  // Clamp composite to 100
  compositeScore = Math.min(100, Math.max(0, compositeScore));

  // Determine estimated AP score (5 down to 1)
  let estimatedApScore: ScoreLevel = 1;
  const cutoffs = yearConfig.cutoffs;

  if (compositeScore >= cutoffs[5].minComposite) {
    estimatedApScore = 5;
  } else if (compositeScore >= cutoffs[4].minComposite) {
    estimatedApScore = 4;
  } else if (compositeScore >= cutoffs[3].minComposite) {
    estimatedApScore = 3;
  } else if (compositeScore >= cutoffs[2].minComposite) {
    estimatedApScore = 2;
  } else {
    estimatedApScore = 1;
  }

  const currentCutoff = cutoffs[estimatedApScore];

  // Confidence margin calculation
  const margin = yearConfig.confidenceInterval.margin;
  const minComposite = Math.max(0, Math.round((compositeScore - margin) * 10) / 10);
  const maxComposite = Math.min(100, Math.round((compositeScore + margin) * 10) / 10);

  const getScoreForComposite = (comp: number): ScoreLevel => {
    if (comp >= cutoffs[5].minComposite) return 5;
    if (comp >= cutoffs[4].minComposite) return 4;
    if (comp >= cutoffs[3].minComposite) return 3;
    if (comp >= cutoffs[2].minComposite) return 2;
    return 1;
  };

  const minScore = getScoreForComposite(minComposite);
  const maxScore = getScoreForComposite(maxComposite);

  const nextScore = estimatedApScore < 5 ? ((estimatedApScore + 1) as ScoreLevel) : null;
  const pointsToNextScore = nextScore
    ? Math.max(0, Math.round((cutoffs[nextScore].minComposite - compositeScore) * 10) / 10)
    : null;

  const pointsAboveCurrentCutoff = Math.max(
    0,
    Math.round((compositeScore - currentCutoff.minComposite) * 10) / 10
  );

  return {
    rawScores,
    sections,
    compositeScore,
    estimatedApScore,
    cutoff: currentCutoff,
    confidenceRange: {
      minComposite,
      maxComposite,
      minScore,
      maxScore,
    },
    pointsToNextScore,
    nextScore,
    pointsAboveCurrentCutoff,
  };
}

export interface WhatIfResult {
  baseComposite: number;
  newComposite: number;
  baseScore: ScoreLevel;
  newScore: ScoreLevel;
  deltaComposite: number;
  scoreChanged: boolean;
  sectionShortName: string;
  adjustment: number;
}

export function simulateWhatIf(
  config: SubjectExamConfig,
  year: number,
  baseScores: Record<string, number>,
  sectionId: string,
  delta: number
): WhatIfResult {
  const baseResult = calculateSubjectScore(config, year, baseScores);
  const section = getExamYearConfig(config, year).sections.find((s) => s.id === sectionId);
  const shortName = section ? section.shortName : sectionId;

  const modifiedScores = { ...baseScores };
  const currentVal = modifiedScores[sectionId] || 0;
  const maxVal = section ? section.maxScore : 100;
  modifiedScores[sectionId] = Math.max(0, Math.min(maxVal, currentVal + delta));

  const newResult = calculateSubjectScore(config, year, modifiedScores);
  const deltaComposite = Math.round((newResult.compositeScore - baseResult.compositeScore) * 100) / 100;

  return {
    baseComposite: baseResult.compositeScore,
    newComposite: newResult.compositeScore,
    baseScore: baseResult.estimatedApScore,
    newScore: newResult.estimatedApScore,
    deltaComposite,
    scoreChanged: newResult.estimatedApScore !== baseResult.estimatedApScore,
    sectionShortName: shortName,
    adjustment: delta,
  };
}

export interface TargetPathOption {
  sectionId: string;
  sectionName: string;
  shortName: string;
  currentRaw: number;
  maxRaw: number;
  roomForGrowth: number;
  gainPerPoint: number;
  rawPointsNeeded: number;
  isFeasibleAlone: boolean;
  leverageRank: number; // 1 = highest return on investment
}

export interface TargetScoreAnalysis {
  targetScore: ScoreLevel;
  currentScore: ScoreLevel;
  alreadyReached: boolean;
  compositeDeficit: number;
  paths: TargetPathOption[];
  primaryRecommendation: string;
}

export function calculateTargetScenarios(
  config: SubjectExamConfig,
  year: number,
  currentScores: Record<string, number>,
  targetScore: ScoreLevel
): TargetScoreAnalysis {
  const currentResult = calculateSubjectScore(config, year, currentScores);
  const yearConfig = getExamYearConfig(config, year);
  const targetCutoff = yearConfig.cutoffs[targetScore].minComposite;

  if (currentResult.compositeScore >= targetCutoff) {
    return {
      targetScore,
      currentScore: currentResult.estimatedApScore,
      alreadyReached: true,
      compositeDeficit: 0,
      paths: [],
      primaryRecommendation: `You are already scoring at or above a ${targetScore}! Focus on timed practice to maintain consistency.`,
    };
  }

  const compositeDeficit = Math.round((targetCutoff - currentResult.compositeScore) * 10) / 10;

  const paths: TargetPathOption[] = yearConfig.sections.map((sec) => {
    const currentRaw = currentScores[sec.id] || 0;
    const room = Math.max(0, sec.maxScore - currentRaw);
    const gainPerPoint = sec.maxScore > 0 ? sec.weightPercent / sec.maxScore : 0;
    const rawNeeded = gainPerPoint > 0 ? Math.ceil(compositeDeficit / gainPerPoint) : 999;
    const isFeasibleAlone = rawNeeded <= room;

    return {
      sectionId: sec.id,
      sectionName: sec.name,
      shortName: sec.shortName,
      currentRaw,
      maxRaw: sec.maxScore,
      roomForGrowth: room,
      gainPerPoint: Math.round(gainPerPoint * 100) / 100,
      rawPointsNeeded: rawNeeded,
      isFeasibleAlone,
      leverageRank: 0,
    };
  });

  // Sort by highest gain per point, but deprioritize sections with zero headroom
  paths.sort((a, b) => {
    if (a.roomForGrowth === 0 && b.roomForGrowth > 0) return 1;
    if (b.roomForGrowth === 0 && a.roomForGrowth > 0) return -1;
    return b.gainPerPoint - a.gainPerPoint;
  });

  paths.forEach((p, idx) => {
    p.leverageRank = idx + 1;
  });

  // Generate primary recommendation
  let primaryRecommendation = '';
  const feasibleOption = paths.find((p) => p.isFeasibleAlone && p.roomForGrowth > 0);

  if (feasibleOption) {
    primaryRecommendation = `Fastest single-section path to a ${targetScore}: Earn +${feasibleOption.rawPointsNeeded} more raw point${feasibleOption.rawPointsNeeded > 1 ? 's' : ''} on the ${feasibleOption.shortName}. Each point here adds +${feasibleOption.gainPerPoint.toFixed(2)} to your composite.`;
  } else {
    // Needs multi-section combination
    const top2 = paths.filter((p) => p.roomForGrowth > 0).slice(0, 2);
    if (top2.length >= 2) {
      primaryRecommendation = `To reach a ${targetScore}, you need ${compositeDeficit.toFixed(1)} more composite points. A balanced approach: gain +${Math.min(top2[0].roomForGrowth, Math.ceil(top2[0].rawPointsNeeded / 2))} on ${top2[0].shortName} and +${Math.min(top2[1].roomForGrowth, Math.ceil(top2[1].rawPointsNeeded / 2))} on ${top2[1].shortName}.`;
    } else {
      primaryRecommendation = `You need ${compositeDeficit.toFixed(1)} composite points across remaining sections to reach a ${targetScore}.`;
    }
  }

  return {
    targetScore,
    currentScore: currentResult.estimatedApScore,
    alreadyReached: false,
    compositeDeficit,
    paths,
    primaryRecommendation,
  };
}
