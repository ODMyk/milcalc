import * as Yup from 'yup';

import {FormInput} from './types';

export const FORM_DEFAULT_VALUES: Record<string, FormInput> = {
  en: {
    title: 'Unnamed Scenario',
    description: '',
  },
  ua: {
    title: 'Сценарій без назви',
    description: '',
  },
};

export const FORM_VALIDATION_SCHEMA = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().matches(/^[a-zA-Z0-9\s]*$/),
});
