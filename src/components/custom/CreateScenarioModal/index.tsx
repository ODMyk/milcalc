import {ModalWithBlur} from '@components/core/ModalWithBlur';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {createOpenedSelector} from '@store/modules/ScenariosScreen/selectors';
import {useActionState} from '@store/modules/UtilityProcessStatuses/selectors';
import React, {useCallback, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Form} from './form';
import {FORM_DEFAULT_VALUES} from './form/constants';
import {FormInput} from './form/types';
import {useStyles} from './styles';

export function CreateScenarioModal() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isVisible = useSelector(createOpenedSelector);

  const {i18n, t} = useTranslation();

  const close = useCallback(() => {
    dispatch(ScenariosScreenActions.SET_CREATE_OPENED.START.create(false));
  }, [dispatch]);

  const apply = (data: FormInput) => {
    dispatch(ScenariosScreenActions.CREATE_SCENARIO.START.create(data));
  };

  const creatingState = useActionState(ScenariosScreenActions.CREATE_SCENARIO);

  useEffect(() => {
    if (creatingState?.success) {
      close();
    }
  }, [close, creatingState?.success]);

  return (
    <ModalWithBlur onClose={close} isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Typography.Header customStyles={styles.title}>
            {t('createScenario.title')}
          </Typography.Header>

          <Form
            onSubmit={apply}
            defaultValues={FORM_DEFAULT_VALUES[i18n.language]}
          />
        </View>
      </View>
    </ModalWithBlur>
  );
}
