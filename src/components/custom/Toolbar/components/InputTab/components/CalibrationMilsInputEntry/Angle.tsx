import {Typography} from '@components/core/Typography';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import {useStyles} from './styles';

interface AngleInputEntryProps {
  targetX: number;
  targetY: number;
  angle: number;
  isPrimary: boolean;
  number: number;
}

export function AngleInputEntry({
  targetX,
  targetY,
  angle,
  isPrimary,
  number,
}: AngleInputEntryProps) {
  const styles = useStyles();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Typography.Header customStyles={styles.label}>
        {`${t('toolbar.input.angle.title')} #${number}`}
      </Typography.Header>

      <View style={styles.details}>
        <View style={styles.dataWrapper}>
          <Typography.Text customStyles={styles.label}>
            {t('toolbar.input.angle.target')}:
          </Typography.Text>

          <Typography.Text customStyles={styles.label}>
            {t(
              `toolbar.input.angle.angle.${
                isPrimary ? 'primary' : 'secondary'
              }`,
            )}
            :
          </Typography.Text>
        </View>

        <View style={styles.flex}>
          <View style={styles.dataWrapper}>
            <View style={styles.row}>
              <Typography.Text customStyles={styles.label}>
                {t('toolbar.input.angle.x')}
                {`: ${targetX.toFixed(5)}`}
              </Typography.Text>

              <Typography.Text customStyles={styles.label}>
                {t('toolbar.input.angle.y')}
                {`: ${targetY.toFixed(5)}`}
              </Typography.Text>
            </View>
            <Typography.Text customStyles={styles.label}>
              {angle}
            </Typography.Text>
          </View>
        </View>
      </View>
    </View>
  );
}
