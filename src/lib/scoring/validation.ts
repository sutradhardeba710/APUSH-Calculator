import type { ExamConfig, RawScores } from '../../data/exam-config/types';

export interface ValidationError {
  field: keyof RawScores;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<keyof RawScores, string | null>;
  sanitizedScores: RawScores;
}

export function validateAndSanitizeScores(
  inputs: Partial<Record<keyof RawScores, any>>,
  config: ExamConfig
): ValidationResult {
  const errors: Record<keyof RawScores, string | null> = {
    mcq: null,
    saq: null,
    dbq: null,
    leq: null,
  };

  const sanitizeField = (field: keyof RawScores, rawVal: any): number => {
    if (rawVal === undefined || rawVal === null || rawVal === '') {
      return 0;
    }
    const num = Number(rawVal);
    const max = config.sections[field].rawMax;

    if (isNaN(num)) {
      errors[field] = `Please enter a valid number (0 to ${max}).`;
      return 0;
    }
    if (!Number.isInteger(num)) {
      errors[field] = `Score must be a whole number (0 to ${max}).`;
      return Math.round(Math.max(0, Math.min(max, num)));
    }
    if (num < 0) {
      errors[field] = `Score cannot be less than 0.`;
      return 0;
    }
    if (num > max) {
      errors[field] = `Score cannot exceed the section maximum of ${max}.`;
      return max;
    }

    return num;
  };

  const sanitizedScores: RawScores = {
    mcq: sanitizeField('mcq', inputs.mcq),
    saq: sanitizeField('saq', inputs.saq),
    dbq: sanitizeField('dbq', inputs.dbq),
    leq: sanitizeField('leq', inputs.leq),
  };

  const isValid = Object.values(errors).every((err) => err === null);

  return {
    isValid,
    errors,
    sanitizedScores,
  };
}
