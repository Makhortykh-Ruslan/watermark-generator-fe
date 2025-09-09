export const ESteps = {
  SELECT_TYPE: 'select type',
  UPLOAD_FILE: 'upload file',
} as const;

export type TSteps = (typeof ESteps)[keyof typeof ESteps];
