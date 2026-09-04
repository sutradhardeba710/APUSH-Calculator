import type { RubricCriteria } from './dbq';

export const leqRubric: RubricCriteria[] = [
  {
    id: 'leq-thesis',
    name: 'Thesis / Claim',
    category: 'Thesis & Context',
    maxPoints: 1,
    description: 'Responds to the prompt with a historically defensible thesis or claim that establishes a clear line of reasoning.',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'No thesis, restates prompt without taking a stance, or lacks line of reasoning.',
        tips: 'Do not simply write "There were many political and economic impacts." Specify WHAT they were.',
      },
      {
        points: 1,
        label: '1 Point',
        requirement: 'Defensible thesis located in intro or conclusion that sets up 2+ distinct points of reasoning.',
        tips: 'Format: "Although [counter-point], [historical trend] primarily caused [outcome] because of [Reason A] and [Reason B]."',
      },
    ],
  },
  {
    id: 'leq-context',
    name: 'Contextualization',
    category: 'Thesis & Context',
    maxPoints: 1,
    description: 'Describes a broader historical context relevant to the prompt (prior events, concurrent trends, or ensuing developments).',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'No background provided or only a passing reference.',
        tips: 'Context requires explanation, not just naming an era.',
      },
      {
        points: 1,
        label: '1 Point',
        requirement: 'Accurately situates the prompt within broader national or international events spanning 3-5 sentences.',
        tips: 'Explain what happened in the 20-50 years prior that set the stage for this prompt.',
      },
    ],
  },
  {
    id: 'leq-evidence',
    name: 'Evidence & Support',
    category: 'Evidence',
    maxPoints: 2,
    description: 'Provides specific examples of historical evidence relevant to the topic of the prompt to support the argument.',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'Lacks specific historical facts, names, or evidence.',
        tips: 'Generalizations like "people were angry and protested" earn 0 points.',
      },
      {
        points: 1,
        label: '1 Point (Mention)',
        requirement: 'Provides at least two specific examples of evidence relevant to the prompt topic.',
        tips: 'Mentions specific historical facts (e.g. Alien & Sedition Acts, Embargo Act), but does not link them to argument.',
      },
      {
        points: 2,
        label: '2 Points (Argumentation)',
        requirement: 'Supports an argument in response to the prompt using multiple specific examples of evidence.',
        tips: 'State the evidence, explain what it was, and explicitly demonstrate how it proves your thesis statement.',
      },
    ],
  },
  {
    id: 'leq-reasoning',
    name: 'Historical Reasoning',
    category: 'Analysis & Reasoning',
    maxPoints: 1,
    description: 'Uses historical reasoning (Comparison, Causation, or Continuity and Change Over Time) to frame or structure an argument.',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'Fails to structure an argument around comparison, causation, or CCOT.',
        tips: 'Ensure paragraphs explicitly address causes vs effects, similarities vs differences, or changes vs continuities.',
      },
      {
        points: 1,
        label: '1 Point',
        requirement: 'Uses causation, comparison, or CCOT effectively to analyze both causes/effects, similarities/differences, or continuities/changes.',
        tips: 'Analyze both sides (e.g., both short-term causes and long-term consequences).',
      },
    ],
  },
  {
    id: 'leq-complexity',
    name: 'Complex Understanding',
    category: 'Analysis & Reasoning',
    maxPoints: 1,
    description: 'Demonstrates a complex understanding of the historical development that is the focus of the essay.',
    options: [
      {
        points: 0,
        label: '0 Points',
        requirement: 'Superficial treatment or single viewpoint without nuance.',
        tips: 'Avoid black-and-white generalizations.',
      },
      {
        points: 1,
        label: '1 Point',
        requirement: 'Explains nuance, multiple variables, corroborating across categories (economic, political, cultural), or qualifying an argument.',
        tips: 'Explain how consequences varied by race, gender, class, or geographic region.',
      },
    ],
  },
];
