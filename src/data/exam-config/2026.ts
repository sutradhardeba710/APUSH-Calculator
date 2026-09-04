import type { ExamConfig } from './types';

export const examConfig2026: ExamConfig = {
  year: 2026,
  label: '2026 Exam (Current Format)',
  isOfficialCutoff: false,
  totalCompositeMax: 100,
  sections: {
    mcq: {
      rawMax: 55,
      weightPercent: 40,
      multiplier: 40 / 55, // ~0.72727
      name: 'Multiple-Choice Questions',
      shortName: 'MCQ',
      timeLimitMinutes: 55,
    },
    saq: {
      rawMax: 9,
      weightPercent: 20,
      multiplier: 20 / 9, // ~2.22222
      name: 'Short-Answer Questions',
      shortName: 'SAQ',
      timeLimitMinutes: 40,
    },
    dbq: {
      rawMax: 7,
      weightPercent: 25,
      multiplier: 25 / 7, // ~3.57143
      name: 'Document-Based Question',
      shortName: 'DBQ',
      timeLimitMinutes: 60,
    },
    leq: {
      rawMax: 6,
      weightPercent: 15,
      multiplier: 15 / 6, // 2.5
      name: 'Long Essay Question',
      shortName: 'LEQ',
      timeLimitMinutes: 40,
    },
  },
  cutoffs: {
    5: {
      score: 5,
      minComposite: 74,
      maxComposite: 100,
      title: 'Extremely Well Qualified',
      collegeCreditLikelihood: 'Extremely Likely',
      description: 'Superior understanding of historical developments, synthesis of primary sources, and nuanced argumentation.',
      colorClass: 'score-5',
    },
    4: {
      score: 4,
      minComposite: 60,
      maxComposite: 73.99,
      title: 'Well Qualified',
      collegeCreditLikelihood: 'Very Likely',
      description: 'Solid command of historical evidence, clear thesis-driven analysis, and consistent reasoning.',
      colorClass: 'score-4',
    },
    3: {
      score: 3,
      minComposite: 47,
      maxComposite: 59.99,
      title: 'Qualified (Passing)',
      collegeCreditLikelihood: 'Likely / Variable',
      description: 'Demonstrates sufficient historical comprehension and meets baseline standards for college credit at many institutions.',
      colorClass: 'score-3',
    },
    2: {
      score: 2,
      minComposite: 35,
      maxComposite: 46.99,
      title: 'Possibly Qualified',
      collegeCreditLikelihood: 'Rare',
      description: 'Partial mastery of content; limited document integration or incomplete thesis development.',
      colorClass: 'score-2',
    },
    1: {
      score: 1,
      minComposite: 0,
      maxComposite: 34.99,
      title: 'No Recommendation',
      collegeCreditLikelihood: 'No Credit',
      description: 'Insufficient evidence of historical thinking skills or thematic recall to warrant college-level placement.',
      colorClass: 'score-1',
    },
  },
  confidenceInterval: {
    margin: 2.5,
    description: 'Score boundary margin based on historical curve fluctuations (±2.5 composite pts).',
  },
  notes: 'Based on official College Board rubric guidelines, released operational scoring standards, and historical AP curve distribution models.',
};
