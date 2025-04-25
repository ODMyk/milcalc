import {ModalWithBlur} from '@components/core/ModalWithBlur';
import {Typography} from '@components/core/Typography';
import {AppCommonActions} from '@store/modules/AppCommon/actions';
import {isLanguagePickerOpenedSelector} from '@store/modules/AppCommon/selectors';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AmericaFlagIcon} from 'src/assets/icons/AmericaFlagIcon';
import {UkraineFlagIcon} from 'src/assets/icons/UkraineFlagIcon';

import {LanguageEntry} from './components/LanguageEntry';
import {useStyles} from './styles';

const countryFlags: Record<string, {Icon: JSX.Element}> = {
  en: {Icon: <AmericaFlagIcon />},
  ua: {Icon: <UkraineFlagIcon />},
};

export function LanguagePicker() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isVisible = useSelector(isLanguagePickerOpenedSelector);
  const {t} = useTranslation();

  const close = useCallback(() => {
    dispatch(AppCommonActions.SET_LANGUAGE_PICKER_OPENED.START.create(false));
  }, [dispatch]);

  return (
    <ModalWithBlur onClose={close} isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Typography.Header customStyles={styles.title}>
            {t('languagePicker.title')}
          </Typography.Header>
          <View style={styles.listContainer}>
            {Object.entries(countryFlags).map(([lang, {Icon}]) => (
              <LanguageEntry Icon={Icon} lang={lang} key={lang} />
            ))}
          </View>
        </View>
      </View>
    </ModalWithBlur>
  );
}
