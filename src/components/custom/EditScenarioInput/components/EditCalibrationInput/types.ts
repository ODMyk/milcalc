import {FormType} from '@components/custom/AddScenarioInput/components/AddCalibrationInput/types';
import {CalibrationMetersInput, CalibrationMilsInput} from 'src/types/Scenario';

export type FormInput = (CalibrationMetersInput | CalibrationMilsInput) & {
  formType: FormType;
};
