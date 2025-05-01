import {Typography} from '@components/core/Typography';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {CalibrationMilsInput} from 'src/types/Scenario';

import {useStyles} from './styles';

type CalibrationMilsInputEntryProps = CalibrationMilsInput & {
  number: number;
};

export function CalibrationMilsInputEntry({
  id,
  targetX,
  targetY,
  actualX,
  actualY,
  isLeft,
  isUnder,
  diff,
  angle,
  number,
}: CalibrationMilsInputEntryProps) {
  const styles = useStyles();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const openEdit = () => {
    dispatch(
      MainScreenActions.EDIT_INPUT.START.create({
        id,
        targetX,
        targetY,
        angle,
        number,
        isLeft,
        isUnder,
        diff,
        actualX,
        actualY,
      }),
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openEdit}>
      <Typography.Header customStyles={styles.label}>
        {`${t('toolbar.input.calibration.title')} (${t(
          'toolbar.input.calibration.mils',
        )}) #${number}`}
      </Typography.Header>

      <View style={styles.details}>
        <View style={styles.dataWrapper}>
          <Typography.Text customStyles={styles.label}>
            {t('toolbar.input.calibration.target')}:
          </Typography.Text>

          <Typography.Text customStyles={styles.label}>
            {t('toolbar.input.calibration.actual')}:
          </Typography.Text>

          <Typography.Text customStyles={styles.label}>
            {t('toolbar.input.calibration.mils')}:
          </Typography.Text>

          <Typography.Text customStyles={styles.label}>
            {t('toolbar.input.calibration.' + (isUnder ? 'under' : 'over'))}:
          </Typography.Text>
        </View>

        <View style={styles.flex}>
          <View style={styles.dataWrapper}>
            <View style={styles.row}>
              <Typography.Text customStyles={styles.label}>
                {t('toolbar.input.calibration.x')}
                {`: ${targetX.toFixed(5)}`}
              </Typography.Text>
              <Typography.Text customStyles={styles.label}>
                {t('toolbar.input.calibration.y')}
                {`: ${targetY.toFixed(5)}`}
              </Typography.Text>
            </View>
            <View style={styles.row}>
              <Typography.Text customStyles={styles.label}>
                {t('toolbar.input.calibration.x')}
                {`: ${actualX.toFixed(5)}`}
              </Typography.Text>
              <Typography.Text customStyles={styles.label}>
                {t('toolbar.input.calibration.y')}
                {`: ${actualY.toFixed(5)}`}
              </Typography.Text>
            </View>
            <Typography.Text customStyles={styles.label}>
              {`${t(
                'toolbar.input.calibration.' + (isLeft ? 'left' : 'right'),
              )}  ${angle}`}
            </Typography.Text>
            <Typography.Text customStyles={styles.label}>
              {diff}
            </Typography.Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
