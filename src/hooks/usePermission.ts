import {
  checkMultiple,
  Permission,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';

export enum PermissionCheckResult {
  GRANTED = 'granted',
  DENIED = 'denied',
  BLOCKED = 'blocked',
}

export function usePermission(permissions: Permission[]) {
  const checkWithRequest = async () => {
    const checkResult = await checkMultiple(permissions);
    const allGranted = Object.values(checkResult).every(
      value => value === RESULTS.GRANTED || value === RESULTS.LIMITED,
    );

    if (allGranted) {
      return PermissionCheckResult.GRANTED;
    }

    const requestResult = await requestMultiple(permissions);
    const statuses = Object.values(requestResult);
    return statuses.every(
      value => value === RESULTS.GRANTED || value === RESULTS.LIMITED,
    )
      ? PermissionCheckResult.GRANTED
      : statuses.some(value => value === RESULTS.BLOCKED)
      ? PermissionCheckResult.BLOCKED
      : PermissionCheckResult.DENIED;
  };

  return {
    checkWithRequest,
  };
}
