import {Button} from '@components/core/Button';
import {ModalWithBlur} from '@components/core/ModalWithBlur';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {sortingOpenedSelector} from '@store/modules/ScenariosScreen/selectors';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {SortByList} from './components/./SortByList';
import {SortOrderSelect} from './components/SortOrderSelect';
import {useStyles} from './styles';

export function SceanriosSortingModal() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isVisible = useSelector(sortingOpenedSelector);

  const {t} = useTranslation();

  const close = () => {
    dispatch(ScenariosScreenActions.SET_SORTING_OPENED.START.create(false));
  };

  const reset = () => {
    dispatch(ScenariosScreenActions.SET_SORTBY.RESET.create());
  };

  return (
    <ModalWithBlur onClose={close} isVisible={isVisible}>
      <Typography.Header customStyles={styles.title}>
        {t('scenarioSorting.title')}
      </Typography.Header>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Typography.Description customStyles={styles.description}>
            {t('scenarioSorting.sortBy')}
          </Typography.Description>
          <SortByList />
        </View>
        <View style={styles.subContainer}>
          <Typography.Description customStyles={styles.description}>
            {t('scenarioSorting.orderBy')}
          </Typography.Description>
          <SortOrderSelect />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={reset}>
          <Typography.Description>
            {t('scenarioSorting.reset')}
          </Typography.Description>
        </Button>
        <Button onPress={close}>
          <Typography.Description>
            {t('scenarioSorting.apply')}
          </Typography.Description>
        </Button>
      </View>
    </ModalWithBlur>
  );
}
