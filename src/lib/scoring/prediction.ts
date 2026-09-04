import type { ExamConfig, RawScores } from '../../data/exam-config/types';
import { calculateApushScore } from './calculator';
import { predictionModel2027 } from '../../data/prediction-models/2027';

export interface ScorePrediction {
  compositeScore: number;
  estimatedApScore: 1 | 2 | 3 | 4 | 5;
  probabilities: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  projectedRange: {
    low: 1 | 2 | 3 | 4 | 5;
    likely: 1 | 2 | 3 | 4 | 5;
    high: 1 | 2 | 3 | 4 | 5;
  };
  summaryRecommendation: string;
}

// Normal cumulative distribution approximation (error function erf)
function normalCdf(x: number, mean: number, stdDev: number): number {
  const z = (x - mean) / (stdDev * Math.SQRT2);
  const t = 1 / (1 + 0.3275911 * Math.abs(z));
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const erf = 1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) * Math.exp(-z * z);
  const sign = z >= 0 ? 1 : -1;
  return 0.5 * (1 + sign * erf);
}

export function predictApushScore(rawScores: RawScores, config: ExamConfig): ScorePrediction {
  const result = calculateApushScore(rawScores, config);
  const composite = result.compositeScore;
  const std = predictionModel2027.standardDeviation;

  // Cutoffs
  const c5 = config.cutoffs[5].minComposite;
  const c4 = config.cutoffs[4].minComposite;
  const c3 = config.cutoffs[3].minComposite;
  const c2 = config.cutoffs[2].minComposite;

  // Probability of scoring above each cutoff using Gaussian distribution around expected composite
  const pAbove5 = 1 - normalCdf(c5, composite, std);
  const pAbove4 = 1 - normalCdf(c4, composite, std);
  const pAbove3 = 1 - normalCdf(c3, composite, std);
  const pAbove2 = 1 - normalCdf(c2, composite, std);

  const prob5 = Math.max(0, Math.min(1, pAbove5));
  const prob4 = Math.max(0, Math.min(1, pAbove4 - pAbove5));
  const prob3 = Math.max(0, Math.min(1, pAbove3 - pAbove4));
  const prob2 = Math.max(0, Math.min(1, pAbove2 - pAbove3));
  const prob1 = Math.max(0, Math.min(1, 1 - pAbove2));

  // Normalize percentages to sum to 100
  const rawSum = prob5 + prob4 + prob3 + prob2 + prob1;
  const toPct = (p: number) => Math.round((p / rawSum) * 100);

  const pct5 = toPct(prob5);
  const pct4 = toPct(prob4);
  const pct3 = toPct(prob3);
  const pct2 = toPct(prob2);
  const pct1 = Math.max(0, 100 - (pct5 + pct4 + pct3 + pct2));

  // Determine low / likely / high AP score predictions (80% confidence interval: composite ± 1.28 * std)
  const lowComposite = Math.max(0, composite - 1.28 * std);
  const highComposite = Math.min(100, composite + 1.28 * std);

  const getScore = (comp: number): 1 | 2 | 3 | 4 | 5 => {
    if (comp >= c5) return 5;
    if (comp >= c4) return 4;
    if (comp >= c3) return 3;
    if (comp >= c2) return 2;
    return 1;
  };

  let summary = '';
  if (result.estimatedApScore === 5) {
    summary = 'Excellent performance! You are on track for a top-tier score of 5. Maintain essay writing speed and practice period 7-9 content review.';
  } else if (result.estimatedApScore === 4) {
    summary = `You are in a strong position for a 4 with a solid chance (${pct5}%) at reaching a 5 with small targeted gains in DBQ evidence or MCQ accuracy.`;
  } else if (result.estimatedApScore === 3) {
    summary = 'You are currently in passing territory. Prioritize earning the DBQ 4-document point and boosting Multiple Choice accuracy to lock in a 4.';
  } else {
    summary = 'Focus on core high-frequency historical themes (Reconstruction, New Deal, Early Republic) and mastering the 1-point thesis and contextualization formulas.';
  }

  return {
    compositeScore: composite,
    estimatedApScore: result.estimatedApScore,
    probabilities: {
      5: pct5,
      4: pct4,
      3: pct3,
      2: pct2,
      1: pct1,
    },
    projectedRange: {
      low: getScore(lowComposite),
      likely: result.estimatedApScore,
      high: getScore(highComposite),
    },
    summaryRecommendation: summary,
  };
}
