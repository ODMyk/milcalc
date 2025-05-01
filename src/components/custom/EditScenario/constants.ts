import * as Yup from 'yup';

export const FORM_VALIDATION_SCHEMA = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string(),
});
