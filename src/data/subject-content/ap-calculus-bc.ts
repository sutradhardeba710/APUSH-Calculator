import type { SubjectContent } from './types';

export const apCalcBcContent: SubjectContent = {
  subjectId: 'ap-calculus-bc',
  howItWorks: {
    title: 'How AP Calculus BC Scoring Works',
    summary:
      'AP Calculus BC covers the entirety of Calculus AB plus advanced techniques including parametric curves, polar coordinates, vector-valued functions, integration by parts, and Taylor/Maclaurin series. It is scored on the official 108-point composite scale (50% MCQ, 50% FRQ).',
    steps: [
      {
        step: '1',
        title: 'Calculate Section I Multiple Choice (50%)',
        explanation:
          '45 questions: Part A (30 questions without calculator, 60 min) and Part B (15 questions with graphing calculator, 45 min). Each raw point is multiplied by 1.2 to produce 54 composite points.',
      },
      {
        step: '2',
        title: 'Calculate Section II Free Response (50%)',
        explanation:
          '6 multi-part questions (9 points each = 54 total raw points). Question 6 is almost always dedicated to Taylor and Maclaurin polynomials, radius of convergence, and error bounds.',
      },
      {
        step: '3',
        title: 'Total Composite (108 Point Scale)',
        explanation:
          'Composite = (MCQ correct x 1.2) + FRQ points. Total composite maximum is 108 points. Our calculator also translates this into normalized 0–100 percentage composite points.',
      },
      {
        step: '4',
        title: 'Determine AP 1–5 Score & AB Subscore',
        explanation:
          'Because of self-selection by advanced students, the Calculus BC curve has historically allowed ~40–45% of students to earn a 5. A composite score of ~66–68 out of 108 (~61–63%) reliably secures a 5.',
      },
    ],
    gradingInsights:
      'Calculus BC students also receive an AB Subscore based on questions that cover AB material (roughly 60% of the exam). This allows students who miss credit for BC to still qualify for full Calculus I credit at colleges.',
  },
  sectionGuide: [
    {
      title: 'Section I, Part A: Multiple Choice (No Calculator)',
      shortName: '30 MCQs (60 Minutes, 33.3% of exam)',
      details: 'Limits, derivatives, improper integrals, partial fractions, Euler’s method, and infinite series convergence tests.',
      strategy: 'Know the core convergence tests by heart: Ratio Test (essential for power series), Alternating Series Test, Geometric Series, and Integral Test.',
    },
    {
      title: 'Section I, Part B: Multiple Choice (Graphing Calculator)',
      shortName: '15 MCQs (45 Minutes, 16.7% of exam)',
      details: 'Parametric motion (speed, velocity vectors, total distance traveled), polar curves, and calculator integration.',
      strategy: 'Remember that speed is the magnitude of the velocity vector: sqrt((x’(t))^2 + (y’(t))^2), while total distance is the definite integral of speed.',
    },
    {
      title: 'Section II, Part A: Free Response (Graphing Calculator)',
      shortName: '2 FRQs (30 Minutes, 18 Points)',
      details: 'Usually features one parametric/vector motion problem and one polar area or rate-in/rate-out context problem.',
      strategy: 'For polar area, remember the 1/2 integral from alpha to beta of (r(theta))^2 d(theta) formula, and be careful with finding correct angle limits where loops intersect.',
    },
    {
      title: 'Section II, Part B: Free Response (No Calculator)',
      shortName: '4 FRQs (60 Minutes, 36 Points)',
      details: 'Differential equations (logistic growth, separable ODEs), graphical analysis, and the guaranteed Question 6 on Series.',
      strategy: 'On Question 6 (Series), aim for at least 6 out of 9 points: write the general term, find the interval of convergence with the Ratio test, test endpoints, and apply Lagrange or Alternating Series Error Bound.',
    },
  ],
  scoreBenchmarks: [
    { score: 5, title: 'Extremely Well Qualified', cutoffDescription: '~66–108 Composite (~61–100%)', academicValue: 'Grants full college credit for both Calculus I and Calculus II (typically 8–10 semester credits).' },
    { score: 4, title: 'Well Qualified', cutoffDescription: '~54–65 Composite (~50–60%)', academicValue: 'Qualifies for Calculus I credit and placement into Calculus II or Multivariable Calculus at top universities.' },
    { score: 3, title: 'Qualified (Passing)', cutoffDescription: '~42–53 Composite (~39–49%)', academicValue: 'Awards credit for Calculus I and often Calculus II at state universities and liberal arts colleges.' },
    { score: 2, title: 'Possibly Qualified', cutoffDescription: '~31–41 Composite (~29–38%)', academicValue: 'May still earn a passing 3 or 4 on the AB subscore even if the overall BC score is a 2.' },
    { score: 1, title: 'No Recommendation', cutoffDescription: '0–30 Composite (0–28%)', academicValue: 'Indicates fundamental challenges across both AB and BC calculus curriculum.' },
  ],
  faqs: [
    {
      question: 'How is the AP Calculus BC exam scored?',
      answer:
        'The AP Calculus BC exam is scored out of 108 total composite points. 45 Multiple Choice questions are weighted by 1.2 to equal 54 points (50%), and 6 Free Response questions are worth 9 points each to equal 54 points (50%).',
    },
    {
      question: 'Why does AP Calculus BC have such a high pass rate?',
      answer:
        'In recent years, approximately 42% to 45% of students score a 5, and around 78% to 80% pass with a 3 or higher. This is primarily due to student self-selection: students enrolled in BC are generally strong in mathematics, having already completed accelerated math pathways.',
    },
    {
      question: 'What is the AP Calculus AB subscore on the BC exam?',
      answer:
        'The AB subscore is an independent 1–5 score reported on your score report, calculated from the approximately 60% of the BC exam that tests AB content. Many colleges grant Calculus I credit based on the AB subscore even if you score lower on the full BC exam.',
    },
    {
      question: 'What raw composite score is required for a 5 on Calculus BC?',
      answer:
        'A score of approximately 66 to 68 out of 108 (around 61% to 63%) is typically the threshold for a 5 on Calculus BC. That means answering 33/45 on MCQ and earning 36/54 on FRQ provides a reliable margin for a 5.',
    },
    {
      question: 'How heavily is Taylor/Maclaurin series tested on Calculus BC?',
      answer:
        'Series makes up approximately 17% to 18% of the entire exam. There are typically 6–8 multiple-choice questions on series and one dedicated 9-point free-response question (Question 6). Mastering series is the single most effective way to secure a 5.',
    },
  ],
  relatedTools: [
    {
      title: 'AP Calculus AB Score Calculator',
      url: '/ap-calculus-ab-score-calculator/',
      badge: 'Core Calculus',
      description: 'Estimate your score on the standard Calculus AB exam format.',
    },
    {
      title: 'AP Chemistry Score Calculator',
      url: '/ap-chemistry-score-calculator/',
      badge: 'STEM Track',
      description: 'Calculate your AP Chem composite score from practice tests.',
    },
    {
      title: 'AP Computer Science Principles Calculator',
      url: '/ap-csp-score-calculator/',
      badge: 'Computing',
      description: 'Estimate your AP CSP performance across MCQ and Create Task.',
    },
  ],
};
