import type { SubjectContent } from './types';

export const apLangContent: SubjectContent = {
  subjectId: 'ap-lang',
  howItWorks: {
    title: 'How AP English Language Scoring Works',
    summary:
      'The AP English Language and Composition exam consists of 45 Multiple Choice Questions (45% of composite) and 3 Free-Response essay prompts (55% of composite). Total composite score is calculated on a 100-point scale.',
    steps: [
      {
        step: '1',
        title: 'Score Section I Multiple Choice (45%)',
        explanation:
          'You answer 45 questions in 60 minutes: reading comprehension of nonfiction passages and composition/editing questions. Each question is worth exactly 1.0 composite point.',
      },
      {
        step: '2',
        title: 'Score Synthesis Essay (18.33%)',
        explanation:
          'Question 1 requires reading 6–7 sources and synthesizing at least 3 into an original argument. Scored on the 6-point analytic rubric (1 pt Thesis, 4 pts Evidence/Commentary, 1 pt Sophistication). Each rubric point is worth ~3.056 composite points.',
      },
      {
        step: '3',
        title: 'Score Rhetorical Analysis Essay (18.33%)',
        explanation:
          'Question 2 asks you to analyze the rhetorical choices a speaker or writer makes to convey meaning and achieve a purpose. Scored on the 6-point analytic rubric (~3.056 composite points per rubric point).',
      },
      {
        step: '4',
        title: 'Score Argument Essay (18.34%)',
        explanation:
          'Question 3 presents a brief claim or quote and asks you to defend, challenge, or qualify it using broad historical, cultural, or personal knowledge. Scored on the 6-point rubric (~3.056 composite points per point).',
      },
    ],
    gradingInsights:
      'Each free-response essay is scored on College Board’s 6-point rubric: Row A (Thesis, 0–1), Row B (Evidence & Commentary, 0–4), and Row C (Sophistication, 0–1). Earning a 4 on Row B requires sustained line of reasoning linking your evidence back to the thesis, while Row C recognizes vivid nuance or rhetorical insight.',
  },
  sectionGuide: [
    {
      title: 'Section I: Multiple Choice Questions',
      shortName: '45 Questions (60 Minutes, 45%)',
      details: 'Divided between Reading questions (analyzing author tone, syntax, claims) and Writing questions (acting as editor to improve draft passages).',
      strategy: 'Focus on the Writing/Composition questions first—they are often more straightforward and faster than dense 19th-century reading passages.',
    },
    {
      title: 'Section II, Question 1: Synthesis Essay',
      shortName: 'Synthesis (15-min reading + 40 min, 18.33%)',
      details: 'Integrates documentary evidence from at least 3 sources to substantiate your claim without letting the sources overshadow your own voice.',
      strategy: 'Group sources into thematic conversations (agreements, disagreements, caveats) before drafting your thesis statement.',
    },
    {
      title: 'Section II, Question 2: Rhetorical Analysis Essay',
      shortName: 'Rhetorical Analysis (40 Minutes, 18.33%)',
      details: 'Deconstructs how the writer uses diction, tone shifts, appeals (ethos, pathos, logos), and structure to persuade the intended audience.',
      strategy: 'Never just list rhetorical devices. Always explain the "why" and "so what"—how the specific rhetorical choice moves the audience toward action or belief.',
    },
    {
      title: 'Section II, Question 3: Argument Essay',
      shortName: 'Argument Essay (40 Minutes, 18.34%)',
      details: 'Develops a cohesive stance on a broad conceptual prompt using concrete real-world evidence from history, literature, science, or personal observation.',
      strategy: 'Avoid hypothetical or vague examples. Use specific, well-known historical events, scientific developments, or established cultural milestones.',
    },
  ],
  scoreBenchmarks: [
    { score: 5, title: 'Extremely Well Qualified', cutoffDescription: '~75–100 Composite', academicValue: 'Grants introductory college writing waivers and 3–6 credit hours at competitive colleges.' },
    { score: 4, title: 'Well Qualified', cutoffDescription: '~61–74 Composite', academicValue: 'Recognized for college composition credit at the vast majority of public and private institutions.' },
    { score: 3, title: 'Qualified (Passing)', cutoffDescription: '~50–60 Composite', academicValue: 'Satisfies freshman writing requirements at most state universities and regional colleges.' },
    { score: 2, title: 'Possibly Qualified', cutoffDescription: '~38–49 Composite', academicValue: 'Close to passing threshold; usually indicates solid MCQ performance but weak commentary on essays.' },
    { score: 1, title: 'No Recommendation', cutoffDescription: '0–37 Composite', academicValue: 'Shows developing writing skills requiring substantial introductory college composition coursework.' },
  ],
  faqs: [
    {
      question: 'How is the AP English Language composite score calculated?',
      answer:
        'The multiple-choice section represents 45% of your score (45 questions = 45 composite points). The three essays make up the remaining 55% (18.33% each). Each of the three 6-point essays is multiplied by approximately 3.056 to give a combined 55 composite points, totaling 100.',
    },
    {
      question: 'What raw score do I need for a 5 on AP Lang?',
      answer:
        'To earn a 5 on AP Lang, you generally need around 75 out of 100 composite points. A student who scores 38/45 on the multiple choice and averages 4–5 points on each essay (e.g., 5/6 on Synthesis, 4/6 on Rhetorical, 4/6 on Argument) will comfortably achieve a 5.',
    },
    {
      question: 'Is the sophistication point (Row C) required to get a 5 on AP Lang?',
      answer:
        'No! The sophistication point is awarded to only 5–10% of essays nationwide. You can easily score a 5 on AP Lang by earning 1-4-0 (5 points) on each essay if combined with a strong multiple-choice performance of 36–39 correct.',
    },
    {
      question: 'How much time should I spend on each section of the AP Lang exam?',
      answer:
        'You have 60 minutes for the 45 multiple-choice questions. For Section II, there is a suggested 15-minute reading period followed by 120 minutes of writing, giving you roughly 40 minutes per essay prompt.',
    },
    {
      question: 'Can I use personal experiences as evidence on the AP Lang argument essay?',
      answer:
        'Yes, the prompt permits evidence from your reading, observation, or experience. However, well-chosen historical, sociological, or cultural evidence is generally easier to elaborate on with depth and analytical maturity.',
    },
  ],
  relatedTools: [
    {
      title: 'AP U.S. History Score Calculator',
      url: '/apush-score-calculator/',
      badge: 'Popular Pairing',
      description: 'Estimate your APUSH exam score using official College Board 40/20/25/15 weighting.',
    },
    {
      title: 'AP Psychology Score Calculator',
      url: '/ap-psychology-score-calculator/',
      badge: 'Social Science',
      description: 'Calculate your AP Psych score on the revised 75 MCQ and Article Analysis format.',
    },
    {
      title: 'AP Score Calculator Hub',
      url: '/ap-score-calculators/',
      badge: 'All Subjects',
      description: 'Explore calculators for AP Bio, AP Chem, Calculus, CSP, and more.',
    },
  ],
};
