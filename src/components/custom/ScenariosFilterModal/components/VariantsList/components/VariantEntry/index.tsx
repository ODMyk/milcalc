import {CheckBox} from '@components/core/CheckBox';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import React from 'react';
import {useTranslation} from 'react-i18next';
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

  const {t} = useTranslation();

  const onPress = () => {
    dispatch(
      ScenariosScreenActions.TOGGLE_VARIANT_FILTER.START.create(variant),
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CheckBox checked={isSelected} onCheck={onPress} size={16} />
      <Typography.Description customStyles={styles.variant}>
        {t(`createScenario.form.variant.${variant}`)}
      </Typography.Description>
    </TouchableOpacity>
  );
}
