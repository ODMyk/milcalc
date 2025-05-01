import {Button} from '@components/core/Button';
import {FormTextEntry} from '@components/core/FormFields/FormTextEntry';
import {Typography} from '@components/core/Typography';
import {MainStackParamList} from '@navigation/Stacks/Main';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {AdditionalToolbarState} from '@store/modules/MainScreen/reducer';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard, Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useYupValidationResolver} from 'src/hooks/forms/useYupValidationResolver';
import {useRemoveScenario} from 'src/hooks/queries/scenarios/useRemoveScenario';
import {useScenario} from 'src/hooks/queries/scenarios/useScenario';
import {useUpdateScenario} from 'src/hooks/queries/scenarios/useUpdateScenario';

import {FORM_VALIDATION_SCHEMA} from './constants';
import {useStyles} from './styles';
import {FormInput} from './types';

export function EditScenario() {
  const styles = useStyles();
  const {t} = useTranslation();
  const scenarioId = useSelector(currentScenarioIdSelector);
  const {data} = useScenario(scenarioId);

  const {goBack} = useNavigation<NavigationProp<MainStackParamList>>();

  const dispatch = useDispatch();

  const resolver = useYupValidationResolver<FormInput>(FORM_VALIDATION_SCHEMA);

  const {control, setValue, handleSubmit} = useForm<FormInput>({
    resolver,
  });

  const dismissKeyboard = () => {
    Keyboard.isVisible() && Keyboard.dismiss();
  };

  const {mutateAsync: update} = useUpdateScenario(scenarioId);
  const {mutateAsync: remove} = useRemoveScenario(scenarioId);

  const onSubmit = async (formData: FormInput) => {
    try {
      await update(formData);
      close();
    } catch (error) {
      console.error(error);
    }
  };

  const submit = handleSubmit(onSubmit);

  const removeScenario = async () => {
    try {
      await remove();
      goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const close = () => {
    dispatch(
      MainScreenActions.SET_ADDITIONAL_TOOLBAR_STATE.START.create(
        AdditionalToolbarState.HIDDEN,
      ),
    );
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    setValue('title', data.scenario.title);
    setValue('description', data.scenario.description);
  }, [data, setValue]);

  if (!data) {
    return null;
  }

  return (
    <Pressable
      cancelable={false}
      onPress={dismissKeyboard}
      style={styles.container}>
      <View style={styles.details}>
        <View style={styles.fieldsContainer}>
          <View style={styles.flex}>
            <Typography.Text customStyles={styles.label}>
              {t('editScenario.form.title')}
            </Typography.Text>
          </View>

          <View style={styles.input}>
            <FormTextEntry
              size="default"
              control={control}
              name="title"
              placeholder={t('editScenario.form.title')}
            />
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <View style={styles.flex}>
            <Typography.Text customStyles={styles.label}>
              {t('editScenario.form.description')}
            </Typography.Text>
          </View>
          <View style={styles.input}>
            <FormTextEntry
              size="default"
              control={control}
              name="description"
              placeholder={t('editScenario.form.description')}
            />
          </View>
        </View>
      </View>
      <Button onPress={removeScenario} fullWidth>
        <Typography.Text>{t('editScenario.remove')}</Typography.Text>
      </Button>
      <View style={[styles.buttonsContainer, styles.flex]}>
        <Button onPress={close}>
          <Typography.Text>{t('editScenario.cancel')}</Typography.Text>
        </Button>
        <Button onPress={submit}>
          <Typography.Text>{t('editScenario.apply')}</Typography.Text>
        </Button>
      </View>
    </Pressable>
  );
}
