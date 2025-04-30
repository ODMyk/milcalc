import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {isIOS} from '@services/platform';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {PERMISSIONS} from 'react-native-permissions';
import {useDispatch} from 'react-redux';

import {PermissionCheckResult, usePermission} from './usePermission';

const PERMISSIONS_MAP = Object.freeze({
  ANDROID: [
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
  ],
  IOS: [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, PERMISSIONS.IOS.LOCATION_ALWAYS],
});

export function useCurrentLocation() {
  const permissions = PERMISSIONS_MAP[isIOS ? 'IOS' : 'ANDROID'];
  const {checkWithRequest} = usePermission(permissions);
  const dispatch = useDispatch();

  (async () => {
    const result = await checkWithRequest();

    if (result === PermissionCheckResult.BLOCKED) {
      dispatch(
        ScenariosScreenActions.SET_GEOLOCATION_PERMISSION_MODAL_OPENED.START.create(
          true,
        ),
      );
      return;
    }

    dispatch(
      ScenariosScreenActions.SET_GEOLOCATION_PERMISSION_MODAL_OPENED.START.create(
        false,
      ),
    );
  })();

  const getLocation = async (): Promise<GeolocationResponse> => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        pos => {
          resolve(pos);
        },
        err => {
          reject(err);
        },
      );
    });
  };

  return {
    getLocation,
    checkWithRequest,
  };
}
