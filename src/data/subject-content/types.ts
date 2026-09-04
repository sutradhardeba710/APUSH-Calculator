export interface SubjectFaqItem {
  question: string;
  answer: string;
}

export interface SectionGuideItem {
  title: string;
  shortName: string;
  details: string;
  strategy: string;
}

export interface SubjectContent {
  subjectId: string;
  howItWorks: {
    title: string;
    summary: string;
    steps: { step: string; title: string; explanation: string }[];
    gradingInsights: string;
  };
  sectionGuide: SectionGuideItem[];
  scoreBenchmarks: {
    score: number;
    title: string;
    cutoffDescription: string;
    academicValue: string;
  }[];
  faqs: SubjectFaqItem[];
  relatedTools: {
    title: string;
    url: string;
    badge: string;
    description: string;
  }[];
}
