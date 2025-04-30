import {CreateScenarioDto} from 'src/types/Scenario';

export type FormInput = Omit<CreateScenarioDto, 'zone'>;

export type FormProps = Record<'onSubmit', (data: FormInput) => void> & {
  defaultValues?: FormInput;
  error?: string;
  loading?: boolean;
};
