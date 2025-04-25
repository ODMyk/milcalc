import {CheckBox} from '@components/core/CheckBox';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {useStyles} from './styles';

interface VariantEntryProps {
  ascending: boolean;
  isSelected: boolean;
}

export function FieldEntry({ascending, isSelected}: VariantEntryProps) {
  const styles = useStyles(isSelected);
  const dispatch = useDispatch();

  const {t} = useTranslation();
  const tKey = ascending ? 'ascending' : 'descending';

  const onPress = () => {
    dispatch(ScenariosScreenActions.SET_SORT_ORDER.START.create(ascending));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CheckBox checked={isSelected} onCheck={onPress} size={16} />
      <Typography.Description customStyles={styles.variant}>
        {t(`scenarioSorting.${tKey}`)}
      </Typography.Description>
    </TouchableOpacity>
  );
}
