import {Overlay} from '@components/custom/Overlay';
import {DefaultScreen} from '@components/layout/DefaultScreen';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import MapView, {Region} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import {useScenario} from 'src/hooks/queries/scenarios/useScenario';

import {useStyles} from './styles';

export function MainScreen() {
  const styles = useStyles();
  const id = useSelector(currentScenarioIdSelector);
  const {isLoading, data} = useScenario(id);

  const dispatch = useDispatch();

  const onMoveEnd = (region: Region) => {
    dispatch(
      MainScreenActions.CHANGE_COORDINATES.START.create({
        longitude: region.longitude,
        latitude: region.latitude,
      }),
    );
  };

  return (
    <DefaultScreen>
      {isLoading && <ActivityIndicator size="large" animating />}
      {!isLoading && data && (
        <MapView
          mapType="terrain"
          style={styles.flex}
          initialRegion={data.initialRegion}
          loadingEnabled
          showsIndoors={false}
          toolbarEnabled={false}
          onRegionChangeComplete={onMoveEnd}
        />
      )}
      <Overlay />
    </DefaultScreen>
  );
}
