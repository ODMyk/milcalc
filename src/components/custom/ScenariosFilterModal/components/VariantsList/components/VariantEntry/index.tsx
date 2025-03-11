import {CheckBox} from '@components/core/CheckBox';
import {textByVariant} from '@components/core/FormFields/ScenarioVariantSelect/components/VariantEntry';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {ScenarioVariant} from 'src/types/Scenario';

import {useStyles} from './styles';

interface VariantEntryProps {
  variant: ScenarioVariant;
  isSelected: boolean;
}

export function VariantEntry({variant, isSelected}: VariantEntryProps) {
  const styles = useStyles(isSelected);
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(
      ScenariosScreenActions.TOGGLE_VARIANT_FILTER.START.create(variant),
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CheckBox checked={isSelected} onCheck={onPress} size={16} />
      <Typography.Description customStyles={styles.variant}>
        {textByVariant[variant]}
      </Typography.Description>
    </TouchableOpacity>
  );
}
