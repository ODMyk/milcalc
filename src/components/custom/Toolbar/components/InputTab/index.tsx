import {Button} from '@components/core/Button';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AddIcon} from 'src/assets/icons/AddIcon';
import {useScenario} from 'src/hooks/queries/scenarios/useScenario';
import {
  AngleInput,
  CalibrationMetersInput,
  CalibrationMilsInput,
} from 'src/types/Scenario';

import {AngleInputEntry} from './components/CalibrationMilsInputEntry/Angle';
import {CalibrationMetersInputEntry} from './components/CalibrationMilsInputEntry/CalibrationMeters';
import {CalibrationMilsInputEntry} from './components/CalibrationMilsInputEntry/CalibrationMils';
import {Separator} from './components/Separator';
import {useStyles} from './styles';

type Input = (
  | (AngleInput & {isPrimary: boolean})
  | CalibrationMetersInput
  | CalibrationMilsInput
) & {number: number};

const keyExtractor = (item: Input) => item.id;

function isAngleInput(
  input: Input,
): input is AngleInput & {isPrimary: boolean; number: number} {
  return 'targetX' in input && !('actualX' in input);
}

function isCalibrationMilsInput(
  input: Input,
): input is CalibrationMilsInput & {number: number} {
  return 'angle' in input && 'actualX' in input;
}

function isCalibrationMetersInput(
  input: Input,
): input is CalibrationMetersInput & {number: number} {
  return 'distance' in input && 'actualX' in input;
}

function enumerate<T>(_item: T, index: number) {
  return {..._item, number: index + 1};
}

const renderItem = ({item}: ListRenderItemInfo<Input>) => {
  if (isAngleInput(item)) {
    return <AngleInputEntry {...item} />;
  }

  if (isCalibrationMilsInput(item)) {
    return <CalibrationMilsInputEntry {...item} />;
  }

  if (isCalibrationMetersInput(item)) {
    return <CalibrationMetersInputEntry {...item} />;
  }

  return null;
};

export function InputTab() {
  const styles = useStyles();
  const scenarioId = useSelector(currentScenarioIdSelector);
  const {data, isLoading} = useScenario(scenarioId);
  const dispatch = useDispatch();

  const inputs: Input[] = useMemo(
    () =>
      !data
        ? []
        : [
            ...data.scenario.calibrationMils.map(enumerate),
            ...data.scenario.anglesPrimary
              .map(a => ({
                ...a,
                isPrimary: true,
              }))
              .concat(
                data.scenario.anglesSecondary.map(a => ({
                  ...a,
                  isPrimary: false,
                })),
              )
              .map(enumerate),

            ...data.scenario.calibrationMeters.map(enumerate),
          ],
    [data],
  );
  if (isLoading || !data) {
    return null;
  }

  const openAdd = () => {
    dispatch(MainScreenActions.SET_ADD_INPUT_OPENED.START.create(true));
  };

  return (
    <View style={styles.container}>
      <FlashList
        data={inputs}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        keyExtractor={keyExtractor}
      />
      <Button style={styles.button} onPress={openAdd}>
        <AddIcon {...styles.icon} />
      </Button>
    </View>
  );
}
