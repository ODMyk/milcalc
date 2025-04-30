import {AngleInput} from 'src/types/Scenario';

export type FormInput = Omit<AngleInput, 'id'> & {isPrimary: boolean};
