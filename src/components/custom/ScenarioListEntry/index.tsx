import {textByVariant} from '@components/core/FormFields/ScenarioVariantSelect/components/VariantEntry';
import {SwipeableItem} from '@components/core/SwipableItem';
import {Typography} from '@components/core/Typography';
import {LIST_ENTRY_FORMAT} from '@constants/dateFormats';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {DateTime} from 'luxon';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ChevronRightIcon} from 'src/assets/icons/ChevronRight';
import {TrashIcon} from 'src/assets/icons/TrashIcon';
import {Scenario} from 'src/types/Scenario';

import {useStyles} from './styles';

interface ScenarioListEntryProps {
  scenario: Scenario;
  isFirst?: boolean;
  isLast?: boolean;
}

interface ActionsProps {
  scenario: Scenario;
}

function Actions({scenario}: ActionsProps) {
  const dispatch = useDispatch();
  const styles = useStyles();

  const removeScenario = () => {
    dispatch(ScenariosScreenActions.REMOVE_SCENARIO.START.create(scenario.id));
  };

  return (
    <View style={styles.actionsContainer}>
      <TouchableOpacity style={styles.action} onPress={removeScenario}>
        <TrashIcon {...styles.actionIcon} />
      </TouchableOpacity>
    </View>
  );
}

export function ScenarioListEntry({
  scenario,
  isFirst,
  isLast,
}: ScenarioListEntryProps) {
  const styles = useStyles();
  // const dispatch = useDispatch();

  const formattedDate = DateTime.fromISO(scenario.createdAt).toFormat(
    LIST_ENTRY_FORMAT,
  );

  const openScenario = () => {
    // dispatch(
    //   ScenariosScreenActions.OPEN_SCENARIO.START.create(scenario.id),
    // );
    console.log(`Open scenario ${scenario.title}`);
  };

  return (
    <SwipeableItem
      leftActions={<Actions scenario={scenario} />}
      threshold={styles.action.minWidth}>
      <TouchableOpacity
        style={[
          styles.container,
          isFirst && styles.borderTop,
          isLast && styles.borderBottom,
        ]}
        onPress={openScenario}
        activeOpacity={1}>
        <View style={styles.infoContainer}>
          <Typography.Header customStyles={styles.title}>
            {scenario.title}
          </Typography.Header>
          <Typography.Description customStyles={styles.date}>
            {formattedDate}
          </Typography.Description>
          <Typography.Description customStyles={styles.variant}>
            {textByVariant[scenario.variant]}
          </Typography.Description>
          <Typography.Description customStyles={styles.description}>
            {scenario.description}
          </Typography.Description>
        </View>
        <View style={styles.iconContainer}>
          <ChevronRightIcon {...styles.icon} />
        </View>
      </TouchableOpacity>
    </SwipeableItem>
  );
}
