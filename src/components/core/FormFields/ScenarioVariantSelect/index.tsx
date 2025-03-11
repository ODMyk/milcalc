import {FormInputProps} from '@components/core/FormFields/types';
import {Typography} from '@components/core/Typography';
import React from 'react';
import {Controller} from 'react-hook-form';
import {View} from 'react-native';
import {ScenarioVariant} from 'src/types/Scenario';

import {VariantEntry} from './components/VariantEntry';
import {useStyles} from './styles';

const allVariants = Object.values(ScenarioVariant);

interface ScenarioVariantSelectProps extends FormInputProps {}

export function ScenarioVariantSelect({
  name,
  control,
}: ScenarioVariantSelectProps) {
  const styles = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {value, onChange}}) => {
        return (
          <View style={styles.container}>
            <Typography.Description customStyles={styles.title}>
              Choose scenario variant
            </Typography.Description>
            {allVariants.map(variant => (
              <VariantEntry
                key={variant}
                variant={variant}
                isSelected={value === variant}
                onChange={onChange}
              />
            ))}
          </View>
        );
      }}
    />
  );
}
