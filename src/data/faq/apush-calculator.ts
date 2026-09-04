export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const apushCalculatorFaqs: FaqItem[] = [
  {
    question: 'Is a 70% a 5 on the AP exam?',
    answer: 'Yes. On many AP exams, including AP U.S. History (APUSH), achieving approximately 70% to 75% of the total composite points earns a score of 5. For APUSH, a composite cutoff of ~74 out of 100 points historically qualifies for a 5. On certain math and science exams like AP Calculus BC, the threshold can be even lower (~60% to 65%). You do not need an 85% or 90% to earn a 5.',
    category: 'Score Cutoffs',
  },
  {
    question: 'What percentage is a 5 on APUSH?',
    answer: 'Historically, a composite score of approximately 74 out of 100 (~74%) is required to earn a 5 on the APUSH exam. Because sections are weighted differently, you can reach this benchmark without getting 74% on each section. For example, earning 42/55 on Multiple-Choice (30.5 composite pts), 6/9 on Short Answers (13.3 composite pts), 5/7 on the DBQ (17.9 composite pts), and 5/6 on the LEQ (12.5 composite pts) totals 74.2 composite points, comfortably securing a 5.',
    category: 'Score Cutoffs',
  },
  {
    question: 'How is AP score calculated?',
    answer: 'AP scores are calculated by converting raw points earned on Section I (Multiple Choice and Short Answer) and Section II (Free Response / Essays) into a weighted composite score according to College Board Course and Exam Description (CED) percentages. Psychometricians and College Board Chief Readers then apply statistical equating to convert that composite total into an AP scaled score from 1 to 5.',
    category: 'Scoring Basics',
  },
  {
    question: 'How do I figure out my AP score?',
    answer: 'To figure out your AP score from a practice exam: 1) Tally your Section I correct multiple-choice answers (each correct answer is worth 1 raw point; there is no guessing penalty). 2) Grade your free-response responses against official scoring rubrics. 3) Multiply each section’s raw score by its College Board weight factor to find your weighted composite out of 100. 4) Match your composite against historical equating curves, or simply enter your numbers into our free AP score calculator.',
    category: 'Scoring Basics',
  },
  {
    question: 'How to calculate APUSH score?',
    answer: 'To calculate your APUSH score, multiply your raw MCQ score (0–55) by 0.7273, your SAQ score (0–9) by 2.2222, your DBQ score (0–7) by 3.5714, and your LEQ score (0–6) by 2.5000. Sum all four weighted sections to determine your composite score out of 100, which maps directly to the official 1–5 AP grade scale.',
    category: 'Formula & Calculation',
  },
  {
    question: 'How to manually calculate APUSH exam score?',
    answer: 'To manually calculate your APUSH exam score, use the formula: Composite = (MCQ × 0.7273) + (SAQ × 2.2222) + (DBQ × 3.5714) + (LEQ × 2.5000). A composite of 74–100 converts to a 5, 60–73 to a 4, 47–59 to a 3, 35–46 to a 2, and 0–34 to a 1.',
    category: 'Formula & Calculation',
  },
  {
    question: 'Are AP score calculators accurate?',
    answer: 'Yes. Our calculators use the exact section weights and question counts from official College Board Course and Exam Descriptions (CED), combined with historical score cutoffs released from recent exams. While specific equating curves vary slightly each year, our estimates typically fall within ±2 to 2.5 composite points.',
    category: 'Methodology',
  },
  {
    question: 'What is the APUSH curve and score conversion chart for 2026?',
    answer: 'The 2026 APUSH exam uses statistical equating rather than a predetermined curving quota. Historical score conversion chart cutoffs for AP U.S. History are: Score 5 (74–100 composite pts, ~10.5%–13% of students), Score 4 (60–73 composite pts, ~15%–16%), Score 3 (47–59 composite pts, ~22%–24%), Score 2 (35–46 composite pts, ~23%–25%), and Score 1 (0–34 composite pts, ~24%–28%).',
    category: 'Curves & Cutoffs',
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
    question: 'How does this tool compare to Albert.io APUSH score calculator, Knowt, or Fiveable?',
    answer: 'Unlike third-party alternatives such as Albert.io, Knowt, or Fiveable, our platform provides an entirely free, privacy-first interface with zero account signups, interactive what-if score simulations, and instant local browser evaluation without ads or paywalls.',
    category: 'Platform Comparison',
  },
  {
    question: 'Are these calculators official College Board tools?',
    answer: 'No. This calculator is an independent educational tool. While our algorithms strictly use official College Board weighting formulas (40% MCQ, 20% SAQ, 25% DBQ, 15% LEQ) and calibrate cutoffs using released operational exams and score distributions, official score thresholds are determined post-administration by ETS and College Board psychometricians.',
    category: 'Disclaimer',
  },
];
