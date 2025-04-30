import {CalibrationMetersInput, CalibrationMilsInput} from 'src/types/Scenario';

export enum FormType {
  MILS = 'mils',
  METERS = 'meters',
}

export type FormMeters = CalibrationMetersInput & {
  formType: FormType.METERS;
};

export type FormMils = CalibrationMilsInput & {
  formType: FormType.MILS;
};

export type FormInput = FormMeters | FormMils;
