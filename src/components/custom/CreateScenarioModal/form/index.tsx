import {Button} from '@components/core/Button';
import {FormTextEntry} from '@components/core/FormFields/FormTextEntry';
import {ScenarioVariantSelect} from '@components/core/FormFields/ScenarioVariantSelect';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useYupValidationResolver} from 'src/hooks/forms/useYupValidationResolver';

import {FORM_VALIDATION_SCHEMA} from './constants';
import {useStyles} from './styles';
import {FormInput, FormProps} from './types';

export function Form({defaultValues, onSubmit}: FormProps) {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const resolver = useYupValidationResolver<FormInput>(FORM_VALIDATION_SCHEMA);

  const {control, handleSubmit} = useForm<FormInput>({
    resolver,
    defaultValues,
  });

  const close = () => {
    dispatch(ScenariosScreenActions.SET_CREATE_OPENED.START.create(false));
  };

  const submit = handleSubmit(onSubmit);

  return (
    <View style={styles.container}>
      <View style={styles.fieldsContainer}>
        <FormTextEntry
          control={control}
          name="title"
          placeholder={t('createScenario.form.title')}
        />
        <FormTextEntry
          control={control}
          name="description"
          placeholder={t('createScenario.form.description')}
        />
        <ScenarioVariantSelect control={control} name="variant" />
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={close}>
          <Typography.Description>
            {t('createScenario.form.cancel')}
          </Typography.Description>
        </Button>
        <Button onPress={submit}>
          <Typography.Description>
            {t('createScenario.form.apply')}
          </Typography.Description>
        </Button>
      </View>
    </View>
  );
}
