import type { SubjectContent } from './types';

export const apPsychContent: SubjectContent = {
  subjectId: 'ap-psychology',
  howItWorks: {
    title: 'How AP Psychology Scoring Works (Updated Format)',
    summary:
      'College Board instituted an updated exam design for AP Psychology featuring 75 Multiple Choice Questions (66.7% weighting) and 2 Free-Response Questions (33.3% weighting): the Article Analysis Question (AAQ) and the Evidence-Based Question (EBQ).',
    steps: [
      {
        step: '1',
        title: 'Score Section I Multiple Choice (66.7%)',
        explanation:
          '75 questions in 90 minutes assessing biological bases of behavior, cognition, developmental psychology, clinical disorders, and research methods. Each MCQ contributes ~0.889 composite points to the 100-point total.',
      },
      {
        step: '2',
        title: 'Score Question 1: Article Analysis Question (AAQ) (16.67%)',
        explanation:
          'You read an excerpt from a psychological research study and answer 7 rubric questions evaluating research design, ethics, variables, statistical conclusions, and validity. Each rubric point adds ~2.38 composite points.',
      },
      {
        step: '3',
        title: 'Score Question 2: Evidence-Based Question (EBQ) (16.67%)',
        explanation:
          'You construct an argument answering a psychological prompt, incorporating evidence from provided psychological concepts and research findings (7 rubric points). Each point adds ~2.38 composite points.',
      },
      {
        step: '4',
        title: 'Calculate 100-Point Weighted Composite',
        explanation:
          'The College Board scales Section I to 66.67 composite points and Section II to 33.33 composite points. A composite score of ~76+ is typically required for a 5, while ~50+ represents a passing score of 3.',
      },
    ],
    gradingInsights:
      'Under the revised AP Psychology framework, questions focus much less on pure vocabulary regurgitation and far more on application, scientific reasoning, and interpreting psychological experiments. Defining a term without applying it to the scenario earns 0 points.',
  },
  sectionGuide: [
    {
      title: 'Section I: Multiple Choice Questions',
      shortName: '75 MCQs (90 Minutes, 66.7%)',
      details: 'Assesses 5 core domains: Biological Bases, Cognition, Development & Learning, Social & Personality, and Mental & Physical Health.',
      strategy: 'Watch out for experimental design questions: identifying independent vs dependent variables, confounding factors, and double-blind controls.',
    },
    {
      title: 'Section II, Question 1: Article Analysis Question (AAQ)',
      shortName: 'AAQ (7 Points, 45 Minutes, 16.7%)',
      details: 'Provides a summary of a peer-reviewed research study. Requires identifying hypotheses, sampling methods, operational definitions, and generalizability.',
      strategy: 'Check whether the study was experimental (can establish causality) or correlational (cannot establish causality). This distinction accounts for multiple rubric points.',
    },
    {
      title: 'Section II, Question 2: Evidence-Based Question (EBQ)',
      shortName: 'EBQ (7 Points, 45 Minutes, 16.7%)',
      details: 'Argumentative essay where you state a claim, provide psychological evidence/theories, elaborate on psychological mechanisms, and address counterarguments.',
      strategy: 'Write a clear thesis statement answering the prompt, then dedicate one full paragraph to each psychological concept, explaining explicitly how it supports your claim.',
    },
  ],
  scoreBenchmarks: [
    { score: 5, title: 'Extremely Well Qualified', cutoffDescription: '~76–100 Composite', academicValue: 'Grants college credit for General Psychology (PSYC 101) and satisfies social science distribution requirements.' },
    { score: 4, title: 'Well Qualified', cutoffDescription: '~63–75 Composite', academicValue: 'Accepted for introductory psychology credit at almost all public and private universities.' },
    { score: 3, title: 'Qualified (Passing)', cutoffDescription: '~50–62 Composite', academicValue: 'Qualifies for credit or course waiver at major public state college systems.' },
    { score: 2, title: 'Possibly Qualified', cutoffDescription: '~38–49 Composite', academicValue: 'Reflects familiar vocabulary recognition but insufficient research methodology and FRQ application.' },
    { score: 1, title: 'No Recommendation', cutoffDescription: '0–37 Composite', academicValue: 'Indicates fundamental misunderstandings of foundational psychological theories.' },
  ],
  faqs: [
    {
      question: 'How did the AP Psychology exam format change recently?',
      answer:
        'The College Board updated AP Psychology to 75 Multiple Choice Questions (worth two-thirds of the exam) and 2 newly structured Free Response Questions: the Article Analysis Question (AAQ) and the Evidence-Based Question (EBQ), replacing the older concept-definition FRQs.',
    },
    {
      question: 'What composite score is needed for a 5 on AP Psychology?',
      answer:
        'A composite score of approximately 76 out of 100 is typically needed to earn a 5. Earning around 58/75 on MCQ and 10–11/14 across the two FRQs provides a strong foundation for a 5.',
    },
    {
      question: 'How much time do I have for the AP Psychology exam?',
      answer:
        'You have 90 minutes for the 75 multiple-choice questions (approx. 72 seconds per question) and 90 minutes for Section II (approximately 45 minutes for the AAQ and 45 minutes for the EBQ).',
    },
    {
      question: 'Is AP Psychology considered an easy AP exam?',
      answer:
        'While historically considered accessible due to vocabulary recall, the new framework significantly raises the bar on research methodology, scientific inquiry, and argumentative writing. National pass rates historically average between 58% and 60%.',
    },
    {
      question: 'What is an operational definition in AP Psychology?',
      answer:
        'An operational definition is a precise description of how variables in a study are measured or manipulated (e.g., measuring "hunger" by "hours without food", or "aggression" by "number of times a child punches a toy"). It is a frequent point on the AAQ.',
    },
  ],
  relatedTools: [
    {
      title: 'AP Biology Score Calculator',
      url: '/ap-biology-score-calculator/',
      badge: 'Related Science',
      description: 'Calculate your AP Bio score, exploring overlaps in neuroscience and genetics.',
    },
    {
      title: 'AP U.S. History Score Calculator',
      url: '/apush-score-calculator/',
      badge: 'Social Science',
      description: 'Estimate your score on the APUSH 40/20/25/15 rubric.',
    },
    {
      title: 'AP English Language Calculator',
      url: '/ap-lang-score-calculator/',
      badge: 'Argument & Analysis',
      description: 'Calculate your composite score across MCQ and the 3 rhetoric essays.',
    },
  ],
};
