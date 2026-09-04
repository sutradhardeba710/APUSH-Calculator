export type ScoreLevel = 1 | 2 | 3 | 4 | 5;

export interface SectionConfig {
  id: string;
  name: string;
  shortName: string;
  maxScore: number;
  weightPercent: number; // e.g. 40 for 40%
  timeLimitMinutes: number;
  description: string;
  rubricLink?: string;
  inputType?: 'integer' | 'rubric' | 'percentage';
  step?: number;
}

export interface ScoreCutoff {
  score: ScoreLevel;
  minComposite: number;
  maxComposite: number;
  title: string;
  collegeCreditLikelihood: 'Extremely Likely' | 'Very Likely' | 'Likely / Variable' | 'Rare' | 'No Credit';
  description: string;
  colorClass: string;
}

export interface ConfidenceInterval {
  margin: number; // e.g. ±2.5 points
  description: string;
}

export interface SourceReference {
  publisher: string;
  title: string;
  url: string;
  year?: number;
  accessedAt?: string;
}

export interface ScoreDistributionYear {
  year: number;
  distribution: Record<ScoreLevel, number>; // percentages e.g. { 5: 12.5, 4: 18.2, 3: 24.1, 2: 22.0, 1: 23.2 }
  passRate3Plus: number; // percentage scoring 3 or higher
  totalTestTakers?: number;
}

export interface ExamYearConfig {
  year: number;
  label: string;
  isOfficialCutoff: boolean;
  totalCompositeMax: number; // typically 100
  sections: SectionConfig[];
  cutoffs: Record<ScoreLevel, ScoreCutoff>;
  confidenceInterval: ConfidenceInterval;
  defaultScores: Record<string, number>;
  presets: {
    score5: Record<string, number>;
    score4: Record<string, number>;
    score3: Record<string, number>;
  };
  notes?: string;
}

export interface SubjectExamConfig {
  id: string; // e.g. 'apush', 'ap-lang', 'ap-biology', etc.
  name: string; // e.g. 'AP U.S. History'
  abbreviation: string; // e.g. 'APUSH'
  slug: string; // e.g. 'apush-score-calculator'
  category: 'History & Social Sciences' | 'Sciences' | 'Math & Computer Science' | 'English';
  heroBadge: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  examYears: Record<number, ExamYearConfig>;
  defaultYear: number;
  historicalDistributions: ScoreDistributionYear[];
  sources: SourceReference[];
  relatedSubjectSlugs: string[];
}

export interface SectionCalculationResult {
  id: string;
  name: string;
  shortName: string;
  rawScore: number;
  maxScore: number;
  percentage: number;
  weightPercent: number;
  weightedContribution: number;
}

export interface CalculationOutput {
  rawScores: Record<string, number>;
  sections: SectionCalculationResult[];
  compositeScore: number;
  estimatedApScore: ScoreLevel;
  cutoff: ScoreCutoff;
  confidenceRange: {
    minComposite: number;
    maxComposite: number;
    minScore: ScoreLevel;
    maxScore: ScoreLevel;
  };
  pointsToNextScore: number | null;
  nextScore: ScoreLevel | null;
  pointsAboveCurrentCutoff: number;
}
