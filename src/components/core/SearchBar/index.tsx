import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {searchStringSelector} from '@store/modules/ScenariosScreen/selectors';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {CrossIcon} from 'src/assets/icons/CrossIcon';
import {SearchIcon} from 'src/assets/icons/SearchIcon';

import {useStyles} from './styles';

export function SearchBar() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const handleInput = (text: string) => {
    dispatch(ScenariosScreenActions.SET_SEARCH.START.create(text));
  };

  const clearInput = () => {
    handleInput('');
  };

  const value = useSelector(searchStringSelector);

  return (
    <View style={styles.container}>
      <SearchIcon {...styles.icon} />
      <TextInput
        placeholder={t('searchBar.placeholder')}
        style={styles.input}
        placeholderTextColor={styles.placeholder.color}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
        underlineColorAndroid="transparent"
        onChangeText={handleInput}
        value={value}
      />
      {value && (
        <TouchableOpacity onPress={clearInput}>
          <CrossIcon {...styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
}
