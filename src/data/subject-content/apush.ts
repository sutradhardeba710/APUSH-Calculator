import type { SubjectContent } from './types';

export const apushContent: SubjectContent = {
  subjectId: 'apush',
  howItWorks: {
    title: 'How to calculate apush score with official College Board weights',
    summary:
      'To calculate apush score college board standards convert raw points earned across four distinct exam sections into a 100-point weighted composite scale. Our apush score calculator free model automates this conversion using official percentages: 40% MCQ, 20% SAQ, 25% DBQ, and 15% LEQ.',
    steps: [
      {
        step: '1',
        title: 'Calculate Section 1A Multiple-Choice (40%)',
        explanation:
          'You answer 55 stimulus-based questions in 55 minutes. There is no guessing penalty. To calculate apush exam score points for this section, raw correct answers are multiplied by ~0.7273 to produce up to 40 composite points.',
      },
      {
        step: '2',
        title: 'Calculate Section 1B Short Answers (20%)',
        explanation:
          'You complete 3 Short Answer Questions with 3 parts each (9 total raw points) in 40 minutes. To calculate apush test score results, each raw point is weighted at ~2.222 composite points.',
      },
      {
        step: '3',
        title: 'Calculate Section 2A Document-Based Question (25%)',
        explanation:
          'You write 1 DBQ essay scored on a 7-point rubric (Thesis, Context, 3 Evidence, 2 Sourcing/Analysis). Each raw DBQ point is worth ~3.571 composite points, making it the highest single-point leverage section in the apush scoring conversion calculator.',
      },
      {
        step: '4',
        title: 'Calculate Section 2B Long Essay Question (15%)',
        explanation:
          'You choose 1 of 3 LEQ prompts scored on a 6-point rubric in 40 minutes. Each raw point contributes 2.50 composite points to your total in this apush test scoring calculator.',
      },
    ],
    gradingInsights:
      'Every June, high school AP teachers and college faculty evaluate DBQ, LEQ, and SAQ responses at the annual AP Reading. Whether taking paper exams or the apush score calculator digital format, the College Board applies statistical equating so composite point boundaries reflect identical college-level rigor.',
  },
  sectionGuide: [
    {
      title: 'Section I, Part A: Multiple Choice (MCQ)',
      shortName: '55 MCQs (55 Minutes, 40%)',
      details: 'Stimulus-based sets of 3–4 questions referencing primary texts, historical maps, political cartoons, or charts from 1491 to present.',
      strategy: 'Read the stimulus attribution first to establish time period, author perspective, and historical context before reading the excerpt.',
    },
    {
      title: 'Section I, Part B: Short-Answer Questions (SAQ)',
      shortName: '3 Questions (40 Minutes, 20%)',
      details: 'Questions 1 and 2 are mandatory (secondary and primary source stimuli). For Question 3, choose between Prompt 3 (Periods 1–5) and Prompt 4 (Periods 6–9).',
      strategy: 'Use the ACE framework: Answer the prompt directly in sentence 1, Cite specific historical evidence in sentence 2, and Explain how the evidence proves the claim in sentence 3.',
    },
    {
      title: 'Section II, Part A: Document-Based Question (DBQ)',
      shortName: '1 Essay (60 Minutes, 25%)',
      details: 'Scored 0–7: 1 pt Thesis, 1 pt Contextualization, 3 pts Document Evidence & Outside Knowledge, 2 pts Sourcing (HIPP) & Complexity.',
      strategy: 'Cite and use at least 4 documents to support your argument to secure the evidence points, and provide Historical Situation, Audience, Purpose, or Point of View (HIPP) for at least 2 documents.',
    },
    {
      title: 'Section II, Part B: Long Essay Question (LEQ)',
      shortName: '1 Essay (40 Minutes, 15%)',
      details: 'Choose 1 of 3 prompts covering different historical eras. Scored 0–6 on Thesis, Context, Evidence, and Historical Reasoning.',
      strategy: 'Pick the prompt where you can name at least 3 distinct specific historical terms (events, acts, figures) rather than the prompt that sounds easiest conceptually.',
    },
  ],
  scoreBenchmarks: [
    { score: 5, title: 'Extremely Well Qualified', cutoffDescription: '~74–100 Composite', academicValue: 'Qualifies for maximum college credit, course waivers, and honors placement at top universities. This apush grade calculator benchmark reflects complete mastery.' },
    { score: 4, title: 'Well Qualified', cutoffDescription: '~60–73 Composite', academicValue: 'Granted full academic credit and general education waivers at the vast majority of U.S. colleges.' },
    { score: 3, title: 'Qualified (Passing)', cutoffDescription: '~47–59 Composite', academicValue: 'Meets credit threshold at state universities and public college systems across the nation.' },
    { score: 2, title: 'Possibly Qualified', cutoffDescription: '~35–46 Composite', academicValue: 'Close to passing tier; demonstrates foundational understanding with gaps in essay evidence or timing.' },
    { score: 1, title: 'No Recommendation', cutoffDescription: '0–34 Composite', academicValue: 'Demonstrates limited mastery of curriculum and historical analysis skills.' },
  ],
  faqs: [
    {
      question: 'What percentage is a 5 on APUSH?',
      answer:
        'Historically, a composite score of approximately 74 out of 100 (~74%) is sufficient to earn a 5 on APUSH. You do not need a 90% or 100%—earning ~42/55 on MCQ, 6/9 on SAQ, 5/7 on DBQ, and 4/6 on LEQ typically places you safely in the 5 tier.',
    },
    {
      question: 'how to calculate apush score',
      answer:
        'To calculate your score, multiply your raw MCQ score by 0.7273, your SAQ score by 2.2222, your DBQ score by 3.5714, and your LEQ score by 2.5000. Sum all four weighted components to obtain your 100-point composite, then map it to the 1–5 AP score scale.',
    },
    {
      question: 'how to manually calculate apush exam score',
      answer:
        'To manually calculate apush exam score results, use the formula: Composite = (MCQ × 0.7273) + (SAQ × 2.2222) + (DBQ × 3.5714) + (LEQ × 2.5). A composite of 74–100 converts to a 5, 60–73 to a 4, 47–59 to a 3, 35–46 to a 2, and 0–34 to a 1.',
    },
    {
      question: 'are apush score calculators accurate',
      answer:
        'Yes. This tool is built as the most accurate apush score calculator by applying official College Board Course and Exam Description (CED) section weightings (40% MCQ, 20% SAQ, 25% DBQ, 15% LEQ) and calibrated historical equating cutoffs within a ±2.5 point margin.',
    },
    {
      question: 'How does this tool compare to albert io apush score calculator or other platforms?',
      answer:
        'Unlike third-party alternatives such as albert io apush score calculator, apush score calculator albert io, albert apush score calculator, knowt apush score calculator, or fiveable apush score calculator, our platform provides an entirely free, privacy-first interface with zero account signups, interactive what-if score simulations, and instant local browser evaluation.',
    },
    {
      question: 'What is the apush calculator score conversion methodology?',
      answer:
        'The apush calculator score conversion process takes your raw scores, applies the exact mathematical multipliers for Section I and Section II, and projects your final AP 1–5 score against recent equating curves.',
    },
    {
      question: 'Can I use this score calculator apush tool for both practice tests and class exams?',
      answer:
        'Yes. This apush test score calculator is designed for unit exams, mock finals, and full-length practice tests. As an ap score calculator apush students rely on, it functions as a comprehensive apush ap score calculator and apush ap exam score calculator to accurately evaluate your pacing and score tiers across all sections.',
    },
  ],
  relatedTools: [
    {
      title: 'APUSH DBQ Rubric Calculator',
      url: '/apush-dbq-score-calculator/',
      badge: '7-Point Rubric',
      description: 'Interactive rubric breakdown for Thesis, Context, Documents, HIPP Sourcing, and Complexity.',
    },
    {
      title: 'APUSH Score Predictor & Curve Analysis',
      url: '/apush-score-predictor/',
      badge: 'Probability Model',
      description: 'Calculate your statistical likelihood of earning a 3, 4, or 5 based on historical curve distributions.',
    },
    {
      title: 'APUSH Score Distributions',
      url: '/apush-score-distribution/',
      badge: 'Historical Data',
      description: 'Compare historical APUSH pass rates and 5-rates from 2020 through 2024.',
    },
  ],
};
