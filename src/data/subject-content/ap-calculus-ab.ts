import type { SubjectContent } from './types';

export const apCalcAbContent: SubjectContent = {
  subjectId: 'ap-calculus-ab',
  howItWorks: {
    title: 'How AP Calculus AB Scoring Works',
    summary:
      'The AP Calculus AB exam uses a balanced 50% Multiple Choice and 50% Free Response scoring system. Traditionally, College Board calculates a 108-point raw composite score which maps directly to the AP 1–5 score tiers.',
    steps: [
      {
        step: '1',
        title: 'Calculate Multiple-Choice Points (50%)',
        explanation:
          '45 multiple choice questions: Part A (30 questions without calculator, 60 min) and Part B (15 questions with graphing calculator, 45 min). On the standard 108-point exam scale, raw MCQ correct is multiplied by 1.2 to give 54 composite points.',
      },
      {
        step: '2',
        title: 'Calculate Free-Response Points (50%)',
        explanation:
          '6 free-response questions scored out of 9 points each (54 total raw points): Part A (2 questions with graphing calculator, 30 min) and Part B (4 questions without calculator, 60 min). Each raw FRQ point equals 1.0 composite point.',
      },
      {
        step: '3',
        title: 'Compute Total Exam Composite (108 / 100 Scale)',
        explanation:
          'Total Composite = (MCQ x 1.2) + FRQ. The total max is 108 composite points. On our calculator, we also display the normalized 0–100% composite score for easy comparison across subjects.',
      },
      {
        step: '4',
        title: 'Map to Official AP Score Curve',
        explanation:
          'Unlike high school letter grades where 90% is an A, AP Calculus AB has a generous curve: roughly 68–70 points out of 108 (~63–65%) earns a top score of 5.',
      },
    ],
    gradingInsights:
      'On the Free Response section, AP readers award credit for method, intermediate steps, and correct mathematical notation, not just final answers. Even if your final numerical value is incorrect, you can earn 7 out of 9 points by showing the correct definite integral, derivative setups, and appropriate units.',
  },
  sectionGuide: [
    {
      title: 'Section I, Part A: Multiple Choice (No Calculator)',
      shortName: '30 MCQs (60 Minutes, 33.3% of exam)',
      details: 'Limits, continuity, differentiation techniques (chain rule, implicit differentiation), related rates, and basic Riemann sums.',
      strategy: 'Spend no more than 2 minutes per question. If algebraic manipulation looks overly tedious, check if a shortcut like L’Hôpital’s Rule or geometry applies.',
    },
    {
      title: 'Section I, Part B: Multiple Choice (Graphing Calculator)',
      shortName: '15 MCQs (45 Minutes, 16.7% of exam)',
      details: 'Function analysis from numerical tables, average value, rate in/rate out models, and particle motion.',
      strategy: 'Use your calculator capabilities: graphing intersections, finding numerical derivatives (nDeriv), and evaluating definite integrals (fnInt) without manual antiderivatives.',
    },
    {
      title: 'Section II, Part A: Free Response (Graphing Calculator)',
      shortName: '2 FRQs (30 Minutes, 18 Points)',
      details: 'Typically includes a rate in / rate out contextual word problem and an area/volume of revolution problem.',
      strategy: 'Store given functions in your calculator’s Y1 and Y2 immediately to prevent transcription typos throughout multi-part questions.',
    },
    {
      title: 'Section II, Part B: Free Response (No Calculator)',
      shortName: '4 FRQs (60 Minutes, 36 Points)',
      details: 'Covers differential equations/slope fields, particle kinematics, fundamental theorem of calculus, and graph-of-f’ analysis.',
      strategy: 'Write clear justifications: use theorems by name (IVT, MVT, EVT) and always state hypotheses (e.g., "Since f(x) is continuous on [a, b] and differentiable on (a, b)...").',
    },
  ],
  scoreBenchmarks: [
    { score: 5, title: 'Extremely Well Qualified', cutoffDescription: '~68–108 Composite (~63–100%)', academicValue: 'Grants full college credit for Calculus I (Differential & Integral Calculus) at nearly all universities.' },
    { score: 4, title: 'Well Qualified', cutoffDescription: '~52–67 Composite (~48–62%)', academicValue: 'Qualifies for Calculus I credit and honors mathematics placement at most engineering colleges.' },
    { score: 3, title: 'Qualified (Passing)', cutoffDescription: '~38–51 Composite (~35–47%)', academicValue: 'Fulfills college mathematics distribution requirements at state universities.' },
    { score: 2, title: 'Possibly Qualified', cutoffDescription: '~27–37 Composite (~25–34%)', academicValue: 'Understands basic derivatives and integrals but struggles with synthesis and multi-step FRQ application.' },
    { score: 1, title: 'No Recommendation', cutoffDescription: '0–26 Composite (0–24%)', academicValue: 'Reflects severe gaps in algebraic fluency, trigonometry, and calculus concepts.' },
  ],
  faqs: [
    {
      question: 'How is the AP Calculus AB composite score calculated?',
      answer:
        'The AP Calculus AB score is calculated out of 108 total composite points. Multiple Choice has 45 questions, multiplied by 1.2 to equal 54 points (50%). Free Response has 6 questions worth 9 points each, equaling 54 points (50%). The sum is your composite score out of 108.',
    },
    {
      question: 'What percentage do I need for a 5 on AP Calculus AB?',
      answer:
        'Generally, earning approximately 63% to 65% of the total composite points (~68 to 70 out of 108) is sufficient to earn a 5 on AP Calculus AB. A combination of 32/45 MCQ and 36/54 FRQ reliably reaches the 5 threshold.',
    },
    {
      question: 'What is the difference between AP Calculus AB and BC scoring?',
      answer:
        'Both exams use the same 108-point scale and 50/50 section weighting. However, Calculus BC includes additional content (Euler’s method, logistic growth, arc length, integration by parts, and infinite series) and awards an additional AB subscore. BC typically has a slightly lower numerical cutoff for a 5 and a much higher percentage of students earning 5s (~40–45% vs ~20–23% for AB).',
    },
    {
      question: 'Do I need to simplify arithmetic answers on the AP Calculus FRQ?',
      answer:
        'No! The College Board explicitly instructs that numerical answers do not need to be simplified. An unsimplified expression like 3 + (4)(5)/2 will receive full credit, whereas making an arithmetic error during simplification will cause you to lose the point.',
    },
    {
      question: 'What calculator should I bring to AP Calculus AB?',
      answer:
        'You should bring an approved graphing calculator (such as TI-84 Plus CE, TI-Nspire CX, or Casio fx-CG50). Make sure it is set to Radian mode, as degree mode will result in incorrect trigonometric answers.',
    },
  ],
  relatedTools: [
    {
      title: 'AP Calculus BC Score Calculator',
      url: '/ap-calculus-bc-score-calculator/',
      badge: 'Advanced Math',
      description: 'Calculate your AP Calc BC score and AB subscore with full series & parametric weighting.',
    },
    {
      title: 'AP Chemistry Score Calculator',
      url: '/ap-chemistry-score-calculator/',
      badge: 'STEM Partner',
      description: 'Estimate your score for AP Chem using College Board quantitative FRQ models.',
    },
    {
      title: 'AP Computer Science Principles Calculator',
      url: '/ap-csp-score-calculator/',
      badge: 'Tech & Math',
      description: 'Score calculator for 70 MCQ and Create Performance Task written prompts.',
    },
  ],
};
