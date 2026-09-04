export interface SectionWeight {
  rawMax: number;
  weightPercent: number; // e.g. 40 for 40%
  multiplier: number;    // weightPercent / rawMax
  name: string;
  shortName: string;
  timeLimitMinutes: number;
}

export interface SectionWeights {
  mcq: SectionWeight;
  saq: SectionWeight;
  dbq: SectionWeight;
  leq: SectionWeight;
}

export interface ScoreCutoff {
  score: 1 | 2 | 3 | 4 | 5;
  minComposite: number;
  maxComposite: number;
  title: string;
  collegeCreditLikelihood: 'Extremely Likely' | 'Very Likely' | 'Likely / Variable' | 'Rare' | 'No Credit';
  description: string;
  colorClass: string;
}

export interface ConfidenceInterval {
  margin: number; // e.g., ±2 composite points
  description: string;
}

export interface ExamConfig {
  year: number;
  label: string;
  isOfficialCutoff: boolean;
  totalCompositeMax: 100;
  sections: SectionWeights;
  cutoffs: Record<1 | 2 | 3 | 4 | 5, ScoreCutoff>;
  confidenceInterval: ConfidenceInterval;
  notes: string;
}

export interface RawScores {
  mcq: number;
  saq: number;
  dbq: number;
  leq: number;
}

export interface WeightedSectionScores {
  mcq: number;
  saq: number;
  dbq: number;
  leq: number;
  total: number;
}

export interface CalculationResult {
  rawScores: RawScores;
  weightedScores: WeightedSectionScores;
  compositeScore: number;
  estimatedApScore: 1 | 2 | 3 | 4 | 5;
  cutoff: ScoreCutoff;
  confidenceRange: {
    minComposite: number;
    maxComposite: number;
    minScore: 1 | 2 | 3 | 4 | 5;
    maxScore: 1 | 2 | 3 | 4 | 5;
  };
  pointsToNextScore: number | null; // null if already 5
  nextScore: (2 | 3 | 4 | 5) | null;
  pointsAboveCurrentCutoff: number;
}
