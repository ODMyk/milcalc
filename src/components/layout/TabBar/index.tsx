import {Typography} from '@components/core/Typography';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {AppCommonActions} from '@store/modules/AppCommon/actions';
import {themeSelector} from '@store/modules/AppCommon/selectors';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {MoonIcon} from 'src/assets/icons/MoonIcon';
import {SunIcon} from 'src/assets/icons/SunIcon';

import {TabButton} from './components/TabButton';
import {useStyles} from './styles';

export function TabBar({descriptors, state}: BottomTabBarProps) {
  const styles = useStyles();
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const changeTheme = () => {
    dispatch(AppCommonActions.SWITCH_THEME.START.create());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Typography.Header center>MilCalc</Typography.Header>
      <View style={styles.tabsContainer}>
        {state.routes.map(route => (
          <TabButton key={route.key} descriptor={descriptors[route.key]} />
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={changeTheme}>
          {theme === 'dark' ? (
            <SunIcon {...styles.buttonIcon} />
          ) : (
            <MoonIcon {...styles.buttonIcon} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
