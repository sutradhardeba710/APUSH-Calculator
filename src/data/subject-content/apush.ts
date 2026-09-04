import type { SubjectContent } from './types';

export const apushContent: SubjectContent = {
  subjectId: 'apush',
  howItWorks: {
    title: 'How AP U.S. History Scoring Works',
    summary:
      'The AP U.S. History exam calculates your final 1–5 score by converting raw points earned across four distinct sections into a 100-point weighted composite scale. Section weights are officially set by the College Board.',
    steps: [
      {
        step: '1',
        title: 'Calculate Section 1A Multiple-Choice (40%)',
        explanation:
          'You answer 55 stimulus-based questions in 55 minutes. There is no guessing penalty. Raw score is multiplied by ~0.7273 to produce up to 40 composite points.',
      },
      {
        step: '2',
        title: 'Calculate Section 1B Short Answers (20%)',
        explanation:
          'You complete 3 Short Answer Questions with 3 parts each (9 total raw points) in 40 minutes. Each raw point is worth ~2.222 composite points.',
      },
      {
        step: '3',
        title: 'Calculate Section 2A Document-Based Question (25%)',
        explanation:
          'You write 1 DBQ essay scored on a 7-point rubric (Thesis, Context, 3 Evidence, 2 Sourcing/Analysis). Each raw DBQ point is worth ~3.571 composite points, making it the highest single-point leverage section.',
      },
      {
        step: '4',
        title: 'Calculate Section 2B Long Essay Question (15%)',
        explanation:
          'You choose 1 of 3 LEQ prompts scored on a 6-point rubric in 40 minutes. Each raw point contributes 2.50 composite points to your total.',
      },
    ],
    gradingInsights:
      'Every June, thousands of high school AP teachers and college professors convene at the annual AP Reading to evaluate DBQ, LEQ, and SAQ responses using analytic rubrics. The College Board uses statistical equating to ensure that earning a 5 on a more difficult test form requires fewer raw points than on an easier form.',
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
    { score: 5, title: 'Extremely Well Qualified', cutoffDescription: '~74–100 Composite', academicValue: 'Qualifies for maximum college credit, course waivers, and honors placement at top universities.' },
    { score: 4, title: 'Well Qualified', cutoffDescription: '~60–73 Composite', academicValue: 'Granted full academic credit and general education waivers at the vast majority of U.S. colleges.' },
    { score: 3, title: 'Qualified (Passing)', cutoffDescription: '~47–59 Composite', academicValue: 'Meets credit threshold at state universities and public college systems across the nation.' },
    { score: 2, title: 'Possibly Qualified', cutoffDescription: '~35–46 Composite', academicValue: 'Close to passing tier; demonstrates foundational understanding with gaps in essay evidence or timing.' },
    { score: 1, title: 'No Recommendation', cutoffDescription: '0–34 Composite', academicValue: 'Demonstrates limited mastery of curriculum and historical analysis skills.' },
  ],
  faqs: [
    {
      question: 'How is the APUSH exam scored in 2026 and 2027?',
      answer:
        'The AP U.S. History exam is composed of two sections: Section I (55 Multiple Choice at 40% + 3 Short Answer Questions at 20%) and Section II (1 DBQ at 25% + 1 LEQ at 15%). The total weighted composite is 100 points, which is then mapped to the 1–5 AP score scale.',
    },
    {
      question: 'What composite score do I need for a 5 on APUSH?',
      answer:
        'Historically, a composite score of approximately 74 out of 100 is sufficient to earn a 5 on AP U.S. History. This means you do not need perfection—scoring ~42/55 on MCQ, 6/9 on SAQ, 5/7 on DBQ, and 4/6 on LEQ generally puts you firmly in the 5 range.',
    },
    {
      question: 'How much is each DBQ point worth on the composite scale?',
      answer:
        'Because the DBQ is worth 25% of the total exam and scored out of 7 raw rubric points, each DBQ point is worth approximately 3.57 composite points. It has the highest marginal return of any section on the exam.',
    },
    {
      question: 'Is there a penalty for wrong answers on the multiple-choice section?',
      answer:
        'No. AP exams do not penalize incorrect guesses. You should answer every single multiple-choice question before time expires.',
    },
    {
      question: 'How accurate is this APUSH score calculator?',
      answer:
        'This calculator applies the official College Board section weightings (40/20/25/15) and recent historical scoring thresholds published from released exams. While each year’s specific equating curve adjusts slightly for form difficulty, this estimate reliably reflects your actual exam score tier within ±2.5 composite points.',
    },
    {
      question: 'What is the ACE method for APUSH Short Answer Questions?',
      answer:
        'ACE stands for Answer, Cite, Explain: (A) Answer the question directly with a definitive claim, (C) Cite specific factual historical evidence (proper nouns, legislation, events), and (E) Explain the cause-and-effect relationship proving your answer.',
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
