import {Button} from '@components/core/Button';
import {FormTextEntry} from '@components/core/FormFields/FormTextEntry';
import {Typography} from '@components/core/Typography';
import {
  FormMeters,
  FormMils,
  FormType,
} from '@components/custom/AddScenarioInput/components/AddCalibrationInput/types';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {AdditionalToolbarState} from '@store/modules/MainScreen/reducer';
import React, {useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard, Pressable, Switch, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AddIcon} from 'src/assets/icons/AddIcon';
import {useYupValidationResolver} from 'src/hooks/forms/useYupValidationResolver';
import {useDeleteCalibrationMetersInput} from 'src/hooks/queries/scenarios/useDeleteCalibrationMetersInput';
import {useDeleteCalibrationMilsInput} from 'src/hooks/queries/scenarios/useDeleteCalibrationMilsInput';
import {useUpdateCalibrationMetersInput} from 'src/hooks/queries/scenarios/useUpdateCalibrationMetersInput';
import {useUpdateCalibrationMilsInput} from 'src/hooks/queries/scenarios/useUpdateCalibrationMilsInput';
import {CalibrationMetersInput, CalibrationMilsInput} from 'src/types/Scenario';

import {FORM_VALIDATION_SCHEMA} from './constants';
import {useStyles} from './styles';
import {FormInput} from './types';

const isMils = (x: Omit<FormInput, 'formType'>): x is CalibrationMilsInput =>
  'angle' in x;

type EditCalibrationInputProps = CalibrationMilsInput | CalibrationMetersInput;

export function EditCalibrationInput(item: EditCalibrationInputProps) {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const resolver = useYupValidationResolver<FormInput>(FORM_VALIDATION_SCHEMA);

  const {control, handleSubmit, watch, setValue} = useForm<FormInput>({
    resolver,
  });

  const {isLeft, isUnder, formType} = watch();

  useEffect(() => {
    setValue('isLeft', item.isLeft);
    setValue('isUnder', item.isUnder);
    setValue('formType', isMils(item) ? FormType.MILS : FormType.METERS);
    setValue(
      'targetX',
      item.targetX.toString() as unknown as FormInput['targetX'],
    );
    setValue(
      'targetY',
      item.targetY.toString() as unknown as FormInput['targetY'],
    );
    setValue(
      'actualX',
      item.actualX.toString() as unknown as FormInput['actualX'],
    );
    setValue(
      'actualY',
      item.actualY.toString() as unknown as FormInput['actualY'],
    );
    setValue('diff', item.diff.toString() as unknown as FormInput['diff']);
    if (isMils(item)) {
      setValue('angle', item.angle.toString() as unknown as FormMils['angle']);
    } else {
      setValue(
        'distance',
        item.distance.toString() as unknown as FormMeters['distance'],
      );
    }
  }, [item, setValue]);

  const {mutateAsync: deleteCalibrationMilsInput} =
    useDeleteCalibrationMilsInput(item.id);
  const {mutateAsync: deleteCalibrationMetersInput} =
    useDeleteCalibrationMetersInput(item.id);

  const {mutateAsync: updateCalibrationMilsInput} =
    useUpdateCalibrationMilsInput(item.id);
  const {mutateAsync: updateCalibrationMetersInput} =
    useUpdateCalibrationMetersInput(item.id);

  const onSubmit = async (data: FormInput) => {
    try {
      if (isMils(data)) {
        await updateCalibrationMilsInput(data);
      } else {
        await updateCalibrationMetersInput(data);
      }
      close();
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async () => {
    try {
      if (isMils(item)) {
        await deleteCalibrationMilsInput();
      } else {
        await deleteCalibrationMetersInput();
      }
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
    <Pressable
      cancelable={false}
      onPress={dismissKeyboard}
      style={styles.container}>
      <View style={styles.fieldsContainer}>
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
        <Button onPress={remove} fullWidth>
          <Typography.Text>{t('editInput.remove')}</Typography.Text>
        </Button>
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={close}>
          <Typography.Text>{t('editInput.cancel')}</Typography.Text>
        </Button>
        <Button onPress={submit}>
          <Typography.Text>{t('editInput.apply')}</Typography.Text>
        </Button>
      </View>
    </Pressable>
  );
}
