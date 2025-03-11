import {CreateScenarioDto} from 'src/types/Scenario';

export type FormInput = CreateScenarioDto;

export type FormProps = Record<'onSubmit', (data: FormInput) => void> & {
  defaultValues?: FormInput;
  error?: string;
  loading?: boolean;
};
