import {Button} from '@components/core/Button';
import {FormTextEntry} from '@components/core/FormFields/FormTextEntry';
import {Typography} from '@components/core/Typography';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {AdditionalToolbarState} from '@store/modules/MainScreen/reducer';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard, Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddIcon} from 'src/assets/icons/AddIcon';
import {useYupValidationResolver} from 'src/hooks/forms/useYupValidationResolver';
import {useAddAnglePrimaryInput} from 'src/hooks/queries/scenarios/useAddAnglePrimaryInput';
import {useAddAngleSecondaryInput} from 'src/hooks/queries/scenarios/useAddAngleSecondaryInput';

import {FORM_DEFAULT_VALUES, FORM_VALIDATION_SCHEMA} from './constants';
import {useStyles} from './styles';
import {FormInput} from './types';

export function AddAngleInput() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const scenarioId = useSelector(currentScenarioIdSelector);

  const {t} = useTranslation();

  const close = () => {
    dispatch(
      MainScreenActions.SET_ADDITIONAL_TOOLBAR_STATE.START.create(
        AdditionalToolbarState.HIDDEN,
      ),
    );
  };

  const resolver = useYupValidationResolver<FormInput>(FORM_VALIDATION_SCHEMA);

  const {control, handleSubmit, watch, reset} = useForm<FormInput>({
    resolver,
    defaultValues: FORM_DEFAULT_VALUES,
  });

  const {isPrimary} = watch();

  const {mutateAsync: addPrimary} = useAddAnglePrimaryInput(scenarioId);
  const {mutateAsync: addSecondary} = useAddAngleSecondaryInput(scenarioId);

  const onSubmit = async ({isPrimary: isPrimaryForm, ...data}: FormInput) => {
    try {
      if (isPrimaryForm) {
        await addPrimary(data);
      } else {
        await addSecondary(data);
      }
      reset();
      close();
    } catch (error) {
      console.error(error);
    }
  };

  const dismissKeyboard = () => {
    Keyboard.isVisible() && Keyboard.dismiss();
  };

  const submit = handleSubmit(onSubmit, e => console.log(e));

  return (
    <Pressable
      cancelable={false}
      onPress={dismissKeyboard}
      style={styles.container}>
      <View style={styles.fieldsContainer}>
        <Controller
          control={control}
          name="isPrimary"
          render={({field: {onChange, value}}) => (
            <View style={styles.isPrimaryContainer}>
              <Typography.Link
                customStyles={{
                  ...styles.typeLabel,
                  ...(!value && styles.typeSelected),
                }}
                handlePress={() => onChange(false)}>
                {t('addInput.angle.secondary.tabLabel')}
              </Typography.Link>
              <Typography.Link
                customStyles={{
                  ...styles.typeLabel,
                  ...(value && styles.typeSelected),
                }}
                handlePress={() => onChange(true)}>
                {t('addInput.angle.primary.tabLabel')}
              </Typography.Link>
            </View>
          )}
        />
        <View style={styles.inputContainer}>
          <View style={styles.firstRow}>
            <Button style={styles.addButton}>
              <AddIcon {...styles.addIcon} />
            </Button>
            <Typography.Description
              customStyles={{...styles.label, ...styles.flex}}>
              {t('addInput.angle.target')}
            </Typography.Description>
          </View>

          <View
            style={[
              styles.input,
              styles.inputContainer,
              styles.isPrimaryContainer,
            ]}>
            <Typography.Description customStyles={styles.label}>
              {t('addInput.angle.x')}
            </Typography.Description>

            <View style={styles.input}>
              <FormTextEntry
                size="default"
                control={control}
                name="targetX"
                placeholder="1.234567"
              />
            </View>

            <Typography.Description customStyles={styles.label}>
              {t('addInput.angle.y')}
            </Typography.Description>

            <View style={styles.input}>
              <FormTextEntry
                size="default"
                control={control}
                name="targetY"
                placeholder="1.234567"
              />
            </View>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Typography.Description
            customStyles={{...styles.label, ...styles.flex}}>
            {t(
              `addInput.angle.${
                isPrimary ? 'primary' : 'secondary'
              }.inputLabel`,
            )}
          </Typography.Description>
          <View style={styles.input}>
            <FormTextEntry
              size="default"
              control={control}
              name="angle"
              placeholder="4500"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={close}>
          <Typography.Text>{t('addInput.cancel')}</Typography.Text>
        </Button>
        <Button onPress={submit}>
          <Typography.Text>{t('addInput.apply')}</Typography.Text>
        </Button>
      </View>
    </Pressable>
  );
}
