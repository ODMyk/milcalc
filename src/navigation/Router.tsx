import {
  createNavigationContainerRef,
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppCommonActions} from '@store/modules/AppCommon/actions';
import React from 'react';
import {useDispatch} from 'react-redux';

import {screenOptions} from './options';
import {MainNavigator, MainStackParamList} from './Stacks/Main';

export type RootRouterParamList = {
  MainNavigator: NavigatorScreenParams<MainStackParamList>;
};

export const navigationRef =
  createNavigationContainerRef<RootRouterParamList>();

const RootRouterStack = createNativeStackNavigator<RootRouterParamList>();

export function Router() {
  const dispatch = useDispatch();

  const init = () => {
    dispatch(AppCommonActions.INIT.START.create());
  };

  return (
    <>
      <NavigationContainer ref={navigationRef} onReady={init}>
        <RootRouterStack.Navigator screenOptions={screenOptions}>
          <RootRouterStack.Screen
            name="MainNavigator"
            component={MainNavigator}
          />
        </RootRouterStack.Navigator>
      </NavigationContainer>
    </>
  );
}
