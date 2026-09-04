import type { SubjectContent } from './types';

export const apChemContent: SubjectContent = {
  subjectId: 'ap-chemistry',
  howItWorks: {
    title: 'How AP Chemistry Scoring Works',
    summary:
      'The AP Chemistry exam assesses molecular structure, chemical kinetics, thermodynamics, equilibrium, and laboratory techniques across a 50% Multiple Choice section and a 50% Free Response section (7 questions).',
    steps: [
      {
        step: '1',
        title: 'Score Section I Multiple Choice (50%)',
        explanation:
          '60 multiple-choice questions in 90 minutes. A scientific or graphing calculator is permitted throughout. Each question is worth ~0.833 composite points on the 100-point scale.',
      },
      {
        step: '2',
        title: 'Score Long Free Response Questions (32.61%)',
        explanation:
          'Questions 1, 2, and 3 are long multi-part questions worth 10 points each (30 raw points total). These questions integrate laboratory data, chemical calculations, stoichiometry, equilibrium, or thermodynamics.',
      },
      {
        step: '3',
        title: 'Score Short Free Response Questions (17.39%)',
        explanation:
          'Questions 4, 5, 6, and 7 are short questions worth 4 points each (16 raw points total). These target particulate representations, intermolecular forces, spectroscopy, or lab error analysis.',
      },
      {
        step: '4',
        title: 'Map Weighted Composite to 1–5 Scale',
        explanation:
          'The 46 raw FRQ points are scaled to 50 composite points. A composite score of 72+ typically secures a 5, while scores of 43+ achieve a passing 3.',
      },
    ],
    gradingInsights:
      'AP Chemistry readers are strict on units and significant figures. Answers must include correct units (e.g., kJ/mol_rxn, M, atm), and numerical answers should typically match the significant figures of the given measurements within ±1 digit.',
  },
  sectionGuide: [
    {
      title: 'Section I: Multiple Choice Questions',
      shortName: '60 MCQs (90 Minutes, 50%)',
      details: 'Tests atomic structure, bonding, intermolecular forces, chemical reactions, kinetics, thermodynamics, equilibrium, and acids & bases.',
      strategy: 'Practice quick mental estimation for mental arithmetic where possible, and eliminate extreme answers before doing complex stoichiometry.',
    },
    {
      title: 'Section II: Long Free Response (Questions 1–3)',
      shortName: '3 Long FRQs (10 Pts Each = 30 Pts, ~65 min)',
      details: 'Comprehensive multi-part problems often combining stoichiometry, titrations, thermodynamics (Delta G, H, S), and equilibrium (Keq, Q).',
      strategy: 'Show every step: write balanced chemical equations, ICE tables for equilibrium, and use dimensional analysis with units explicitly labeled.',
    },
    {
      title: 'Section II: Short Free Response (Questions 4–7)',
      shortName: '4 Short FRQs (4 Pts Each = 16 Pts, ~40 min)',
      details: 'Focuses on drawing Lewis structures/geometry, explaining trends in intermolecular forces, Beer’s law spectroscopy, or particulate drawings.',
      strategy: 'When explaining physical properties (boiling point, vapor pressure), cite specific intermolecular forces (London dispersion, dipole-dipole, hydrogen bonding) for BOTH substances compared.',
    },
  ],
  scoreBenchmarks: [
    { score: 5, title: 'Extremely Well Qualified', cutoffDescription: '~72–100 Composite', academicValue: 'Grants 8–10 college credits for General Chemistry I and II + lab at premier universities.' },
    { score: 4, title: 'Well Qualified', cutoffDescription: '~57–71 Composite', academicValue: 'Qualifies for General Chemistry I credit and placement into Organic Chemistry at many colleges.' },
    { score: 3, title: 'Qualified (Passing)', cutoffDescription: '~43–56 Composite', academicValue: 'Satisfies laboratory science requirements for engineering, pre-med, and STEM majors.' },
    { score: 2, title: 'Possibly Qualified', cutoffDescription: '~29–42 Composite', academicValue: 'Reflects foundational chemical understanding with difficulty on quantitative equilibrium and multi-step FRQs.' },
    { score: 1, title: 'No Recommendation', cutoffDescription: '0–28 Composite', academicValue: 'Indicates severe gaps in stoichiometric calculations, chemical nomenclature, and molecular concepts.' },
  ],
  faqs: [
    {
      question: 'How is the AP Chemistry exam scored?',
      answer:
        'The exam has two equally weighted sections: Section I (60 Multiple Choice questions = 50% of composite) and Section II (7 Free Response questions totaling 46 raw points = 50% of composite). The total composite is 100 points.',
    },
    {
      question: 'What raw score do I need for a 5 on AP Chemistry?',
      answer:
        'Historically, a composite score of approximately 72 out of 100 earns a 5 on AP Chemistry. A student with 44/60 on MCQ and 32/46 on FRQ will comfortably reach a 5.',
    },
    {
      question: 'Are calculators allowed on the AP Chemistry exam?',
      answer:
        'Yes! A scientific or graphing calculator is permitted on both Section I (Multiple Choice) and Section II (Free Response). A periodic table and formula sheet with constants are also provided for both sections.',
    },
    {
      question: 'How strict are significant figures on the AP Chem FRQ?',
      answer:
        'College Board allows a tolerance of ±1 significant figure for final calculated answers on free-response questions. Generally, answers should reflect the data precision provided in the prompt (usually 2 or 3 significant figures).',
    },
    {
      question: 'What are the hardest topics on the AP Chemistry exam?',
      answer:
        'Unit 8 (Acids and Bases - buffer calculations, titrations, Henderson-Hasselbalch), Unit 7 (Equilibrium - Le Chatelier, Ksp), and Unit 9 (Thermodynamics and Electrochemistry) historically have the lowest average student scores.',
    },
  ],
  relatedTools: [
    {
      title: 'AP Biology Score Calculator',
      url: '/ap-biology-score-calculator/',
      badge: 'Life Sciences',
      description: 'Calculate your AP Bio score with College Board experimental design weighting.',
    },
    {
      title: 'AP Calculus AB Score Calculator',
      url: '/ap-calculus-ab-score-calculator/',
      badge: 'Core STEM',
      description: 'Estimate your score on the standard 108-point calculus scale.',
    },
    {
      title: 'AP Score Calculator Hub',
      url: '/ap-score-calculators/',
      badge: 'All Subjects',
      description: 'Browse score calculators across STEM, Humanities, and English.',
    },
  ],
};
