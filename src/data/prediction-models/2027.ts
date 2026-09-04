export interface PredictionScoreProbabilities {
  score5: number;
  score4: number;
  score3: number;
  score2: number;
  score1: number;
}

export interface PredictionModelConfig {
  year: number;
  standardDeviation: number; // typical composite spread in practice vs real exam
  historicalMeanComposite: number;
  targetPercentiles: Record<1 | 2 | 3 | 4 | 5, number>;
}

export const predictionModel2027: PredictionModelConfig = {
  year: 2027,
  standardDeviation: 3.2,
  historicalMeanComposite: 54.8,
  targetPercentiles: {
    5: 88, // Top ~12%
    4: 68, // Next ~20%
    3: 48, // Next ~20%
    2: 24, // Next ~24%
    1: 0,  // Bottom ~24%
  },
};
