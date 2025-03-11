import {filterVariantsSelector} from '@store/modules/ScenariosScreen/selectors';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {ScenarioVariant} from 'src/types/Scenario';

import {VariantEntry} from './components/VariantEntry';
import {useStyles} from './styles';

const allVariants = Object.values(ScenarioVariant);

export function VariantsList() {
  const styles = useStyles();
  const variants = useSelector(filterVariantsSelector);

  return (
    <View style={styles.container}>
      {allVariants.map(variant => (
        <VariantEntry
          key={variant}
          variant={variant}
          isSelected={!variants || variants.includes(variant)}
        />
      ))}
    </View>
  );
}
