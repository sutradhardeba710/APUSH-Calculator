export interface SaqQuestionConfig {
  id: string;
  title: string;
  questionNumber: number;
  type: 'Required' | 'Choice';
  stimulusType: string;
  periodsCovered: string;
  maxPoints: 3;
  parts: {
    id: string;
    part: 'A' | 'B' | 'C';
    promptTemplate: string;
    task: string;
    scoringCriteria: string;
    tips: string;
  }[];
}

export const saqConfig: SaqQuestionConfig[] = [
  {
    id: 'saq-q1',
    title: 'Question 1 (Required)',
    questionNumber: 1,
    type: 'Required',
    stimulusType: 'Secondary Source (Historian interpretations)',
    periodsCovered: 'Periods 3–8 (1754–1980)',
    maxPoints: 3,
    parts: [
      {
        id: 'saq-1a',
        part: 'A',
        promptTemplate: 'Describe one major difference between Author A\'s and Author B\'s interpretations.',
        task: 'Identify and describe historical perspective difference.',
        scoringCriteria: '1 point earned by accurately summarizing the opposing core arguments of both authors.',
        tips: 'Use the "Author 1 argues X, whereas Author 2 emphasizes Y" template.',
      },
      {
        id: 'saq-1b',
        part: 'B',
        promptTemplate: 'Explain how one specific historical event or development not mentioned in the passages supports Author A\'s argument.',
        task: 'Apply outside historical evidence to validate interpretation 1.',
        scoringCriteria: '1 point earned with a specific historical example and clear linkage to Author A\'s premise.',
        tips: 'Name a specific law, rebellion, treaty, or election not quoted in the excerpt.',
      },
      {
        id: 'saq-1c',
        part: 'C',
        promptTemplate: 'Explain how one specific historical event or development not mentioned in the passages supports Author B\'s argument.',
        task: 'Apply outside historical evidence to validate interpretation 2.',
        scoringCriteria: '1 point earned with a distinct historical example and clear linkage to Author B\'s premise.',
        tips: 'Ensure the example falls strictly within the timeframe addressed by the passage.',
      },
    ],
  },
  {
    id: 'saq-q2',
    title: 'Question 2 (Required)',
    questionNumber: 2,
    type: 'Required',
    stimulusType: 'Primary Source (Text, Political Cartoon, or Map)',
    periodsCovered: 'Periods 3–8 (1754–1980)',
    maxPoints: 3,
    parts: [
      {
        id: 'saq-2a',
        part: 'A',
        promptTemplate: 'Describe one perspective expressed by the author/artist in the source.',
        task: 'Analyze the point of view, bias, or intent of the primary source.',
        scoringCriteria: '1 point earned for identifying the author\'s point of view or argument.',
        tips: 'Look at captions, publication dates, and symbols in cartoons.',
      },
      {
        id: 'saq-2b',
        part: 'B',
        promptTemplate: 'Explain one historical event or development that led to the historical situation depicted.',
        task: 'Analyze cause or historical context preceding the source.',
        scoringCriteria: '1 point earned for identifying a direct cause with historical accuracy.',
        tips: 'Connect the image/text to legislation, economic panics, or social movements of the time.',
      },
      {
        id: 'saq-2c',
        part: 'C',
        promptTemplate: 'Explain one specific historical effect of the developments depicted in the source.',
        task: 'Analyze consequence or subsequent outcome.',
        scoringCriteria: '1 point earned for demonstrating a concrete historical impact or reaction.',
        tips: 'Explain the downstream ripple effect in government policy or civil rights.',
      },
    ],
  },
  {
    id: 'saq-q3-4',
    title: 'Question 3 or 4 (Choice of One)',
    questionNumber: 3,
    type: 'Choice',
    stimulusType: 'No Stimulus (Direct Historical Reasoning Prompt)',
    periodsCovered: 'Q3: Periods 1–5 (1491–1877) OR Q4: Periods 6–9 (1865–Present)',
    maxPoints: 3,
    parts: [
      {
        id: 'saq-3a',
        part: 'A',
        promptTemplate: 'Describe one specific historical factor that contributed to [Historical Development].',
        task: 'Identify and describe a foundational cause or contributing factor.',
        scoringCriteria: '1 point earned for specific description of a historical factor.',
        tips: 'Write 2-3 concise sentences directly answering the prompt with a named fact.',
      },
      {
        id: 'saq-3b',
        part: 'B',
        promptTemplate: 'Explain one specific historical similarity or difference between [Development A] and [Development B].',
        task: 'Historical comparison and explanation.',
        scoringCriteria: '1 point earned for comparing both elements with historical reasoning.',
        tips: 'Address both items; do not only describe one of them.',
      },
      {
        id: 'saq-3c',
        part: 'C',
        promptTemplate: 'Explain one specific historical consequence or continuation of [Historical Development].',
        task: 'Historical continuity, change, or long-term consequence.',
        scoringCriteria: '1 point earned for explaining a concrete historical outcome.',
        tips: 'Always use ACE: Answer the question, Cite specific evidence, Explain how evidence proves your answer.',
      },
    ],
  },
];
