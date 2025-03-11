import {CheckBox} from '@components/core/CheckBox';
import {Typography} from '@components/core/Typography';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ScenarioVariant} from 'src/types/Scenario';

import {useStyles} from './styles';

interface VariantEntryProps {
  variant: ScenarioVariant;
  isSelected: boolean;
  onChange: (variant: ScenarioVariant) => void;
}

export const textByVariant: Record<ScenarioVariant, string> = {
  angles: 'Angles',
  calibration: 'Calibration',
};

export function VariantEntry({
  variant,
  isSelected,
  onChange,
}: VariantEntryProps) {
  const styles = useStyles(isSelected);

  const handlePress = () => {
    onChange(variant);
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <CheckBox checked={isSelected} onCheck={handlePress} size={12} />
      <Typography.Description customStyles={styles.text}>
        {textByVariant[variant]}
      </Typography.Description>
    </TouchableOpacity>
  );
}
