export interface YearlyScoreDistribution {
  year: number;
  totalTestTakers: number;
  meanScore: number;
  passRate: number; // Score 3+
  scores: {
    5: { percentage: number; count: number };
    4: { percentage: number; count: number };
    3: { percentage: number; count: number };
    2: { percentage: number; count: number };
    1: { percentage: number; count: number };
  };
  keyTakeaways: string[];
}

export const scoreDistributions: YearlyScoreDistribution[] = [
  {
    year: 2024,
    totalTestTakers: 472000,
    meanScore: 2.82,
    passRate: 48.0,
    scores: {
      5: { percentage: 10.7, count: 50504 },
      4: { percentage: 15.5, count: 73160 },
      3: { percentage: 21.8, count: 102896 },
      2: { percentage: 23.3, count: 109976 },
      1: { percentage: 28.7, count: 135464 },
    },
    keyTakeaways: [
      'The 2024 exam saw a noticeable increase in scores of 5 following the refined DBQ rubric guidelines.',
      'Document evidence points in the DBQ remained the single largest separator between score 3 and score 4/5 candidates.',
      'Roughly 48% of all test takers achieved a passing score of 3 or higher, maintaining APUSH as one of the more rigorous humanities exams.',
    ],
  },
  {
    year: 2023,
    totalTestTakers: 467000,
    meanScore: 2.76,
    passRate: 47.5,
    scores: {
      5: { percentage: 10.6, count: 49502 },
      4: { percentage: 15.1, count: 70517 },
      3: { percentage: 21.8, count: 101806 },
      2: { percentage: 22.8, count: 106476 },
      1: { percentage: 29.7, count: 138699 },
    },
    keyTakeaways: [
      'Over 29% of test takers scored a 1, underscoring the critical necessity of managing pacing on Section II (DBQ & LEQ).',
      'Strong Multiple-Choice Question performance (38+ correct out of 55) was achieved by over 82% of students scoring a 4 or 5.',
    ],
  },
  {
    year: 2022,
    totalTestTakers: 456520,
    meanScore: 2.71,
    passRate: 48.2,
    scores: {
      5: { percentage: 10.7, count: 48848 },
      4: { percentage: 15.6, count: 71217 },
      3: { percentage: 21.9, count: 99978 },
      2: { percentage: 23.0, count: 104999 },
      1: { percentage: 28.8, count: 131478 },
    },
    keyTakeaways: [
      'Nearly identical distribution to recent baseline years, reflecting consistent national scoring norming.',
      'Students scoring 3 typically achieved 65-70% accuracy on MCQ and earned at least 4/7 on the DBQ.',
    ],
  },
  {
    year: 2021,
    totalTestTakers: 440200,
    meanScore: 2.65,
    passRate: 47.2,
    scores: {
      5: { percentage: 10.1, count: 44460 },
      4: { percentage: 15.7, count: 69111 },
      3: { percentage: 21.4, count: 94203 },
      2: { percentage: 23.4, count: 103007 },
      1: { percentage: 29.4, count: 129419 },
    },
    keyTakeaways: [
      'Digital and paper testing formats both adhered to the College Board\'s standard equating methods.',
      'The LEQ complexity point was awarded to fewer than 3% of all essays written nationally.',
    ],
  },
];
