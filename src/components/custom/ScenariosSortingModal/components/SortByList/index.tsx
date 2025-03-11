import {ScenariosScreenState} from '@store/modules/ScenariosScreen/reducer';
import {sortBySelector} from '@store/modules/ScenariosScreen/selectors';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {FieldEntry} from './components/FieldEntry';
import {useStyles} from './styles';

const allVariants = ['title', 'createdAt'] as ScenariosScreenState['sortBy'][];

export function SortByList() {
  const styles = useStyles();
  const sortBy = useSelector(sortBySelector);

  return (
    <View style={styles.container}>
      {allVariants.map(variant => (
        <FieldEntry
          key={variant}
          field={variant}
          isSelected={sortBy === variant}
        />
      ))}
    </View>
  );
}
