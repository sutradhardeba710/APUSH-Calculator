import type { SubjectContent } from './types';

export const apCspContent: SubjectContent = {
  subjectId: 'ap-csp',
  howItWorks: {
    title: 'How AP Computer Science Principles Scoring Works',
    summary:
      'The AP Computer Science Principles (AP CSP) exam measures computational thinking, algorithm design, cybersecurity, data analysis, and program development across an end-of-course Multiple Choice Exam (70%) and Create Performance Task Written Responses (30%).',
    steps: [
      {
        step: '1',
        title: 'Score Section I End-of-Course Multiple Choice (70%)',
        explanation:
          '70 multiple-choice questions in 120 minutes: 57 single-select questions, 5 reading-passage questions on a computing innovation, and 8 multiple-select questions (select 2 correct answers). Each correct answer is worth 1.0 composite point.',
      },
      {
        step: '2',
        title: 'Score Section II Create Performance Task (30%)',
        explanation:
          'You complete a programming project during class (at least 9 hours of in-class time) and answer 4 exam-day written response prompts based on your code and video. Scored on 6 rubric rows. Each rubric point is worth 5.0 composite points!',
      },
      {
        step: '3',
        title: 'Compute 100-Point Weighted Composite',
        explanation:
          'Total Composite = MCQ (out of 70) + (Create Task Rubric Points x 5.0). Maximum composite score is 100 points.',
      },
      {
        step: '4',
        title: 'Map to College Board Score Curve',
        explanation:
          'Because CSP has a higher proportion of accessible questions, the cutoff for a 5 is relatively high (~86–88 composite points), while a passing score of 3 requires ~60 composite points.',
      },
    ],
    gradingInsights:
      'The Create Performance Task written response prompts on exam day assess 4 areas: Program Functionality and Purpose, Algorithm Implementation (sequencing, selection, iteration), Procedural Abstraction (parameters and return values), and Data/List Storage. Missing procedural abstraction or parameter usage is the most common reason students lose rubric points.',
  },
  sectionGuide: [
    {
      title: 'Section I: Multiple Choice Exam',
      shortName: '70 MCQs (120 Minutes, 70%)',
      details: 'Big Ideas tested: Creative Development (10–13%), Data (17–22%), Algorithms & Programming (30–35%), Computing Systems & Networks (11–15%), and Impact of Computing (21–26%).',
      strategy: 'For multi-select questions (last 8 questions), remember you must pick exactly TWO correct answers to receive credit. There is no partial credit for selecting only 1.',
    },
    {
      title: 'Section II: Create Performance Task (Written Response)',
      shortName: '4 Prompts / 6 Rubric Points (60 Minutes, 30%)',
      details: 'Conducted on exam day. You will refer to your submitted Personalized Project Reference (code snippets of your list and procedure).',
      strategy: 'Ensure your procedure takes at least one parameter that impacts execution and includes an algorithm with sequencing, selection (if/else), and iteration (loop).',
    },
  ],
  scoreBenchmarks: [
    { score: 5, title: 'Extremely Well Qualified', cutoffDescription: '~86–100 Composite', academicValue: 'Grants college credit for Introduction to Computing / CS 101 at numerous colleges.' },
    { score: 4, title: 'Well Qualified', cutoffDescription: '~73–85 Composite', academicValue: 'Qualifies for general computer literacy or non-major programming distribution credits.' },
    { score: 3, title: 'Qualified (Passing)', cutoffDescription: '~60–72 Composite', academicValue: 'Satisfies quantitative/computational graduation requirements at state colleges.' },
    { score: 2, title: 'Possibly Qualified', cutoffDescription: '~44–59 Composite', academicValue: 'Reflects understanding of societal impacts of tech but weak pseudocode execution or missed Create Task points.' },
    { score: 1, title: 'No Recommendation', cutoffDescription: '0–43 Composite', academicValue: 'Indicates fundamental gaps in boolean logic, algorithm trace, and binary representations.' },
  ],
  faqs: [
    {
      question: 'How is the AP Computer Science Principles exam scored?',
      answer:
        'The AP CSP score is based 70% on the 70 multiple-choice questions (70 composite points) and 30% on the Create Performance Task written response prompts (6 rubric points x 5.0 = 30 composite points), totaling 100.',
    },
    {
      question: 'What raw score do I need to get a 5 on AP CSP?',
      answer:
        'Because the scoring curve for AP CSP is steeper than for calculus or history, you generally need around 86 out of 100 composite points for a 5. A score of 56/70 on MCQ and full 6/6 on the Create Task reaches a composite of 86.',
    },
    {
      question: 'How is the Create Performance Task administered now?',
      answer:
        'Students develop program code and record a video during class, submitting both to the AP Digital Portfolio before the April deadline. On exam day, students answer four written response prompts based on their specific submitted code and Personalized Project Reference.',
    },
    {
      question: 'What programming language can I use for the Create Task?',
      answer:
        'You can use any text-based or block-based programming language, including Python, JavaScript, Java, Snap!, or App Lab. The College Board pseudocode is used only for Section I multiple-choice questions.',
    },
    {
      question: 'What is the pass rate for AP Computer Science Principles?',
      answer:
        'In recent years, the overall pass rate (scores of 3, 4, or 5) has been approximately 63% to 67%, with around 12% to 14% of test takers scoring a 5.',
    },
  ],
  relatedTools: [
    {
      title: 'AP Calculus AB Score Calculator',
      url: '/ap-calculus-ab-score-calculator/',
      badge: 'STEM & Math',
      description: 'Calculate your AP Calc AB score with official 108 composite weighting.',
    },
    {
      title: 'AP Calculus BC Score Calculator',
      url: '/ap-calculus-bc-score-calculator/',
      badge: 'Advanced Math',
      description: 'Calculates both your BC composite score and AB subscore.',
    },
    {
      title: 'AP Score Calculator Hub',
      url: '/ap-score-calculators/',
      badge: 'All Subjects',
      description: 'Explore score calculators across all 8 AP subject offerings.',
    },
  ],
};
