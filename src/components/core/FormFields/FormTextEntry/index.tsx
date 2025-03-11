import {FormInputProps} from '@components/core/FormFields/types';
import {Typography} from '@components/core/Typography';
import React from 'react';
import {Controller} from 'react-hook-form';
import {TextInputProps, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import {useStyles} from './styles';

type FormTextFieldProps = Omit<TextInputProps, 'onChange' | 'value'> &
  FormInputProps;

export const FormTextEntry = ({
  control,
  name,
  placeholder,
  ...restProps
}: FormTextFieldProps) => {
  const styles = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: {onChange, value, onBlur, disabled},
        fieldState: {invalid, error},
      }) => {
        const style = [styles.input, invalid && styles.invalidInput];

        return (
          <View style={styles.container}>
            <TextInput
              {...restProps}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              style={style}
              editable={!disabled}
              placeholderTextColor={styles.placeholder.color}
            />
            {error && (
              <Typography.Description customStyles={styles.error}>
                {error?.message}
              </Typography.Description>
            )}
          </View>
        );
      }}
    />
  );
};
