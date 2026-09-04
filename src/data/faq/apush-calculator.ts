export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const apushCalculatorFaqs: FaqItem[] = [
  {
    question: 'How is the AP U.S. History score calculated?',
    answer: 'Your composite score is calculated out of 100 points based on four weighted sections: Multiple-Choice Questions (MCQ) are worth 40%, Short-Answer Questions (SAQ) are worth 20%, the Document-Based Question (DBQ) is worth 25%, and the Long Essay Question (LEQ) is worth 15%. Your weighted composite total is then translated to an AP score of 1 to 5 based on historical College Board scoring thresholds.',
    category: 'Scoring Basics',
  },
  {
    question: 'How many raw points do I need to get a 5 on APUSH?',
    answer: 'While exact cutoffs vary slightly year by year based on test equating, a composite score of approximately 74–75 out of 100 is historically required for a 5. For example, getting 44/55 on MCQ, 7/9 on SAQ, 6/7 on DBQ, and 5/6 on LEQ yields a composite score of around 81, comfortably within the 5 range.',
    category: 'Scoring Basics',
  },
  {
    question: 'What is a passing score on the AP US History exam?',
    answer: 'A score of 3 or higher is considered "qualified" or passing by the College Board. Most public universities and many private institutions grant college credit or advanced placement for scores of 3, 4, or 5. A composite score of approximately 47–48 out of 100 is typically the threshold needed to earn a 3.',
    category: 'College Credit',
  },
  {
    question: 'Is there a penalty for guessing on the APUSH Multiple Choice section?',
    answer: 'No! There is no negative marking or guessing penalty on AP exams. You should never leave an answer blank on the Multiple-Choice section. If you run out of time, guess on any remaining questions before time expires.',
    category: 'Test Strategy',
  },
  {
    question: 'How important is the DBQ compared to the other sections?',
    answer: 'The DBQ accounts for 25% of your total exam score from just a single essay. Point-for-point, each DBQ point is worth ~3.57 composite points—making each DBQ point more impactful than an individual MCQ or LEQ point. Mastering the thesis, contextualization, and 4+ document citations is essential for high scores.',
    category: 'DBQ',
  },
  {
    question: 'How does the scoring curve work for different exam administrations?',
    answer: 'The College Board uses statistical equating rather than a simple percentage curve. Equating accounts for small variations in difficulty between exam editions to ensure that earning a 4 or 5 signifies the same level of mastery regardless of whether your specific test form was slightly harder or easier.',
    category: 'Methodology',
  },
  {
    question: 'Are these calculators official College Board tools?',
    answer: 'No. This calculator is an independent educational tool. While our algorithms strictly use official College Board weighting formulas (40% MCQ, 20% SAQ, 25% DBQ, 15% LEQ) and calibrate cutoffs using released operational exams and score distributions, official score thresholds are determined post-administration by ETS and College Board psychometricians.',
    category: 'Disclaimer',
  },
];
