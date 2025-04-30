import {Button} from '@components/core/Button';
import {ModalWithBlur} from '@components/core/ModalWithBlur';
import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {geolocationPermissionModalOpenedSelector} from '@store/modules/ScenariosScreen/selectors';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {openSettings} from 'react-native-permissions';
import {useDispatch, useSelector} from 'react-redux';
import {useCurrentLocation} from 'src/hooks/useCurrentLocation';
import {PermissionCheckResult} from 'src/hooks/usePermission';

import {useStyles} from './styles';

export function GeolocationPermissionModal() {
  const styles = useStyles();
  const isVisible = useSelector(geolocationPermissionModalOpenedSelector);
  const {checkWithRequest} = useCurrentLocation();
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const openAppSettings = async () => {
    const res = await checkWithRequest();

    if (res === PermissionCheckResult.GRANTED) {
      dispatch(
        ScenariosScreenActions.SET_GEOLOCATION_PERMISSION_MODAL_OPENED.START.create(
          false,
        ),
      );
      return;
    }

    if (res === PermissionCheckResult.BLOCKED) {
      openSettings();
    }
  };

  return (
    <ModalWithBlur isVisible={isVisible}>
      <Typography.Header customStyles={styles.title}>
        {t('geolocationPermission.title')}
      </Typography.Header>
      <View style={styles.descriptionContainer}>
        <Typography.Description customStyles={styles.description}>
          {t('geolocationPermission.description')}
        </Typography.Description>
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={openAppSettings}>
          <Typography.Description>
            {t('geolocationPermission.apply')}
          </Typography.Description>
        </Button>
      </View>
    </ModalWithBlur>
  );
}
