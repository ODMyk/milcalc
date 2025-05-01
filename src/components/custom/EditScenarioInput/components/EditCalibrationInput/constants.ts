import {FormType} from '@components/custom/AddScenarioInput/components/AddCalibrationInput/types';
import * as Yup from 'yup';

export const FORM_VALIDATION_SCHEMA = Yup.object({
  targetX: Yup.number().required('Field is required'),
  targetY: Yup.number().required('Field is required'),
  actualX: Yup.number().required('Field is required'),
  actualY: Yup.number().required('Field is required'),
  diff: Yup.number().required('Field is required'),
  isLeft: Yup.boolean().default(false),
  isUnder: Yup.boolean().default(false),
  formType: Yup.mixed<FormType>()
    .oneOf(Object.values(FormType))
    .required('Field is required'),
  distance: Yup.number().when('formType', {
    is: FormType.METERS,
    then: schema => schema.required('Field is required'),
    otherwise: schema => schema.strip(),
  }),
  angle: Yup.number().when('formType', {
    is: FormType.MILS,
    then: schema => schema.required('Field is required'),
    otherwise: schema => schema.strip(),
  }),
});
