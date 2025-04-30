import {GeolocationResponse} from '@react-native-community/geolocation';
import {DatabaseService} from '@services/database';
import {getRegionForPoints} from '@services/geo';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {useQuery} from '@tanstack/react-query';
import {Region} from 'react-native-maps';
import {useDispatch} from 'react-redux';
import {useCurrentLocation} from 'src/hooks/useCurrentLocation';
import {ScenarioWithDetails} from 'src/types/Scenario';

async function getScenario(
  id: string,
  getLocation: () => Promise<GeolocationResponse>,
  onFetched: (scenario: ScenarioWithDetails) => void,
): Promise<{scenario: ScenarioWithDetails; initialRegion: Region}> {
  const result = await Promise.all([
    DatabaseService.getScenarioById(id),
    DatabaseService.getScenarioDetails(id),
  ]);

  const scenario = {...result[0], ...result[1]};
  const input = [
    ...scenario.anglesPrimary.map(a => ({x: a.targetX, y: a.targetY})),
    ...scenario.anglesSecondary.map(a => ({x: a.targetX, y: a.targetY})),
    ...scenario.calibrationMeters.map(a => [
      {x: a.targetX, y: a.targetY},
      {x: a.actualX, y: a.actualY},
    ]),
    ...scenario.calibrationMils.map(a => [
      {x: a.targetX, y: a.targetY},
      {x: a.actualX, y: a.actualY},
    ]),
  ].flat();

  const location = await getLocation();

  const initialRegion =
    // TODO: need to fix initial region (maybe it's a bug caused by dummy data)
    // input.length > 0
    false
      ? getRegionForPoints(input, scenario.zone)
      : {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };

  onFetched(scenario);

  return {
    scenario,
    initialRegion,
  };
}

export function useScenario(id: string) {
  const {getLocation} = useCurrentLocation();
  const dispatch = useDispatch();

  const onFetched = (scenario: ScenarioWithDetails) => {
    dispatch(MainScreenActions.SET_CURRENT_ZONE.START.create(scenario.zone));
    dispatch(MainScreenActions.SET_PREV_ZONE.START.create(scenario.zone));
  };

  return useQuery({
    queryKey: ['scenario', id],
    queryFn: () => getScenario(id, getLocation, onFetched),
  });
}
