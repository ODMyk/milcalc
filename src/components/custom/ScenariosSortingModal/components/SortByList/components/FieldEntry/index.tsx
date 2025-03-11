import {CheckBox} from '@components/core/CheckBox';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {ScenariosScreenState} from '@store/modules/ScenariosScreen/reducer';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {useStyles} from './styles';

interface FieldEntryProps {
  field: ScenariosScreenState['sortBy'];
  isSelected: boolean;
}

const textByField: Record<ScenariosScreenState['sortBy'], string> = {
  title: 'Title',
  createdAt: 'Creation Date',
};

export function FieldEntry({field, isSelected}: FieldEntryProps) {
  const styles = useStyles(isSelected);
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(ScenariosScreenActions.SET_SORTBY.START.create(field));
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CheckBox checked={isSelected} onCheck={onPress} size={16} />
      <Typography.Description customStyles={styles.variant}>
        {textByField[field]}
      </Typography.Description>
    </TouchableOpacity>
  );
}
