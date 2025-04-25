import {CheckBox} from '@components/core/CheckBox';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {ScenariosScreenState} from '@store/modules/ScenariosScreen/reducer';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {useStyles} from './styles';

interface FieldEntryProps {
  field: ScenariosScreenState['sortBy'];
  isSelected: boolean;
}

export function FieldEntry({field, isSelected}: FieldEntryProps) {
  const styles = useStyles(isSelected);
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const onPress = () => {
    dispatch(ScenariosScreenActions.SET_SORTBY.START.create(field));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CheckBox checked={isSelected} onCheck={onPress} size={16} />
      <Typography.Description customStyles={styles.variant}>
        {t(`scenarioSorting.sortBy.${field}`)}
      </Typography.Description>
    </TouchableOpacity>
  );
}
