import type {
  SubjectExamConfig,
  ScoreCutoff,
  ScoreDistributionYear,
  ExamYearConfig,
  SectionConfig,
} from './subject-types';

const STANDARD_CUTOFF_TITLES: Record<
  1 | 2 | 3 | 4 | 5,
  { title: string; likelihood: ScoreCutoff['collegeCreditLikelihood']; color: string; desc: string }
> = {
  5: {
    title: 'Extremely Well Qualified',
    likelihood: 'Extremely Likely',
    color: 'emerald',
    desc: 'You have demonstrated superior mastery of college-level material. Top universities grant maximum credit or advanced placement.',
  },
  4: {
    title: 'Well Qualified',
    likelihood: 'Very Likely',
    color: 'blue',
    desc: 'You have shown solid mastery of the material. Most colleges and universities offer credit or advanced standing for a 4.',
  },
  3: {
    title: 'Qualified (Passing)',
    likelihood: 'Likely / Variable',
    color: 'sky',
    desc: 'You have demonstrated basic competence. Many public and private universities grant credit for a passing score of 3.',
  },
  2: {
    title: 'Possibly Qualified',
    likelihood: 'Rare',
    color: 'amber',
    desc: 'You are close to passing, but credit is rarely granted. Review your weakest question types to cross the threshold into a 3.',
  },
  1: {
    title: 'No Recommendation',
    likelihood: 'No Credit',
    color: 'rose',
    desc: 'Your score reflects limited foundational mastery on this attempt. Focus on core concept reviews and question pacing.',
  },
};

function createCutoffs(
  c5: number,
  c4: number,
  c3: number,
  c2: number
): Record<1 | 2 | 3 | 4 | 5, ScoreCutoff> {
  return {
    5: {
      score: 5,
      minComposite: c5,
      maxComposite: 100,
      title: STANDARD_CUTOFF_TITLES[5].title,
      collegeCreditLikelihood: STANDARD_CUTOFF_TITLES[5].likelihood,
      description: STANDARD_CUTOFF_TITLES[5].desc,
      colorClass: 'emerald',
    },
    4: {
      score: 4,
      minComposite: c4,
      maxComposite: Math.round((c5 - 0.1) * 10) / 10,
      title: STANDARD_CUTOFF_TITLES[4].title,
      collegeCreditLikelihood: STANDARD_CUTOFF_TITLES[4].likelihood,
      description: STANDARD_CUTOFF_TITLES[4].desc,
      colorClass: 'blue',
    },
    3: {
      score: 3,
      minComposite: c3,
      maxComposite: Math.round((c4 - 0.1) * 10) / 10,
      title: STANDARD_CUTOFF_TITLES[3].title,
      collegeCreditLikelihood: STANDARD_CUTOFF_TITLES[3].likelihood,
      description: STANDARD_CUTOFF_TITLES[3].desc,
      colorClass: 'sky',
    },
    2: {
      score: 2,
      minComposite: c2,
      maxComposite: Math.round((c3 - 0.1) * 10) / 10,
      title: STANDARD_CUTOFF_TITLES[2].title,
      collegeCreditLikelihood: STANDARD_CUTOFF_TITLES[2].likelihood,
      description: STANDARD_CUTOFF_TITLES[2].desc,
      colorClass: 'amber',
    },
    1: {
      score: 1,
      minComposite: 0,
      maxComposite: Math.round((c2 - 0.1) * 10) / 10,
      title: STANDARD_CUTOFF_TITLES[1].title,
      collegeCreditLikelihood: STANDARD_CUTOFF_TITLES[1].likelihood,
      description: STANDARD_CUTOFF_TITLES[1].desc,
      colorClass: 'rose',
    },
  };
}

// 1. APUSH Configuration
export const apushConfig: SubjectExamConfig = {
  id: 'apush',
  name: 'AP U.S. History',
  abbreviation: 'APUSH',
  slug: 'apush-score-calculator',
  category: 'History & Social Sciences',
  heroBadge: 'apush score calculator 2026 · Official Rubric Standards',
  metaTitle: 'apush score calculator 2026 — apush exam score calculator',
  metaDescription:
    'Use our free apush score calculator to calculate apush exam score from practice tests. Calibrated for apush score calculator 2026 with official College Board rubrics.',
  h1: 'APUSH Score Calculator',
  shortDescription:
    'Estimate your composite score with the most accurate apush score calculator using official College Board weightings: 40% MCQ, 20% SAQ, 25% DBQ, and 15% LEQ.',
  defaultYear: 2026,
  examYears: {
    2026: {
      year: 2026,
      label: '2026 Exam Curve',
      isOfficialCutoff: true,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I, Part A: Multiple Choice',
          shortName: 'MCQ',
          maxScore: 55,
          weightPercent: 40,
          timeLimitMinutes: 55,
          description: '55 stimulus-based questions (55 minutes). No penalty for incorrect guesses.',
        },
        {
          id: 'saq',
          name: 'Section I, Part B: Short-Answer Questions',
          shortName: 'SAQ',
          maxScore: 9,
          weightPercent: 20,
          timeLimitMinutes: 40,
          description: '3 questions, 3 parts each (9 raw points, 40 minutes). ACE structure.',
          rubricLink: '/apush-saq-score-calculator/',
        },
        {
          id: 'dbq',
          name: 'Section II, Part A: Document-Based Question',
          shortName: 'DBQ',
          maxScore: 7,
          weightPercent: 25,
          timeLimitMinutes: 60,
          description: '1 essay based on 7 documents (60 minutes). Worth ~3.57 composite pts per raw pt.',
          rubricLink: '/apush-dbq-score-calculator/',
        },
        {
          id: 'leq',
          name: 'Section II, Part B: Long Essay Question',
          shortName: 'LEQ',
          maxScore: 6,
          weightPercent: 15,
          timeLimitMinutes: 40,
          description: '1 essay choice from 3 prompts (40 minutes). Worth 2.50 composite pts per raw pt.',
          rubricLink: '/apush-leq-score-calculator/',
        },
      ],
      cutoffs: createCutoffs(74, 60, 47, 35),
      confidenceInterval: { margin: 2.5, description: 'Typical ±2.5 composite point variance between forms.' },
      defaultScores: { mcq: 42, saq: 5, dbq: 5, leq: 4 },
      presets: {
        score5: { mcq: 47, saq: 7, dbq: 6, leq: 5 },
        score4: { mcq: 40, saq: 5, dbq: 5, leq: 4 },
        score3: { mcq: 33, saq: 4, dbq: 4, leq: 3 },
      },
    },
    2027: {
      year: 2027,
      label: '2027 Projected Exam Curve',
      isOfficialCutoff: false,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I, Part A: Multiple Choice',
          shortName: 'MCQ',
          maxScore: 55,
          weightPercent: 40,
          timeLimitMinutes: 55,
          description: '55 stimulus-based questions (55 minutes). No penalty for guessing.',
        },
        {
          id: 'saq',
          name: 'Section I, Part B: Short-Answer Questions',
          shortName: 'SAQ',
          maxScore: 9,
          weightPercent: 20,
          timeLimitMinutes: 40,
          description: '3 questions, 3 parts each (9 raw points, 40 minutes).',
        },
        {
          id: 'dbq',
          name: 'Section II, Part A: Document-Based Question',
          shortName: 'DBQ',
          maxScore: 7,
          weightPercent: 25,
          timeLimitMinutes: 60,
          description: '1 essay based on 7 historical documents (60 minutes).',
        },
        {
          id: 'leq',
          name: 'Section II, Part B: Long Essay Question',
          shortName: 'LEQ',
          maxScore: 6,
          weightPercent: 15,
          timeLimitMinutes: 40,
          description: '1 choice essay (40 minutes).',
        },
      ],
      cutoffs: createCutoffs(75, 61, 48, 36),
      confidenceInterval: { margin: 3.0, description: 'Projected scoring curve with ±3.0 margin of error.' },
      defaultScores: { mcq: 42, saq: 5, dbq: 5, leq: 4 },
      presets: {
        score5: { mcq: 48, saq: 7, dbq: 6, leq: 5 },
        score4: { mcq: 41, saq: 5, dbq: 5, leq: 4 },
        score3: { mcq: 34, saq: 4, dbq: 4, leq: 3 },
      },
    },
  },
  historicalDistributions: [
    { year: 2024, distribution: { 5: 11.8, 4: 15.6, 3: 23.4, 2: 24.1, 1: 25.1 }, passRate3Plus: 50.8, totalTestTakers: 468000 },
    { year: 2023, distribution: { 5: 10.9, 4: 15.1, 3: 21.5, 2: 23.9, 1: 28.6 }, passRate3Plus: 47.5, totalTestTakers: 467000 },
    { year: 2022, distribution: { 5: 10.8, 4: 15.6, 3: 21.8, 2: 23.1, 1: 28.7 }, passRate3Plus: 48.2, totalTestTakers: 456000 },
    { year: 2021, distribution: { 5: 10.1, 4: 16.2, 3: 20.9, 2: 22.3, 1: 30.5 }, passRate3Plus: 47.2, totalTestTakers: 454000 },
    { year: 2020, distribution: { 5: 13.0, 4: 19.2, 3: 26.5, 2: 17.8, 1: 23.5 }, passRate3Plus: 58.7, totalTestTakers: 472000 },
  ],
  sources: [
    {
      publisher: 'College Board',
      title: 'AP U.S. History Course and Exam Description (CED)',
      url: 'https://apcentral.collegeboard.org/courses/ap-united-states-history/course',
      year: 2024,
    },
    {
      publisher: 'College Board Research',
      title: 'AP U.S. History Score Distributions (2020–2024)',
      url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions',
      year: 2024,
    },
  ],
  relatedSubjectSlugs: ['ap-lang-score-calculator', 'ap-psychology-score-calculator', 'ap-biology-score-calculator'],
};

// 2. AP English Language and Composition (AP Lang)
export const apLangConfig: SubjectExamConfig = {
  id: 'ap-lang',
  name: 'AP English Language and Composition',
  abbreviation: 'AP Lang',
  slug: 'ap-lang-score-calculator',
  category: 'English',
  heroBadge: 'ap lang score calculator · 45 MCQ & 3 Essay Rubric',
  metaTitle: 'ap lang score calculator 2026 – AP English Language Score Predictor',
  metaDescription:
    'Use our free ap lang score calculator to estimate your AP English Language score. Includes 45% Multiple Choice and 55% Free Response rubrics.',
  h1: 'AP Lang Score Calculator',
  shortDescription:
    'Estimate your AP English Language score from your multiple-choice practice and 6-point Synthesis, Rhetorical Analysis, and Argument essays.',
  defaultYear: 2026,
  examYears: {
    2026: {
      year: 2026,
      label: '2026 Standard Curve',
      isOfficialCutoff: true,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice',
          shortName: 'MCQ',
          maxScore: 45,
          weightPercent: 45,
          timeLimitMinutes: 60,
          description: '45 questions based on nonfiction texts and composition skills (60 minutes). Worth 1.0 composite pt each.',
        },
        {
          id: 'synthesis',
          name: 'Section II, Question 1: Synthesis Essay',
          shortName: 'Synthesis',
          maxScore: 6,
          weightPercent: 18.33,
          timeLimitMinutes: 45,
          description: 'Synthesis essay integrating at least 3 provided sources (1 thesis, 4 evidence/commentary, 1 sophistication).',
        },
        {
          id: 'rhetorical',
          name: 'Section II, Question 2: Rhetorical Analysis',
          shortName: 'Rhetorical Analysis',
          maxScore: 6,
          weightPercent: 18.33,
          timeLimitMinutes: 45,
          description: 'Analyzes rhetorical choices in a provided nonfiction text (1 thesis, 4 evidence/commentary, 1 sophistication).',
        },
        {
          id: 'argument',
          name: 'Section II, Question 3: Argument Essay',
          shortName: 'Argument Essay',
          maxScore: 6,
          weightPercent: 18.34,
          timeLimitMinutes: 40,
          description: 'Defends, challenges, or qualifies a philosophical claim with independent evidence and reasoning.',
        },
      ],
      cutoffs: createCutoffs(75, 61, 50, 38),
      confidenceInterval: { margin: 2.5, description: 'Composite margin ±2.5 points based on reader grading variance.' },
      defaultScores: { mcq: 33, synthesis: 4, rhetorical: 4, argument: 4 },
      presets: {
        score5: { mcq: 38, synthesis: 5, rhetorical: 5, argument: 5 },
        score4: { mcq: 32, synthesis: 4, rhetorical: 4, argument: 4 },
        score3: { mcq: 27, synthesis: 3, rhetorical: 3, argument: 3 },
      },
    },
    2027: {
      year: 2027,
      label: '2027 Projected Curve',
      isOfficialCutoff: false,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice',
          shortName: 'MCQ',
          maxScore: 45,
          weightPercent: 45,
          timeLimitMinutes: 60,
          description: '45 questions testing reading comprehension and editing/composition (60 minutes).',
        },
        {
          id: 'synthesis',
          name: 'Section II, Question 1: Synthesis Essay',
          shortName: 'Synthesis',
          maxScore: 6,
          weightPercent: 18.33,
          timeLimitMinutes: 45,
          description: '6-point rubric synthesis prompt using documentary sources.',
        },
        {
          id: 'rhetorical',
          name: 'Section II, Question 2: Rhetorical Analysis',
          shortName: 'Rhetorical Analysis',
          maxScore: 6,
          weightPercent: 18.33,
          timeLimitMinutes: 45,
          description: '6-point rubric rhetorical analysis essay.',
        },
        {
          id: 'argument',
          name: 'Section II, Question 3: Argument Essay',
          shortName: 'Argument Essay',
          maxScore: 6,
          weightPercent: 18.34,
          timeLimitMinutes: 40,
          description: '6-point rubric argumentative composition.',
        },
      ],
      cutoffs: createCutoffs(76, 62, 51, 39),
      confidenceInterval: { margin: 3.0, description: 'Projected curve margin ±3.0 points.' },
      defaultScores: { mcq: 33, synthesis: 4, rhetorical: 4, argument: 4 },
      presets: {
        score5: { mcq: 39, synthesis: 5, rhetorical: 5, argument: 5 },
        score4: { mcq: 33, synthesis: 4, rhetorical: 4, argument: 4 },
        score3: { mcq: 28, synthesis: 3, rhetorical: 3, argument: 3 },
      },
    },
  },
  historicalDistributions: [
    { year: 2024, distribution: { 5: 10.3, 4: 21.8, 3: 27.2, 2: 24.5, 1: 16.2 }, passRate3Plus: 59.3, totalTestTakers: 560000 },
    { year: 2023, distribution: { 5: 10.3, 4: 20.3, 3: 26.2, 2: 27.3, 1: 15.9 }, passRate3Plus: 56.8, totalTestTakers: 550000 },
    { year: 2022, distribution: { 5: 10.4, 4: 20.9, 3: 24.6, 2: 27.8, 1: 16.3 }, passRate3Plus: 55.9, totalTestTakers: 520000 },
    { year: 2021, distribution: { 5: 9.1, 4: 23.3, 3: 25.1, 2: 26.0, 1: 16.5 }, passRate3Plus: 57.5, totalTestTakers: 518000 },
    { year: 2020, distribution: { 5: 12.6, 4: 20.4, 3: 29.1, 2: 26.2, 1: 11.7 }, passRate3Plus: 62.1, totalTestTakers: 535000 },
  ],
  sources: [
    {
      publisher: 'College Board',
      title: 'AP English Language and Composition Course and Exam Description (CED)',
      url: 'https://apcentral.collegeboard.org/courses/ap-english-language-and-composition/course',
      year: 2024,
    },
    {
      publisher: 'College Board Research',
      title: 'AP English Language Score Distributions',
      url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions',
      year: 2024,
    },
  ],
  relatedSubjectSlugs: ['apush-score-calculator', 'ap-psychology-score-calculator', 'ap-biology-score-calculator'],
};

// 3. AP Biology
export const apBioConfig: SubjectExamConfig = {
  id: 'ap-biology',
  name: 'AP Biology',
  abbreviation: 'AP Bio',
  slug: 'ap-biology-score-calculator',
  category: 'Sciences',
  heroBadge: 'ap bio score calculator · 60 MCQ & 40 FRQ Points',
  metaTitle: 'ap bio score calculator 2026 – AP Biology Score Predictor',
  metaDescription:
    'Calculate your estimated score with our ap bio score calculator. Features official 50% Multiple Choice and 50% Free Response weighting.',
  h1: 'AP Biology Score Calculator',
  shortDescription:
    'Estimate your AP Biology score from your practice multiple-choice (60 questions, 50%) and free-response (6 questions / 40 raw points, 50%) performance.',
  defaultYear: 2026,
  examYears: {
    2026: {
      year: 2026,
      label: '2026 Exam Curve',
      isOfficialCutoff: true,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice Questions',
          shortName: 'MCQ',
          maxScore: 60,
          weightPercent: 50,
          timeLimitMinutes: 90,
          description: '60 multiple-choice questions (90 minutes). Assesses experimental design, models, and biological data interpretation.',
        },
        {
          id: 'frq_long',
          name: 'Section II, Part A: Long Free Response (Q1 & Q2)',
          shortName: 'Long FRQ',
          maxScore: 18,
          weightPercent: 22.5,
          timeLimitMinutes: 45,
          description: 'Two long questions (typically 8–10 pts each; 18 pts total): Interpreting experimental results with graphing.',
        },
        {
          id: 'frq_short',
          name: 'Section II, Part B: Short Free Response (Q3–Q6)',
          shortName: 'Short FRQ',
          maxScore: 16,
          weightPercent: 27.5,
          timeLimitMinutes: 45,
          description: 'Four short questions (4 pts each = 16 pts total): Scientific investigation, conceptual analysis, and visual representations.',
        },
      ],
      cutoffs: createCutoffs(72, 59, 46, 34),
      confidenceInterval: { margin: 2.5, description: 'Composite score margin ±2.5 points based on experimental grading rubrics.' },
      defaultScores: { mcq: 45, frq_long: 12, frq_short: 11 },
      presets: {
        score5: { mcq: 50, frq_long: 15, frq_short: 13 },
        score4: { mcq: 42, frq_long: 11, frq_short: 10 },
        score3: { mcq: 34, frq_long: 8, frq_short: 7 },
      },
    },
    2027: {
      year: 2027,
      label: '2027 Projected Curve',
      isOfficialCutoff: false,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice Questions',
          shortName: 'MCQ',
          maxScore: 60,
          weightPercent: 50,
          timeLimitMinutes: 90,
          description: '60 multiple-choice questions (90 minutes). 50% exam weight.',
        },
        {
          id: 'frq_long',
          name: 'Section II, Part A: Long Free Response (Q1 & Q2)',
          shortName: 'Long FRQ',
          maxScore: 18,
          weightPercent: 22.5,
          timeLimitMinutes: 45,
          description: '2 long questions (18 total raw points).',
        },
        {
          id: 'frq_short',
          name: 'Section II, Part B: Short Free Response (Q3–Q6)',
          shortName: 'Short FRQ',
          maxScore: 16,
          weightPercent: 27.5,
          timeLimitMinutes: 45,
          description: '4 short questions (16 total raw points).',
        },
      ],
      cutoffs: createCutoffs(73, 60, 47, 35),
      confidenceInterval: { margin: 3.0, description: 'Projected curve margin ±3.0 points.' },
      defaultScores: { mcq: 45, frq_long: 12, frq_short: 11 },
      presets: {
        score5: { mcq: 51, frq_long: 15, frq_short: 13 },
        score4: { mcq: 43, frq_long: 11, frq_short: 10 },
        score3: { mcq: 35, frq_long: 8, frq_short: 7 },
      },
    },
  },
  historicalDistributions: [
    { year: 2024, distribution: { 5: 15.2, 4: 23.4, 3: 28.5, 2: 23.7, 1: 9.2 }, passRate3Plus: 67.1, totalTestTakers: 245000 },
    { year: 2023, distribution: { 5: 14.3, 4: 23.0, 3: 27.1, 2: 23.9, 1: 11.7 }, passRate3Plus: 64.4, totalTestTakers: 239000 },
    { year: 2022, distribution: { 5: 14.8, 4: 22.8, 3: 30.3, 2: 23.1, 1: 9.0 }, passRate3Plus: 67.9, totalTestTakers: 220000 },
    { year: 2021, distribution: { 5: 7.4, 4: 20.0, 3: 31.8, 2: 27.9, 1: 12.9 }, passRate3Plus: 59.2, totalTestTakers: 215000 },
    { year: 2020, distribution: { 5: 9.5, 4: 24.1, 3: 35.4, 2: 21.9, 1: 9.1 }, passRate3Plus: 69.0, totalTestTakers: 230000 },
  ],
  sources: [
    {
      publisher: 'College Board',
      title: 'AP Biology Course and Exam Description (CED)',
      url: 'https://apcentral.collegeboard.org/courses/ap-biology/course',
      year: 2024,
    },
    {
      publisher: 'College Board Research',
      title: 'AP Biology Official Score Distributions',
      url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions',
      year: 2024,
    },
  ],
  relatedSubjectSlugs: ['ap-chemistry-score-calculator', 'ap-psychology-score-calculator', 'ap-calculus-ab-score-calculator'],
};

// 4. AP Calculus AB
export const apCalcAbConfig: SubjectExamConfig = {
  id: 'ap-calculus-ab',
  name: 'AP Calculus AB',
  abbreviation: 'AP Calc AB',
  slug: 'ap-calculus-ab-score-calculator',
  category: 'Math & Computer Science',
  heroBadge: 'ap calc ab score calculator · 108 Composite Scale',
  metaTitle: 'ap calc ab score calculator 2026 – AP Calculus AB',
  metaDescription:
    'Use our ap calc ab score calculator to estimate your AP score from practice tests. Convert your 45 MCQ and 6 Free-Response questions into official composite scores.',
  h1: 'AP Calculus AB Score Calculator',
  shortDescription:
    'Estimate your AP Calculus AB score using your multiple-choice (45 questions, 50%) and free-response (6 questions / 54 raw points, 50%) results.',
  defaultYear: 2026,
  examYears: {
    2026: {
      year: 2026,
      label: '2026 Exam Curve',
      isOfficialCutoff: true,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice (Parts A & B)',
          shortName: 'MCQ (45 Questions)',
          maxScore: 45,
          weightPercent: 50,
          timeLimitMinutes: 105,
          description: '45 questions total: Part A (30 no-calculator, 60 min) + Part B (15 calculator, 45 min). 50% exam weight.',
        },
        {
          id: 'frq',
          name: 'Section II: Free Response (6 Questions)',
          shortName: 'FRQ (54 Points)',
          maxScore: 54,
          weightPercent: 50,
          timeLimitMinutes: 90,
          description: '6 multi-part questions (9 pts each = 54 pts): Part A (2 calculator, 30 min) + Part B (4 no-calculator, 60 min).',
        },
      ],
      cutoffs: createCutoffs(68, 52, 38, 27),
      confidenceInterval: { margin: 2.0, description: 'Composite error margin ±2.0 points (~±2.2 raw composite on 108 scale).' },
      defaultScores: { mcq: 32, frq: 36 },
      presets: {
        score5: { mcq: 36, frq: 42 },
        score4: { mcq: 28, frq: 30 },
        score3: { mcq: 21, frq: 21 },
      },
    },
    2027: {
      year: 2027,
      label: '2027 Projected Curve',
      isOfficialCutoff: false,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice',
          shortName: 'MCQ',
          maxScore: 45,
          weightPercent: 50,
          timeLimitMinutes: 105,
          description: '45 questions (50% exam weight).',
        },
        {
          id: 'frq',
          name: 'Section II: Free Response',
          shortName: 'FRQ',
          maxScore: 54,
          weightPercent: 50,
          timeLimitMinutes: 90,
          description: '6 questions x 9 points = 54 total raw points.',
        },
      ],
      cutoffs: createCutoffs(69, 53, 39, 28),
      confidenceInterval: { margin: 2.5, description: 'Projected curve margin ±2.5 points.' },
      defaultScores: { mcq: 32, frq: 36 },
      presets: {
        score5: { mcq: 37, frq: 42 },
        score4: { mcq: 29, frq: 31 },
        score3: { mcq: 22, frq: 22 },
      },
    },
  },
  historicalDistributions: [
    { year: 2024, distribution: { 5: 22.8, 4: 17.5, 3: 22.1, 2: 20.3, 1: 17.3 }, passRate3Plus: 62.4, totalTestTakers: 270000 },
    { year: 2023, distribution: { 5: 22.4, 4: 16.0, 3: 19.5, 2: 22.8, 1: 19.3 }, passRate3Plus: 57.9, totalTestTakers: 260000 },
    { year: 2022, distribution: { 5: 20.4, 4: 16.1, 3: 19.1, 2: 22.6, 1: 21.8 }, passRate3Plus: 55.6, totalTestTakers: 250000 },
    { year: 2021, distribution: { 5: 17.7, 4: 14.4, 3: 18.9, 2: 24.3, 1: 24.7 }, passRate3Plus: 51.0, totalTestTakers: 251000 },
    { year: 2020, distribution: { 5: 19.7, 4: 19.9, 3: 21.8, 2: 19.5, 1: 19.1 }, passRate3Plus: 61.4, totalTestTakers: 265000 },
  ],
  sources: [
    {
      publisher: 'College Board',
      title: 'AP Calculus AB and BC Course and Exam Description',
      url: 'https://apcentral.collegeboard.org/courses/ap-calculus-ab/course',
      year: 2024,
    },
    {
      publisher: 'College Board Research',
      title: 'AP Calculus AB Score Distribution Reports',
      url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions',
      year: 2024,
    },
  ],
  relatedSubjectSlugs: ['ap-calculus-bc-score-calculator', 'ap-chemistry-score-calculator', 'ap-csp-score-calculator'],
};

// 5. AP Calculus BC
export const apCalcBcConfig: SubjectExamConfig = {
  id: 'ap-calculus-bc',
  name: 'AP Calculus BC',
  abbreviation: 'AP Calc BC',
  slug: 'ap-calculus-bc-score-calculator',
  category: 'Math & Computer Science',
  heroBadge: 'ap calc bc score calculator · Includes AB Subscore',
  metaTitle: 'ap calc bc score calculator 2026 – AP Calculus BC',
  metaDescription:
    'Use our ap calc bc score calculator to calculate your AP Calculus BC composite and estimated 1–5 score across series, parametric, and vector calculus.',
  h1: 'AP Calculus BC Score Calculator',
  shortDescription:
    'Estimate your AP Calculus BC score using your multiple-choice (45 questions, 50%) and free-response (6 questions / 54 points, 50%) practice results.',
  defaultYear: 2026,
  examYears: {
    2026: {
      year: 2026,
      label: '2026 Exam Curve',
      isOfficialCutoff: true,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice (Parts A & B)',
          shortName: 'MCQ (45 Questions)',
          maxScore: 45,
          weightPercent: 50,
          timeLimitMinutes: 105,
          description: '45 questions total: Part A (30 no-calculator, 60 min) + Part B (15 calculator, 45 min). 50% exam weight.',
        },
        {
          id: 'frq',
          name: 'Section II: Free Response (6 Questions)',
          shortName: 'FRQ (54 Points)',
          maxScore: 54,
          weightPercent: 50,
          timeLimitMinutes: 90,
          description: '6 questions (9 pts each = 54 pts): Part A (2 calculator, 30 min) + Part B (4 no-calculator, 60 min). Includes series & parametric.',
        },
      ],
      cutoffs: createCutoffs(63, 50, 39, 29),
      confidenceInterval: { margin: 2.0, description: 'Composite margin ±2.0 points (~±2.2 raw composite on 108 scale).' },
      defaultScores: { mcq: 33, frq: 38 },
      presets: {
        score5: { mcq: 35, frq: 38 },
        score4: { mcq: 27, frq: 29 },
        score3: { mcq: 21, frq: 23 },
      },
    },
    2027: {
      year: 2027,
      label: '2027 Projected Curve',
      isOfficialCutoff: false,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice',
          shortName: 'MCQ',
          maxScore: 45,
          weightPercent: 50,
          timeLimitMinutes: 105,
          description: '45 questions total across differential, integral, and series calculus.',
        },
        {
          id: 'frq',
          name: 'Section II: Free Response',
          shortName: 'FRQ',
          maxScore: 54,
          weightPercent: 50,
          timeLimitMinutes: 90,
          description: '6 multi-part free-response questions (54 total points).',
        },
      ],
      cutoffs: createCutoffs(64, 51, 40, 30),
      confidenceInterval: { margin: 2.5, description: 'Projected curve margin ±2.5 points.' },
      defaultScores: { mcq: 33, frq: 38 },
      presets: {
        score5: { mcq: 36, frq: 38 },
        score4: { mcq: 28, frq: 30 },
        score3: { mcq: 22, frq: 24 },
      },
    },
  },
  historicalDistributions: [
    { year: 2024, distribution: { 5: 45.1, 4: 16.2, 3: 18.9, 2: 13.8, 1: 6.0 }, passRate3Plus: 80.2, totalTestTakers: 140000 },
    { year: 2023, distribution: { 5: 43.5, 4: 16.0, 3: 19.0, 2: 15.2, 1: 6.3 }, passRate3Plus: 78.5, totalTestTakers: 135000 },
    { year: 2022, distribution: { 5: 40.9, 4: 16.5, 3: 19.9, 2: 15.5, 1: 7.2 }, passRate3Plus: 77.3, totalTestTakers: 125000 },
    { year: 2021, distribution: { 5: 38.8, 4: 16.5, 3: 19.9, 2: 17.5, 1: 7.3 }, passRate3Plus: 75.2, totalTestTakers: 124000 },
    { year: 2020, distribution: { 5: 44.5, 4: 18.2, 3: 18.8, 2: 12.3, 1: 6.2 }, passRate3Plus: 81.5, totalTestTakers: 130000 },
  ],
  sources: [
    {
      publisher: 'College Board',
      title: 'AP Calculus BC Course and Exam Description (CED)',
      url: 'https://apcentral.collegeboard.org/courses/ap-calculus-bc/course',
      year: 2024,
    },
    {
      publisher: 'College Board Research',
      title: 'AP Calculus BC Score Distributions',
      url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions',
      year: 2024,
    },
  ],
  relatedSubjectSlugs: ['ap-calculus-ab-score-calculator', 'ap-chemistry-score-calculator', 'ap-csp-score-calculator'],
};

// 6. AP Psychology (AP Psych) - Revised Format (75 MCQ + AAQ & EBQ FRQs)
export const apPsychConfig: SubjectExamConfig = {
  id: 'ap-psychology',
  name: 'AP Psychology',
  abbreviation: 'AP Psych',
  slug: 'ap-psychology-score-calculator',
  category: 'History & Social Sciences',
  heroBadge: 'AP Psychology Score Calculator · Redesigned 75 MCQ Exam',
  metaTitle: 'AP Psychology Score Calculator 2026 – AP Psych Predictor',
  metaDescription:
    'Estimate your score with our AP Psychology Score Calculator configured for the revised exam structure: 75 multiple-choice questions and two free-response prompts.',
  h1: 'AP Psychology Score Calculator',
  shortDescription:
    'Estimate your AP Psychology score using the updated College Board exam format: 75 multiple-choice questions (66.7%) and 2 free-response questions (33.3%).',
  defaultYear: 2026,
  examYears: {
    2026: {
      year: 2026,
      label: '2026 Revised Format Curve',
      isOfficialCutoff: true,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice Questions',
          shortName: 'MCQ (75 Questions)',
          maxScore: 75,
          weightPercent: 66.67,
          timeLimitMinutes: 90,
          description: '75 stimulus and scenario-based questions (90 minutes). Accounts for two-thirds of the composite score.',
        },
        {
          id: 'aaq',
          name: 'Section II, Question 1: Article Analysis Question (AAQ)',
          shortName: 'AAQ (7 Points)',
          maxScore: 7,
          weightPercent: 16.66,
          timeLimitMinutes: 45,
          description: 'Critique and evaluate a psychological research study or published article (7 rubric points, 45 min).',
        },
        {
          id: 'ebq',
          name: 'Section II, Question 2: Evidence-Based Question (EBQ)',
          shortName: 'EBQ (7 Points)',
          maxScore: 7,
          weightPercent: 16.67,
          timeLimitMinutes: 45,
          description: 'Construct an evidence-based argument answering a psychological prompt (7 rubric points, 45 min).',
        },
      ],
      cutoffs: createCutoffs(76, 63, 50, 38),
      confidenceInterval: { margin: 2.5, description: 'Composite margin ±2.5 points based on new FRQ rubric calibrations.' },
      defaultScores: { mcq: 57, aaq: 5, ebq: 5 },
      presets: {
        score5: { mcq: 64, aaq: 6, ebq: 6 },
        score4: { mcq: 54, aaq: 5, ebq: 4 },
        score3: { mcq: 44, aaq: 4, ebq: 3 },
      },
    },
    2027: {
      year: 2027,
      label: '2027 Projected Curve',
      isOfficialCutoff: false,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice',
          shortName: 'MCQ',
          maxScore: 75,
          weightPercent: 66.67,
          timeLimitMinutes: 90,
          description: '75 multiple-choice questions (90 minutes).',
        },
        {
          id: 'aaq',
          name: 'Section II, Question 1: Article Analysis',
          shortName: 'AAQ',
          maxScore: 7,
          weightPercent: 16.66,
          timeLimitMinutes: 45,
          description: 'Article Analysis Question (7 points).',
        },
        {
          id: 'ebq',
          name: 'Section II, Question 2: Evidence-Based Question',
          shortName: 'EBQ',
          maxScore: 7,
          weightPercent: 16.67,
          timeLimitMinutes: 45,
          description: 'Evidence-Based Argument Question (7 points).',
        },
      ],
      cutoffs: createCutoffs(77, 64, 51, 39),
      confidenceInterval: { margin: 3.0, description: 'Projected curve margin ±3.0 points.' },
      defaultScores: { mcq: 57, aaq: 5, ebq: 5 },
      presets: {
        score5: { mcq: 65, aaq: 6, ebq: 6 },
        score4: { mcq: 55, aaq: 5, ebq: 4 },
        score3: { mcq: 45, aaq: 4, ebq: 3 },
      },
    },
  },
  historicalDistributions: [
    { year: 2024, distribution: { 5: 17.8, 4: 21.6, 3: 20.3, 2: 13.2, 1: 27.1 }, passRate3Plus: 59.7, totalTestTakers: 330000 },
    { year: 2023, distribution: { 5: 17.0, 4: 22.0, 3: 20.6, 2: 13.5, 1: 26.9 }, passRate3Plus: 59.6, totalTestTakers: 320000 },
    { year: 2022, distribution: { 5: 16.9, 4: 22.3, 3: 19.8, 2: 13.9, 1: 27.1 }, passRate3Plus: 59.0, totalTestTakers: 300000 },
    { year: 2021, distribution: { 5: 14.1, 4: 21.0, 3: 19.3, 2: 14.4, 1: 31.2 }, passRate3Plus: 54.4, totalTestTakers: 288000 },
    { year: 2020, distribution: { 5: 22.4, 4: 25.4, 3: 23.5, 2: 9.8, 1: 18.9 }, passRate3Plus: 71.3, totalTestTakers: 310000 },
  ],
  sources: [
    {
      publisher: 'College Board',
      title: 'AP Psychology Course and Exam Description (Revised Framework)',
      url: 'https://apcentral.collegeboard.org/courses/ap-psychology/course',
      year: 2024,
    },
    {
      publisher: 'College Board Research',
      title: 'AP Psychology Official Score Distributions',
      url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions',
      year: 2024,
    },
  ],
  relatedSubjectSlugs: ['ap-biology-score-calculator', 'apush-score-calculator', 'ap-lang-score-calculator'],
};

// 7. AP Chemistry (AP Chem)
export const apChemConfig: SubjectExamConfig = {
  id: 'ap-chemistry',
  name: 'AP Chemistry',
  abbreviation: 'AP Chem',
  slug: 'ap-chemistry-score-calculator',
  category: 'Sciences',
  heroBadge: 'AP Chemistry Score Calculator · 60 MCQ & 7 FRQ Points',
  metaTitle: 'AP Chemistry Score Calculator 2026 – AP Chem Predictor',
  metaDescription:
    'Use our AP Chemistry Score Calculator to estimate your AP Chemistry score from practice-exam results. Evaluates Section I MCQ (50%) and Section II FRQ (50%).',
  h1: 'AP Chemistry Score Calculator',
  shortDescription:
    'Estimate your AP Chemistry score from your practice multiple-choice (60 questions, 50%) and 7 multi-part free-response questions (46 raw points, 50%).',
  defaultYear: 2026,
  examYears: {
    2026: {
      year: 2026,
      label: '2026 Exam Curve',
      isOfficialCutoff: true,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice Questions',
          shortName: 'MCQ (60 Questions)',
          maxScore: 60,
          weightPercent: 50,
          timeLimitMinutes: 90,
          description: '60 multiple-choice questions (90 minutes, scientific/graphing calculator permitted). Worth 0.833 composite pts each.',
        },
        {
          id: 'frq_long',
          name: 'Section II, Part A: Long Free Response (Q1–Q3)',
          shortName: 'Long FRQ (30 Pts)',
          maxScore: 30,
          weightPercent: 32.61,
          timeLimitMinutes: 65,
          description: '3 long free-response questions (10 points each = 30 points total): Multi-step quantitative problem solving.',
        },
        {
          id: 'frq_short',
          name: 'Section II, Part B: Short Free Response (Q4–Q7)',
          shortName: 'Short FRQ (16 Pts)',
          maxScore: 16,
          weightPercent: 17.39,
          timeLimitMinutes: 40,
          description: '4 short free-response questions (4 points each = 16 points total): Particulate models, spectroscopy, and laboratory procedures.',
        },
      ],
      cutoffs: createCutoffs(72, 57, 43, 29),
      confidenceInterval: { margin: 2.5, description: 'Composite margin ±2.5 points based on quantitative FRQ point distribution.' },
      defaultScores: { mcq: 44, frq_long: 21, frq_short: 11 },
      presets: {
        score5: { mcq: 50, frq_long: 25, frq_short: 13 },
        score4: { mcq: 40, frq_long: 19, frq_short: 10 },
        score3: { mcq: 32, frq_long: 14, frq_short: 7 },
      },
    },
    2027: {
      year: 2027,
      label: '2027 Projected Curve',
      isOfficialCutoff: false,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice',
          shortName: 'MCQ',
          maxScore: 60,
          weightPercent: 50,
          timeLimitMinutes: 90,
          description: '60 multiple-choice questions (50% exam weight).',
        },
        {
          id: 'frq_long',
          name: 'Section II, Part A: Long Free Response',
          shortName: 'Long FRQ',
          maxScore: 30,
          weightPercent: 32.61,
          timeLimitMinutes: 65,
          description: '3 questions x 10 pts = 30 points.',
        },
        {
          id: 'frq_short',
          name: 'Section II, Part B: Short Free Response',
          shortName: 'Short FRQ',
          maxScore: 16,
          weightPercent: 17.39,
          timeLimitMinutes: 40,
          description: '4 questions x 4 pts = 16 points.',
        },
      ],
      cutoffs: createCutoffs(73, 58, 44, 30),
      confidenceInterval: { margin: 3.0, description: 'Projected curve margin ±3.0 points.' },
      defaultScores: { mcq: 44, frq_long: 21, frq_short: 11 },
      presets: {
        score5: { mcq: 51, frq_long: 25, frq_short: 13 },
        score4: { mcq: 41, frq_long: 19, frq_short: 10 },
        score3: { mcq: 33, frq_long: 14, frq_short: 7 },
      },
    },
  },
  historicalDistributions: [
    { year: 2024, distribution: { 5: 17.3, 4: 27.2, 3: 31.0, 2: 16.8, 1: 7.7 }, passRate3Plus: 75.5, totalTestTakers: 155000 },
    { year: 2023, distribution: { 5: 16.0, 4: 27.1, 3: 32.0, 2: 17.2, 1: 7.7 }, passRate3Plus: 75.1, totalTestTakers: 145000 },
    { year: 2022, distribution: { 5: 12.5, 4: 24.3, 3: 30.8, 2: 21.0, 1: 11.4 }, passRate3Plus: 67.6, totalTestTakers: 135000 },
    { year: 2021, distribution: { 5: 11.2, 4: 23.3, 3: 28.5, 2: 24.1, 1: 12.9 }, passRate3Plus: 63.0, totalTestTakers: 130000 },
    { year: 2020, distribution: { 5: 10.6, 4: 23.4, 3: 28.1, 2: 25.1, 1: 12.8 }, passRate3Plus: 62.1, totalTestTakers: 140000 },
  ],
  sources: [
    {
      publisher: 'College Board',
      title: 'AP Chemistry Course and Exam Description (CED)',
      url: 'https://apcentral.collegeboard.org/courses/ap-chemistry/course',
      year: 2024,
    },
    {
      publisher: 'College Board Research',
      title: 'AP Chemistry Score Distribution Reports',
      url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions',
      year: 2024,
    },
  ],
  relatedSubjectSlugs: ['ap-biology-score-calculator', 'ap-calculus-ab-score-calculator', 'ap-calculus-bc-score-calculator'],
};

// 8. AP Computer Science Principles (AP CSP)
export const apCspConfig: SubjectExamConfig = {
  id: 'ap-csp',
  name: 'AP Computer Science Principles',
  abbreviation: 'AP CSP',
  slug: 'ap-csp-score-calculator',
  category: 'Math & Computer Science',
  heroBadge: 'ap csp score calculator · 70% MCQ & 30% Create Task',
  metaTitle: 'ap csp score calculator 2026 – AP Computer Science Principles',
  metaDescription:
    'Calculate your AP score with our ap csp score calculator. Covers 70 Multiple Choice Questions (70%) and Create Task Written Response (30%).',
  h1: 'AP CSP Score Calculator',
  shortDescription:
    'Estimate your AP Computer Science Principles score using your 70 multiple-choice questions (70%) and Create Performance Task written response points (6 points, 30%).',
  defaultYear: 2026,
  examYears: {
    2026: {
      year: 2026,
      label: '2026 Standard Curve',
      isOfficialCutoff: true,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: End-of-Course Multiple Choice',
          shortName: 'MCQ (70 Questions)',
          maxScore: 70,
          weightPercent: 70,
          timeLimitMinutes: 120,
          description: '70 multiple-choice questions (120 minutes): 57 single-select, 5 reading-passage questions, and 8 multiple-select questions.',
        },
        {
          id: 'create_task',
          name: 'Section II: Create Performance Task Written Response',
          shortName: 'Create Task (6 Points)',
          maxScore: 6,
          weightPercent: 30,
          timeLimitMinutes: 60,
          description: '4 exam-day written response prompts based on your submitted program code (6 rubric points). Each point adds 5.0 composite points.',
        },
      ],
      cutoffs: createCutoffs(86, 73, 60, 44),
      confidenceInterval: { margin: 2.0, description: 'Composite margin ±2.0 points based on Create Task rubric equating.' },
      defaultScores: { mcq: 55, create_task: 5 },
      presets: {
        score5: { mcq: 63, create_task: 6 },
        score4: { mcq: 53, create_task: 5 },
        score3: { mcq: 43, create_task: 4 },
      },
    },
    2027: {
      year: 2027,
      label: '2027 Projected Curve',
      isOfficialCutoff: false,
      totalCompositeMax: 100,
      sections: [
        {
          id: 'mcq',
          name: 'Section I: Multiple Choice Exam',
          shortName: 'MCQ',
          maxScore: 70,
          weightPercent: 70,
          timeLimitMinutes: 120,
          description: '70 questions (70% exam weight).',
        },
        {
          id: 'create_task',
          name: 'Section II: Create Task Written Response',
          shortName: 'Create Task',
          maxScore: 6,
          weightPercent: 30,
          timeLimitMinutes: 60,
          description: '4 written prompts administered on exam day.',
        },
      ],
      cutoffs: createCutoffs(87, 74, 61, 45),
      confidenceInterval: { margin: 2.5, description: 'Projected curve margin ±2.5 points.' },
      defaultScores: { mcq: 55, create_task: 5 },
      presets: {
        score5: { mcq: 64, create_task: 6 },
        score4: { mcq: 54, create_task: 5 },
        score3: { mcq: 44, create_task: 4 },
      },
    },
  },
  historicalDistributions: [
    { year: 2024, distribution: { 5: 13.6, 4: 21.8, 3: 31.3, 2: 18.2, 1: 15.1 }, passRate3Plus: 66.7, totalTestTakers: 180000 },
    { year: 2023, distribution: { 5: 12.1, 4: 21.8, 3: 29.8, 2: 19.3, 1: 17.0 }, passRate3Plus: 63.7, totalTestTakers: 165000 },
    { year: 2022, distribution: { 5: 11.4, 4: 21.7, 3: 30.4, 2: 21.6, 1: 14.9 }, passRate3Plus: 63.5, totalTestTakers: 150000 },
    { year: 2021, distribution: { 5: 12.4, 4: 21.7, 3: 32.4, 2: 20.3, 1: 13.2 }, passRate3Plus: 66.5, totalTestTakers: 140000 },
    { year: 2020, distribution: { 5: 10.9, 4: 23.5, 3: 37.2, 2: 16.4, 1: 12.0 }, passRate3Plus: 71.6, totalTestTakers: 135000 },
  ],
  sources: [
    {
      publisher: 'College Board',
      title: 'AP Computer Science Principles Course and Exam Description (CED)',
      url: 'https://apcentral.collegeboard.org/courses/ap-computer-science-principles/course',
      year: 2024,
    },
    {
      publisher: 'College Board Research',
      title: 'AP Computer Science Principles Score Distributions',
      url: 'https://apstudents.collegeboard.org/about-ap-scores/score-distributions',
      year: 2024,
    },
  ],
  relatedSubjectSlugs: ['ap-calculus-ab-score-calculator', 'ap-calculus-bc-score-calculator', 'ap-psychology-score-calculator'],
};

// Consolidated Subjects Map
export const ALL_SUBJECTS: SubjectExamConfig[] = [
  apushConfig,
  apLangConfig,
  apBioConfig,
  apCalcAbConfig,
  apCalcBcConfig,
  apPsychConfig,
  apChemConfig,
  apCspConfig,
];

export const SUBJECTS_BY_SLUG: Record<string, SubjectExamConfig> = Object.fromEntries(
  ALL_SUBJECTS.map((sub) => [sub.slug, sub])
);

export const SUBJECTS_BY_ID: Record<string, SubjectExamConfig> = Object.fromEntries(
  ALL_SUBJECTS.map((sub) => [sub.id, sub])
);

export function getSubjectBySlug(slug: string): SubjectExamConfig | undefined {
  return SUBJECTS_BY_SLUG[slug];
}

export function getSubjectById(id: string): SubjectExamConfig | undefined {
  return SUBJECTS_BY_ID[id];
}
