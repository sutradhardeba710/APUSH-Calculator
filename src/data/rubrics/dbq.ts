export interface RubricCriteria {
  id: string;
  name: string;
  category: string;
  maxPoints: number;
  description: string;
  options: {
    points: number;
    label: string;
    requirement: string;
    tips: string;
  }[];
}

export const dbqRubric: RubricCriteria[] = [
  {
    id: 'dbq-thesis',
    name: 'Thesis / Claim',
    category: 'Thesis & Context',
    maxPoints: 1,
    description: 'Responds to the prompt with a historically defensible thesis/claim that establishes a clear line of reasoning.',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'No thesis, restates the prompt, or vague statement without a line of reasoning.',
        tips: 'Avoid simply restating the prompt. Use "Although X, because Y, therefore Z" structure.',
      },
      {
        points: 1,
        label: '1 Point',
        requirement: 'Historically defensible thesis in the introduction or conclusion establishing a distinct line of reasoning.',
        tips: 'Must take a stance and state specific historical reasons/categories of analysis.',
      },
    ],
  },
  {
    id: 'dbq-context',
    name: 'Contextualization',
    category: 'Thesis & Context',
    maxPoints: 1,
    description: 'Describes a broader historical context immediately relevant to the prompt (events before, during, or after).',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'Omits historical background or provides merely a passing reference or phrase.',
        tips: 'A single sentence or buzzword ("Cold War was happening") will not earn this point.',
      },
      {
        points: 1,
        label: '1 Point',
        requirement: 'Explains broader historical developments, processes, or events before, during, or after the era (3-4 sentences minimum).',
        tips: 'Zoom out: connect the topic to larger political, economic, or social trends of the preceding decades.',
      },
    ],
  },
  {
    id: 'dbq-doc-evidence',
    name: 'Document Evidence',
    category: 'Evidence',
    maxPoints: 2,
    description: 'Accurately uses and interprets content from the provided documents to support the essay argument.',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'Uses fewer than 3 documents or misinterprets documents.',
        tips: 'Always read all 7 documents and annotate their main idea and connection to prompt.',
      },
      {
        points: 1,
        label: '1 Point (Description)',
        requirement: 'Accurately describes content from at least 3 documents to address the prompt.',
        tips: 'Summarizes or cites 3 documents, but does not yet connect them to support an argument.',
      },
      {
        points: 2,
        label: '2 Points (Argumentation)',
        requirement: 'Supports an argument in response to the prompt using at least 4 documents (revised College Board standard).',
        tips: 'Aim to use at least 5-6 documents as an insurance buffer to ensure you secure the 2 points.',
      },
    ],
  },
  {
    id: 'dbq-outside-evidence',
    name: 'Evidence Beyond Documents',
    category: 'Evidence',
    maxPoints: 1,
    description: 'Provides at least one additional piece of specific historical evidence not found in the documents to support the thesis.',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'No outside evidence or repeats facts already mentioned in the documents.',
        tips: 'Must be a concrete proper noun (law, person, event, treaty) not in any document snippet.',
      },
      {
        points: 1,
        label: '1 Point',
        requirement: 'Uses at least one distinct piece of outside evidence and explains how it supports the argument.',
        tips: 'Identify a named historical fact, define it in 1 sentence, and connect it to your thesis in the next.',
      },
    ],
  },
  {
    id: 'dbq-sourcing',
    name: 'Document Sourcing (HIPP / HAPP)',
    category: 'Analysis & Reasoning',
    maxPoints: 1,
    description: 'For at least 2 documents, explains how or why the document\'s Historical situation, Audience, Purpose, or Point of view is relevant to an argument.',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'No HIPP analysis or only lists the author without explaining significance.',
        tips: 'Simply stating "The author was a merchant" is not enough; explain why being a merchant shaped their perspective.',
      },
      {
        points: 1,
        label: '1 Point',
        requirement: 'Analyzes HIPP for at least 2 documents and clearly explains how it impacts the argument.',
        tips: 'Aim for 3 documents in case one analysis is deemed too superficial by readers.',
      },
    ],
  },
  {
    id: 'dbq-complexity',
    name: 'Complex Understanding',
    category: 'Analysis & Reasoning',
    maxPoints: 1,
    description: 'Demonstrates a complex understanding of the historical development through nuanced analysis, counter-argument, or corroboration.',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'One-dimensional argument or token concession without sustained depth.',
        tips: 'Complexity cannot be earned with a single tacked-on sentence at the end.',
      },
      {
        points: 1,
        label: '1 Point',
        requirement: 'Sustains a nuanced argument by corroborating multiple perspectives, qualifying claims, or exploring multiple historical themes.',
        tips: 'Weave nuance throughout each body paragraph (e.g., explaining both continuity and change or regional disparities).',
      },
    ],
  },
];
