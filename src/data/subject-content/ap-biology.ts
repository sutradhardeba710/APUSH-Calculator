import type { SubjectContent } from './types';

export const apBioContent: SubjectContent = {
  subjectId: 'ap-biology',
  howItWorks: {
    title: 'How AP Biology Scoring Works',
    summary:
      'The AP Biology exam assesses core biological principles, mathematical analysis, and scientific investigation across a 50% Multiple Choice Section and a 50% Free-Response Section.',
    steps: [
      {
        step: '1',
        title: 'Score Section I Multiple Choice (50%)',
        explanation:
          'You answer 60 multiple-choice questions in 90 minutes. Questions include individual conceptual prompts and set-based questions presenting experimental data, pedigrees, and molecular models. Each question is worth ~0.833 composite points.',
      },
      {
        step: '2',
        title: 'Score Long Free-Response Questions (22.5%)',
        explanation:
          'Questions 1 & 2 are long questions (8–10 points each, 18 points total). Question 1 focuses on interpreting and evaluating experimental results, while Question 2 focuses on graphing, experimental design, and analyzing biological models.',
      },
      {
        step: '3',
        title: 'Score Short Free-Response Questions (27.5%)',
        explanation:
          'Questions 3–6 are 4 points each (16 points total): Scientific Investigation, Conceptual Analysis, Model Analysis, and Data Analysis. Each raw point is worth ~1.719 composite points.',
      },
      {
        step: '4',
        title: 'Equate Composite to AP 1–5 Scale',
        explanation:
          'The College Board totals your composite score (up to 100) and applies annual cutoffs. Scores of 72+ typically qualify for a 5, with passing (3+) starting around 46 composite points.',
      },
    ],
    gradingInsights:
      'AP Bio FRQ rubrics are objective and checklist-driven. Readers look for precise biological terminology (e.g., "allosteric inhibition" rather than "it changed the shape") and exact answers for graphing (axes labeled with units, consistent scale, accurate plot points, appropriate error bars).',
  },
  sectionGuide: [
    {
      title: 'Section I: Multiple Choice Questions',
      shortName: '60 MCQs (90 Minutes, 50%)',
      details: 'Assesses cellular energetics, genetics, gene expression, natural selection, and ecology. Calculator permitted throughout.',
      strategy: 'Practice pacing at 1.5 minutes per question. On data-heavy stimulus sets, read the question stems first so you know what parameters to extract from complex diagrams.',
    },
    {
      title: 'Question 1: Interpreting Experimental Results',
      shortName: 'Long FRQ 1 (8–10 Points)',
      details: 'Presents an authentic scientific experiment with control groups, variables, and quantitative data tables.',
      strategy: 'Clearly identify negative and positive controls, state the null hypothesis if prompted, and explain how altering variables impacts enzyme activity or cell signaling.',
    },
    {
      title: 'Question 2: Experimental Results with Graphing',
      shortName: 'Long FRQ 2 (8–10 Points)',
      details: 'Requires hand-drawing a graph (bar, line, or scatter), calculating rates of change, and making scientific predictions.',
      strategy: 'Remember: Title, Axes with Units, Consistent linear scale (no skipping numbers without broken axis), and properly plotted Error Bars (SEM or 95% CI).',
    },
    {
      title: 'Questions 3–6: Short Free Response',
      shortName: 'Short FRQs (4 Points Each = 16 Points)',
      details: 'Covers scientific investigation, conceptual mechanism, visual models, and data representation.',
      strategy: 'Be concise. AP Bio readers do not require essay intros or conclusions—bullet-proof, 1-to-2 sentence direct answers to each prompt letter (a, b, c, d) score full credit.',
    },
  ],
  scoreBenchmarks: [
    { score: 5, title: 'Extremely Well Qualified', cutoffDescription: '~72–100 Composite', academicValue: 'Qualifies for 4–8 college credits and placement out of introductory biology for science majors.' },
    { score: 4, title: 'Well Qualified', cutoffDescription: '~59–71 Composite', academicValue: 'Awards general biology credit at most competitive public and private research universities.' },
    { score: 3, title: 'Qualified (Passing)', cutoffDescription: '~46–58 Composite', academicValue: 'Grants non-major science distribution or introductory lab credit at hundreds of colleges.' },
    { score: 2, title: 'Possibly Qualified', cutoffDescription: '~34–45 Composite', academicValue: 'Reflects foundational biological vocabulary with difficulty applying quantitative analysis or experimental design.' },
    { score: 1, title: 'No Recommendation', cutoffDescription: '0–33 Composite', academicValue: 'Indicates limited retention of core cellular, molecular, and ecological concepts.' },
  ],
  faqs: [
    {
      question: 'How is the AP Biology exam scored?',
      answer:
        'The AP Biology exam is split equally: 50% Multiple Choice (60 questions = 50 composite points) and 50% Free Response (6 questions worth 40 raw points scaled to 50 composite points). The combined score forms a 100-point composite.',
    },
    {
      question: 'What raw score do I need for a 5 on AP Bio?',
      answer:
        'Historically, a composite score of 72 or higher earns a 5 on AP Biology. That means scoring around 48/60 on the multiple choice and roughly 26/40 across the free-response questions.',
    },
    {
      question: 'Are four-function or graphing calculators allowed on AP Biology?',
      answer:
        'Yes! A four-function, scientific, or graphing calculator is permitted on both Section I (Multiple Choice) and Section II (Free Response). Bring a familiar graphing or scientific calculator with fresh batteries.',
    },
    {
      question: 'Do I get an equations and formulas sheet on AP Bio?',
      answer:
        'Yes. An AP Biology equations sheet containing formulas for standard deviation, standard error of the mean, Chi-Square test, Hardy-Weinberg equilibrium, water potential, and Gibbs free energy is provided in both sections.',
    },
    {
      question: 'What is considered a passing score on AP Biology?',
      answer:
        'A score of 3 or higher is considered passing. In recent years, between 64% and 68% of students score a 3 or higher on the AP Biology exam.',
    },
  ],
  relatedTools: [
    {
      title: 'AP Chemistry Score Calculator',
      url: '/ap-chemistry-score-calculator/',
      badge: 'Science Track',
      description: 'Calculate your AP Chem composite score and lab/FRQ benchmarks.',
    },
    {
      title: 'AP Psychology Score Calculator',
      url: '/ap-psychology-score-calculator/',
      badge: 'Social Science',
      description: 'Score estimator for the revised 75 MCQ and Article Analysis exam.',
    },
    {
      title: 'AP Score Calculator Hub',
      url: '/ap-score-calculators/',
      badge: 'All Calculators',
      description: 'Directory of all dedicated AP subject calculators and scoring tools.',
    },
  ],
};
