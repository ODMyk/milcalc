import {Typography} from '@components/core/Typography';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useScenario} from 'src/hooks/queries/scenarios/useScenario';
import {AngleInput} from 'src/types/Scenario';

import {useStyles} from './styles';

function consumePoints(points: AngleInput[]) {
  if (points.length < 3) {
    return [];
  }

  return [];
}

export function ResultsTab() {
  const styles = useStyles();
  const scenarioId = useSelector(currentScenarioIdSelector);
  const {data} = useScenario(scenarioId);

  if (!data) {
    return null;
  }

  const resultPoints = consumePoints(data.scenario.anglesPrimary);

  return (
    <View style={styles.container}>
      <Typography.Description>Results</Typography.Description>

      {resultPoints.map((p, i) => (
        <Typography.Description key={i}>
          {JSON.stringify(p)}
        </Typography.Description>
      ))}
    </View>
  );
}
