import {Button} from '@components/core/Button';
import {FormTextEntry} from '@components/core/FormFields/FormTextEntry';
import {Typography} from '@components/core/Typography';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {AdditionalToolbarState} from '@store/modules/MainScreen/reducer';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard, Pressable, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AddIcon} from 'src/assets/icons/AddIcon';
import {useYupValidationResolver} from 'src/hooks/forms/useYupValidationResolver';
import {useDeleteAnglePrimaryInput} from 'src/hooks/queries/scenarios/useDeleteAnglePrimaryInput';
import {useDeleteAngleSecondaryInput} from 'src/hooks/queries/scenarios/useDeleteAngleSecondaryInput';
import {useUpdateAnglePrimaryInput} from 'src/hooks/queries/scenarios/useUpdateAnglePrimaryInput';
import {useUpdateAngleSecondaryInput} from 'src/hooks/queries/scenarios/useUpdateAngleSecondaryInput';
import {AngleInput} from 'src/types/Scenario';

import {FORM_VALIDATION_SCHEMA} from './constants';
import {useStyles} from './styles';
import {FormInput} from './types';

type EditAngleInputProps = AngleInput & {isPrimary: boolean};

export function EditAngleInput({
  id,
  angle,
  isPrimary,
  targetX,
  targetY,
}: EditAngleInputProps) {
  const styles = useStyles();

  const dismissKeyboard = () => {
    Keyboard.isVisible() && Keyboard.dismiss();
  };

  const {t} = useTranslation();
  const dispatch = useDispatch();

  const resolver = useYupValidationResolver<FormInput>(FORM_VALIDATION_SCHEMA);

  const {control, handleSubmit, setValue} = useForm<FormInput>({
    resolver,
  });

  useEffect(() => {
    setValue('targetX', targetX.toString() as unknown as FormInput['targetX']);
    setValue('targetY', targetY.toString() as unknown as FormInput['targetY']);
    setValue('angle', angle.toString() as unknown as FormInput['angle']);
  }, [targetX, targetY, angle, setValue]);

  const close = () => {
    dispatch(
      MainScreenActions.SET_ADDITIONAL_TOOLBAR_STATE.START.create(
        AdditionalToolbarState.HIDDEN,
      ),
    );
  };

  const {mutateAsync: updatePrimary} = useUpdateAnglePrimaryInput(id);
  const {mutateAsync: updateSecondary} = useUpdateAngleSecondaryInput(id);

  const {mutateAsync: deletePrimary} = useDeleteAnglePrimaryInput(id);
  const {mutateAsync: deleteSecondary} = useDeleteAngleSecondaryInput(id);

  const remove = async () => {
    try {
      if (isPrimary) {
        await deletePrimary();
      } else {
        await deleteSecondary();
      }
      close();
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (formData: FormInput) => {
    try {
      if (isPrimary) {
        await updatePrimary(formData);
      } else {
        await updateSecondary(formData);
      }
      close();
    } catch (error) {
      console.error(error);
    }
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
