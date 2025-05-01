import {Typography} from '@components/core/Typography';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AngleInput} from 'src/types/Scenario';

import {useStyles} from './styles';

type AngleInputEntryProps = AngleInput & {
  isPrimary: boolean;
  number: number;
};

export function AngleInputEntry({
  targetX,
  targetY,
  angle,
  isPrimary,
  number,
  id,
}: AngleInputEntryProps) {
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
        isPrimary,
        number,
      }),
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openEdit}>
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
    </TouchableOpacity>
  );
}
