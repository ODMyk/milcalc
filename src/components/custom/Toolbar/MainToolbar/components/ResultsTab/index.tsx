import {Typography} from '@components/core/Typography';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import {
  Decimal,
  metersToNormalized,
  milsToRadians,
  milsUnder,
} from 'calculations';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useScenario} from 'src/hooks/queries/scenarios/useScenario';

import {useStyles} from './styles';

// function consumePoints(points: AngleInput[]) {
//   if (points.length < 3) {
//     return [];
//   }

//   return [];
// }

export function ResultsTab() {
  const styles = useStyles();
  const scenarioId = useSelector(currentScenarioIdSelector);
  const {data} = useScenario(scenarioId);

  if (!data) {
    return null;
  }

  const result = data.scenario.calibrationMils.map(i =>
    i.isUnder
      ? milsUnder(
          metersToNormalized(new Decimal(i.diff)),
          {x: new Decimal(i.targetX), y: new Decimal(i.targetY)},
          {x: new Decimal(i.actualX), y: new Decimal(i.actualY)},
          milsToRadians(new Decimal(i.angle)),
          i.isLeft,
        )
      : null,
  );

  return (
    <View style={styles.container}>
      <Typography.Description>Results</Typography.Description>

      {result.map((p, i) => (
        <Typography.Description key={i}>
          {JSON.stringify(p)}
        </Typography.Description>
      ))}
    </View>
  );
}
