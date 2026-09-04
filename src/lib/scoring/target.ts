import type { ExamConfig, RawScores } from '../../data/exam-config/types';

export interface TargetRequirement {
  targetScore: 3 | 4 | 5;
  targetCompositeMin: number;
  currentCompositeFromKnown: number;
  remainingCompositeNeeded: number;
  isAchievable: boolean;
  possibleScenarios: {
    label: string;
    scores: Partial<RawScores>;
    feasibility: 'Very Achievable' | 'Challenging' | 'Requires Near Perfect Score';
  }[];
}

export function calculateTargetRequirements(
  targetScore: 3 | 4 | 5,
  knownScores: Partial<RawScores>,
  targetSection: keyof RawScores,
  config: ExamConfig
): {
  targetScore: 3 | 4 | 5;
  minCompositeNeeded: number;
  requiredSectionScore: number;
  isAchievable: boolean;
  message: string;
} {
  const targetCutoff = config.cutoffs[targetScore].minComposite;

  // Calculate composite contribution from other sections
  let currentComposite = 0;
  (['mcq', 'saq', 'dbq', 'leq'] as (keyof RawScores)[]).forEach((sec) => {
    if (sec !== targetSection && knownScores[sec] !== undefined) {
      const raw = Math.max(0, Math.min(config.sections[sec].rawMax, knownScores[sec] || 0));
      currentComposite += raw * config.sections[sec].multiplier;
    }
  });

  const neededComposite = Math.max(0, targetCutoff - currentComposite);
  const targetMultiplier = config.sections[targetSection].multiplier;
  const maxSectionRaw = config.sections[targetSection].rawMax;

  const rawNeeded = Math.ceil(neededComposite / targetMultiplier);
  const isAchievable = rawNeeded <= maxSectionRaw;

  let message = '';
  if (rawNeeded <= 0) {
    message = `You have already secured enough points from other sections to reach a score of ${targetScore}! Even with 0 on ${config.sections[targetSection].shortName}, your estimated score is ${targetScore}.`;
  } else if (isAchievable) {
    message = `You need at least ${rawNeeded} / ${maxSectionRaw} on the ${config.sections[targetSection].shortName} (${config.sections[targetSection].name}) to reach an estimated AP score of ${targetScore}.`;
  } else {
    message = `Even with a perfect ${maxSectionRaw} / ${maxSectionRaw} on the ${config.sections[targetSection].shortName}, you would still fall short by ${(neededComposite - maxSectionRaw * targetMultiplier).toFixed(1)} composite points. Consider increasing scores in other sections as well.`;
  }

  return {
    targetScore,
    minCompositeNeeded: targetCutoff,
    requiredSectionScore: Math.max(0, rawNeeded),
    isAchievable,
    message,
  };
}
