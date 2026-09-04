import { examConfig2026 } from './2026';
import { examConfig2027 } from './2027';
import type { ExamConfig } from './types';

export * from './types';
export { examConfig2026 } from './2026';
export { examConfig2027 } from './2027';

export const examConfigs: Record<number, ExamConfig> = {
  2026: examConfig2026,
  2027: examConfig2027,
};

export const DEFAULT_YEAR = 2026;
export const AVAILABLE_YEARS = [2026, 2027] as const;

export function getExamConfig(year?: number | string | null): ExamConfig {
  if (!year) return examConfigs[DEFAULT_YEAR];
  const parsed = typeof year === 'string' ? parseInt(year, 10) : year;
  return examConfigs[parsed] || examConfigs[DEFAULT_YEAR];
}
