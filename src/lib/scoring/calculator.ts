import type { ExamConfig, RawScores, WeightedSectionScores, CalculationResult, ScoreCutoff } from '../../data/exam-config/types';

export function calculateWeightedScores(rawScores: RawScores, config: ExamConfig): WeightedSectionScores {
  const mcq = Math.max(0, Math.min(config.sections.mcq.rawMax, rawScores.mcq || 0)) * config.sections.mcq.multiplier;
  const saq = Math.max(0, Math.min(config.sections.saq.rawMax, rawScores.saq || 0)) * config.sections.saq.multiplier;
  const dbq = Math.max(0, Math.min(config.sections.dbq.rawMax, rawScores.dbq || 0)) * config.sections.dbq.multiplier;
  const leq = Math.max(0, Math.min(config.sections.leq.rawMax, rawScores.leq || 0)) * config.sections.leq.multiplier;

  const total = mcq + saq + dbq + leq;

  return {
    mcq: Math.round(mcq * 100) / 100,
    saq: Math.round(saq * 100) / 100,
    dbq: Math.round(dbq * 100) / 100,
    leq: Math.round(leq * 100) / 100,
    total: Math.round(total * 100) / 100,
  };
}

export function estimateApScoreFromComposite(composite: number, config: ExamConfig): 1 | 2 | 3 | 4 | 5 {
  if (composite >= config.cutoffs[5].minComposite) return 5;
  if (composite >= config.cutoffs[4].minComposite) return 4;
  if (composite >= config.cutoffs[3].minComposite) return 3;
  if (composite >= config.cutoffs[2].minComposite) return 2;
  return 1;
}

export function calculateApushScore(rawScores: RawScores, config: ExamConfig): CalculationResult {
  const weighted = calculateWeightedScores(rawScores, config);
  const composite = weighted.total;
  const estimatedScore = estimateApScoreFromComposite(composite, config);
  const cutoff = config.cutoffs[estimatedScore];

  const margin = config.confidenceInterval.margin;
  const minComposite = Math.max(0, Math.round((composite - margin) * 10) / 10);
  const maxComposite = Math.min(100, Math.round((composite + margin) * 10) / 10);

  const minScore = estimateApScoreFromComposite(minComposite, config);
  const maxScore = estimateApScoreFromComposite(maxComposite, config);

  const nextScore = estimatedScore < 5 ? ((estimatedScore + 1) as 2 | 3 | 4 | 5) : null;
  const pointsToNextScore = nextScore
    ? Math.max(0, Math.round((config.cutoffs[nextScore].minComposite - composite) * 10) / 10)
    : null;

  const pointsAboveCurrentCutoff = Math.max(
    0,
    Math.round((composite - cutoff.minComposite) * 10) / 10
  );

  return {
    rawScores,
    weightedScores: weighted,
    compositeScore: composite,
    estimatedApScore: estimatedScore,
    cutoff,
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
