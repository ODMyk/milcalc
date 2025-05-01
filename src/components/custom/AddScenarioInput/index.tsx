import {Tabs} from '@components/core/Tabs';
import {Typography} from '@components/core/Typography';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import {AddAngleInput} from './components/AddAngleInput';
import {AddCalibrationInput} from './components/AddCalibrationInput';
import {useStyles} from './styles';

export function AddScenarioInput() {
  const styles = useStyles();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Typography.Description center customStyles={styles.title}>
        {t('addInput.title')}
      </Typography.Description>
      <Tabs initialTab="angle">
        <Tabs.Tab id="angle" label={t('addInput.angle.tabLabel')}>
          <AddAngleInput />
        </Tabs.Tab>
        <Tabs.Tab id="calibration" label={t('addInput.calibration.tabLabel')}>
          <AddCalibrationInput />
        </Tabs.Tab>
      </Tabs>
    </View>
  );
}
