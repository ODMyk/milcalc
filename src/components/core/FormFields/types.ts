import {Control} from 'react-hook-form';

export type FormInputProps = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
};
