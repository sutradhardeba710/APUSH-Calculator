import type { ExamConfig, RawScores } from '../../data/exam-config/types';
import { calculateApushScore } from './calculator';

export interface ImprovementOpportunity {
  sectionKey: keyof RawScores;
  sectionName: string;
  shortName: string;
  currentRaw: number;
  maxRaw: number;
  roomForGrowth: number;
  compositeGainPerPoint: number;
  pointsNeededForNextTier: number; // raw points needed in this section alone to reach next tier
  isFeasibleInThisSectionAlone: boolean;
  leverageRank: number; // 1 = highest leverage/ROI
  actionableTip: string;
}

export interface ImprovementAnalysis {
  currentScore: 1 | 2 | 3 | 4 | 5;
  nextScore: 2 | 3 | 4 | 5 | null;
  compositeDeficit: number;
  opportunities: ImprovementOpportunity[];
  topRecommendation: string;
}

export function analyzeImprovementPaths(rawScores: RawScores, config: ExamConfig): ImprovementAnalysis {
  const result = calculateApushScore(rawScores, config);
  const currentScore = result.estimatedApScore;
  const nextScore = result.nextScore;
  const compositeDeficit = result.pointsToNextScore ?? 0;

  const sectionTips: Record<keyof RawScores, string> = {
    dbq: 'Each DBQ point adds +3.57 composite points! Getting 1 more document citation or HIPP sourcing point yields huge returns.',
    leq: 'Each LEQ point adds +2.50 composite points. Focus on earning the 2nd evidence point and establishing a clear historical reasoning framework.',
    saq: 'Each SAQ subpart earned adds +2.22 composite points. Practice the ACE formula (Answer, Cite, Explain) within strict 12-minute blocks.',
    mcq: 'MCQ questions add +0.73 composite points each. Improving by 4-5 questions provides a dependable cushion across the exam.',
  };

  const sections: (keyof RawScores)[] = ['dbq', 'leq', 'saq', 'mcq'];

  const opportunities: ImprovementOpportunity[] = sections.map((sec) => {
    const sectionConfig = config.sections[sec];
    const currentRaw = rawScores[sec] || 0;
    const maxRaw = sectionConfig.rawMax;
    const room = Math.max(0, maxRaw - currentRaw);
    const gainPerPoint = sectionConfig.multiplier;
    const pointsNeeded = compositeDeficit > 0 ? Math.ceil(compositeDeficit / gainPerPoint) : 0;
    const isFeasible = pointsNeeded <= room;

    return {
      sectionKey: sec,
      sectionName: sectionConfig.name,
      shortName: sectionConfig.shortName,
      currentRaw,
      maxRaw,
      roomForGrowth: room,
      compositeGainPerPoint: Math.round(gainPerPoint * 100) / 100,
      pointsNeededForNextTier: pointsNeeded,
      isFeasibleInThisSectionAlone: isFeasible,
      leverageRank: 0,
      actionableTip: sectionTips[sec],
    };
  });

  // Sort by leverage: higher composite gain per point first, but prioritize sections with room to grow
  opportunities.sort((a, b) => {
    if (a.roomForGrowth === 0 && b.roomForGrowth > 0) return 1;
    if (b.roomForGrowth === 0 && a.roomForGrowth > 0) return -1;
    return b.compositeGainPerPoint - a.compositeGainPerPoint;
  });

  opportunities.forEach((opp, idx) => {
    opp.leverageRank = idx + 1;
  });

  let topRecommendation = '';
  if (currentScore === 5) {
    topRecommendation = 'You are already scoring at a 5! Focus on timed stamina and retaining your current essay strategies.';
  } else {
    const highestFeasible = opportunities.find((o) => o.isFeasibleInThisSectionAlone && o.roomForGrowth > 0);
    if (highestFeasible) {
      topRecommendation = `Fastest route to a ${nextScore}: Earn just ${highestFeasible.pointsNeededForNextTier} more raw point${highestFeasible.pointsNeededForNextTier > 1 ? 's' : ''} on the ${highestFeasible.shortName}. ${highestFeasible.actionableTip}`;
    } else {
      topRecommendation = `To reach a ${nextScore}, you need ${compositeDeficit.toFixed(1)} more composite points across multiple sections (e.g. +1 on DBQ and +3 on MCQ).`;
    }
  }

  return {
    currentScore,
    nextScore,
    compositeDeficit,
    opportunities,
    topRecommendation,
  };
}
