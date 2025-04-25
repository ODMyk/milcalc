import {Typography} from '@components/core/Typography';
import {AppCommonActions} from '@store/modules/AppCommon/actions';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {useStyles} from './styles';

interface LanguageEntryProps {
  lang: string;
  Icon: JSX.Element;
}
export function LanguageEntry({Icon, lang}: LanguageEntryProps) {
  const {i18n, t} = useTranslation();
  const selected = i18n.language === lang;
  const styles = useStyles(selected);

  const dispatch = useDispatch();

  const changeLanguage = () => {
    i18n.changeLanguage(lang);
    dispatch(AppCommonActions.SET_LANGUAGE_PICKER_OPENED.START.create(false));
  };

  return (
    <TouchableOpacity
      key={lang}
      style={styles.container}
      onPress={changeLanguage}>
      {Icon}
      <Typography.Description customStyles={styles.text}>
        {t(`languagePicker.language.${lang}`)}
      </Typography.Description>
    </TouchableOpacity>
  );
}
