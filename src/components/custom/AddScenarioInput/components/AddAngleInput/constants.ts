import * as Yup from 'yup';

import {FormInput} from './types';

export const FORM_DEFAULT_VALUES: Partial<FormInput> = {
  isPrimary: true,
};

export const FORM_VALIDATION_SCHEMA = Yup.object({
  targetX: Yup.number().required('Target X is required'),
  targetY: Yup.number().required('Target Y is required'),
  angle: Yup.number().required('Alpha is required').min(-6000).max(6000),
  isPrimary: Yup.boolean().default(true),
});
