import {Button} from '@components/core/Button';
import {ModalWithBlur} from '@components/core/ModalWithBlur';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {filtersOpenedSelector} from '@store/modules/ScenariosScreen/selectors';
import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {VariantsList} from './components/VariantsList';
import {useStyles} from './styles';

export function ScenariosFilterModal() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isVisible = useSelector(filtersOpenedSelector);

  const close = () => {
    dispatch(ScenariosScreenActions.SET_FILTERS_OPENED.START.create(false));
  };

  const reset = () => {
    dispatch(ScenariosScreenActions.TOGGLE_VARIANT_FILTER.RESET.create());
  };

  return (
    <ModalWithBlur onClose={close} isVisible={isVisible}>
      <Typography.Header customStyles={styles.title}>
        Scenario Filters
      </Typography.Header>
      <Typography.Description customStyles={styles.description}>
        Toggle scenario variants you want to see
      </Typography.Description>
      <VariantsList />
      <View style={styles.buttonsContainer}>
        <Button onPress={reset}>
          <Typography.Description>Reset</Typography.Description>
        </Button>
        <Button onPress={close}>
          <Typography.Description>Apply</Typography.Description>
        </Button>
      </View>
    </ModalWithBlur>
  );
}
