import type { SubjectContent } from './types';
import { apushContent } from './apush';
import { apLangContent } from './ap-lang';
import { apBioContent } from './ap-biology';
import { apCalcAbContent } from './ap-calculus-ab';
import { apCalcBcContent } from './ap-calculus-bc';
import { apPsychContent } from './ap-psychology';
import { apChemContent } from './ap-chemistry';
import { apCspContent } from './ap-csp';

export const ALL_SUBJECT_CONTENT: Record<string, SubjectContent> = {
  apush: apushContent,
  'ap-lang': apLangContent,
  'ap-biology': apBioContent,
  'ap-calculus-ab': apCalcAbContent,
  'ap-calculus-bc': apCalcBcContent,
  'ap-psychology': apPsychContent,
  'ap-chemistry': apChemContent,
  'ap-csp': apCspContent,
};

export function getSubjectContent(subjectId: string): SubjectContent {
  return ALL_SUBJECT_CONTENT[subjectId] || apushContent;
}

export * from './types';
