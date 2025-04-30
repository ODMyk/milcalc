import {Button} from '@components/core/Button';
import {Typography} from '@components/core/Typography';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {
  currentScenarioIdSelector,
  prevZoneSelector,
  zoneSelector,
} from '@store/modules/MainScreen/selectors';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useScenario} from 'src/hooks/queries/scenarios/useScenario';

import {useStyles} from './styles';

export function ZoneChangeWarning() {
  const styles = useStyles();
  const prevZone = useSelector(prevZoneSelector);
  const zone = useSelector(zoneSelector);
  const scenarioId = useSelector(currentScenarioIdSelector);
  const {data, isLoading} = useScenario(scenarioId);

  const {t} = useTranslation();
  const dispatch = useDispatch();

  if (isLoading || !data || prevZone === zone || zone === data.scenario.zone) {
    return null;
  }

  const onDismiss = () => {
    dispatch(MainScreenActions.SET_PREV_ZONE.START.create(zone));
  };

  const onApply = () => {
    onDismiss();
  };

  return (
    <View style={styles.container}>
      <Typography.Description customStyles={styles.description}>
        {t('zoneChangeWarning.description')}
      </Typography.Description>
      <View style={styles.buttons}>
        <Button onPress={onApply}>
          <Typography.Description>
            {t('zoneChangeWarning.apply')}
          </Typography.Description>
        </Button>
        <Button onPress={onDismiss}>
          <Typography.Description>
            {t('zoneChangeWarning.cancel')}
          </Typography.Description>
        </Button>
      </View>
    </View>
  );
}
