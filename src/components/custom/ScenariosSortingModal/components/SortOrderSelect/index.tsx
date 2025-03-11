import {ascendingSelector} from '@store/modules/ScenariosScreen/selectors';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {FieldEntry} from './components/OrderEntry';
import {useStyles} from './styles';

const allVariants = [true, false];

export function SortOrderSelect() {
  const styles = useStyles();
  const ascending = useSelector(ascendingSelector);

  return (
    <View style={styles.container}>
      {allVariants.map(variant => (
        <FieldEntry
          key={variant.toString()}
          ascending={variant}
          isSelected={variant === ascending}
        />
      ))}
    </View>
  );
}
