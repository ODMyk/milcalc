import {ScenarioVariant} from 'src/types/Scenario';
import * as Yup from 'yup';

import {FormInput} from './types';

export const FORM_DEFAULT_VALUES: FormInput = {
  title: 'Unnamed Scenario',
  description: '',
  variant: ScenarioVariant.ANGLES,
};

export const FORM_VALIDATION_SCHEMA = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().matches(/^[a-zA-Z0-9\s]*$/),
  variant: Yup.string()
    .oneOf(Object.values(ScenarioVariant))
    .required('Variant is required'),
});
