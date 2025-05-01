import {Button} from '@components/core/Button';
import {FormTextEntry} from '@components/core/FormFields/FormTextEntry';
import {Typography} from '@components/core/Typography';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {AdditionalToolbarState} from '@store/modules/MainScreen/reducer';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard, Pressable, Switch, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddIcon} from 'src/assets/icons/AddIcon';
import {useYupValidationResolver} from 'src/hooks/forms/useYupValidationResolver';
import {useAddCalibrationMetersInput} from 'src/hooks/queries/scenarios/useAddCalibrationMetersInput';
import {useAddCalibrationMilsInput} from 'src/hooks/queries/scenarios/useAddCalibrationMilsInput';

import {FORM_DEFAULT_VALUES, FORM_VALIDATION_SCHEMA} from './constants';
import {useStyles} from './styles';
import {FormInput, FormType} from './types';

export function AddCalibrationInput() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const scenarioId = useSelector(currentScenarioIdSelector);

  const {t} = useTranslation();

  // @ts-ignore
  const resolver = useYupValidationResolver<FormInput>(FORM_VALIDATION_SCHEMA);

  const {control, handleSubmit, watch, reset} = useForm<FormInput>({
    resolver,
    defaultValues: FORM_DEFAULT_VALUES,
  });

  const {formType, isLeft, isUnder} = watch();

  const {mutateAsync: addCalibrationMilsInput} =
    useAddCalibrationMilsInput(scenarioId);
  const {mutateAsync: addCalibrationMetersInput} =
    useAddCalibrationMetersInput(scenarioId);

  const onSubmit = async (data: FormInput) => {
    try {
      switch (data.formType) {
        case FormType.MILS:
          await addCalibrationMilsInput(data);
          break;
        case FormType.METERS:
          await addCalibrationMetersInput(data);
          break;
        default:
          console.log('Never happen', data);
          break;
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

  const close = () => {
    dispatch(
      MainScreenActions.SET_ADDITIONAL_TOOLBAR_STATE.START.create(
        AdditionalToolbarState.HIDDEN,
      ),
    );
  };

  const submit = handleSubmit(onSubmit);

  return (
    <View style={styles.wrapper}>
      <Pressable
        cancelable={false}
        onPress={dismissKeyboard}
        style={styles.container}>
        <View style={styles.fieldsContainer}>
          <Controller
            control={control}
            name="formType"
            render={({field: {onChange, value}}) => {
              return (
                <View style={styles.isPrimaryContainer}>
                  {Object.values(FormType).map(fType => (
                    <Typography.Link
                      handlePress={() => onChange(fType)}
                      customStyles={{
                        ...styles.typeSubLabel,
                        ...(value === fType && styles.typeLabelActive),
                      }}
                      key={fType}>
                      {t(`addInput.calibration.${fType}.tabLabel`)}
                    </Typography.Link>
                  ))}
                </View>
              );
            }}
          />
          <View style={styles.inputContainer}>
            <View style={styles.firstRow}>
              <Button style={styles.addButton}>
                <AddIcon {...styles.addIcon} />
              </Button>
              <Typography.Description customStyles={styles.label}>
                {t('addInput.calibration.target')}
              </Typography.Description>
            </View>

            <View style={[styles.inputContainer, styles.input]}>
              <Typography.Description customStyles={styles.labelNoFlex}>
                {t('addInput.calibration.targetX')}
              </Typography.Description>

              <View style={styles.input}>
                <FormTextEntry
                  size="default"
                  control={control}
                  name="targetX"
                  placeholder="1.234567"
                />
              </View>

              <Typography.Description customStyles={styles.labelNoFlex}>
                {t('addInput.calibration.targetY')}
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
            <View style={styles.firstRow}>
              <Button style={styles.addButton}>
                <AddIcon {...styles.addIcon} />
              </Button>
              <Typography.Description customStyles={styles.label}>
                {t('addInput.calibration.actual')}
              </Typography.Description>
            </View>

            <View style={[styles.inputContainer, styles.input]}>
              <Typography.Description customStyles={styles.labelNoFlex}>
                {t('addInput.calibration.actualX')}
              </Typography.Description>

              <View style={styles.input}>
                <FormTextEntry
                  size="default"
                  control={control}
                  name="actualX"
                  placeholder="1.234567"
                />
              </View>

              <Typography.Description customStyles={styles.labelNoFlex}>
                {t('addInput.calibration.actualY')}
              </Typography.Description>

              <View style={styles.input}>
                <FormTextEntry
                  size="default"
                  control={control}
                  name="actualY"
                  placeholder="1.234567"
                />
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Typography.Description customStyles={styles.label}>
              {t(`addInput.calibration.${isUnder ? 'under' : 'over'}`)}
            </Typography.Description>
            <View style={styles.input}>
              <FormTextEntry
                size="default"
                control={control}
                name="diff"
                placeholder="57"
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Typography.Description customStyles={styles.label}>
              {t(`addInput.calibration.${formType}.inputLabel`)}
            </Typography.Description>
            <View style={styles.input}>
              {formType === FormType.MILS ? (
                <FormTextEntry
                  size="default"
                  control={control}
                  name="angle"
                  placeholder="4500"
                  key="angle"
                />
              ) : (
                <FormTextEntry
                  size="default"
                  control={control}
                  name="distance"
                  placeholder="112.3"
                  key="distance"
                />
              )}
            </View>
          </View>
          <View style={styles.doubleRow}>
            <Controller
              control={control}
              name="isLeft"
              render={({field: {onChange, value}}) => (
                <View style={styles.inputContainer}>
                  <Typography.Link
                    customStyles={{
                      ...styles.typeSubLabel,
                      ...(isLeft && styles.typeLabelActive),
                    }}
                    handlePress={() => onChange(true)}>
                    {t('addInput.calibration.left')}
                  </Typography.Link>
                  <Switch
                    value={!value}
                    onValueChange={f => onChange(!f)}
                    // style={styles.switch}
                  />
                  <Typography.Link
                    customStyles={{
                      ...styles.typeSubLabel,
                      ...(!isLeft && styles.typeLabelActive),
                    }}
                    handlePress={() => onChange(false)}>
                    {t('addInput.calibration.right')}
                  </Typography.Link>
                </View>
              )}
            />
            <Controller
              control={control}
              name="isUnder"
              render={({field: {onChange, value}}) => (
                <View style={styles.inputContainer}>
                  <Typography.Link
                    customStyles={{
                      ...styles.typeSubLabel,
                      ...(isUnder && styles.typeLabelActive),
                    }}
                    handlePress={() => onChange(true)}>
                    {t('addInput.calibration.under')}
                  </Typography.Link>
                  <Switch
                    value={!value}
                    onValueChange={f => onChange(!f)}
                    // style={styles.switch}
                  />
                  <Typography.Link
                    customStyles={{
                      ...styles.typeSubLabel,
                      ...(!isUnder && styles.typeLabelActive),
                    }}
                    handlePress={() => onChange(false)}>
                    {t('addInput.calibration.over')}
                  </Typography.Link>
                </View>
              )}
            />
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
    </View>
  );
}
