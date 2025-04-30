import {Typography} from '@components/core/Typography';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import {useStyles} from './styles';

interface AngleInputEntryProps {
  targetX: number;
  targetY: number;
  actualX: number;
  actualY: number;
  distance: number;
  number: number;
  isLeft: boolean;
  isUnder: boolean;
  diff: number;
}

export function CalibrationMetersInputEntry({
  targetX,
  targetY,
  actualX,
  actualY,
  isLeft,
  isUnder,
  diff,
  distance,
  number,
}: AngleInputEntryProps) {
  const styles = useStyles();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Typography.Header customStyles={styles.label}>
        {`${t('toolbar.input.calibration.title')} (${t(
          'toolbar.input.calibration.meters',
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
            {t('toolbar.input.calibration.meters')}:
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
              )}  ${distance}`}
            </Typography.Text>
            <Typography.Text customStyles={styles.label}>
              {diff}
            </Typography.Text>
          </View>
        </View>
      </View>
    </View>
  );
}
