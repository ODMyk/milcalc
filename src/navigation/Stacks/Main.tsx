import {screenOptions} from '@navigation/options';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from '@screens/MainFlow/MainScreen';
import React from 'react';

import {MenuNavigator} from './Menu';

export type MainStackParamList = {
  Menu: undefined;
  Scenario: undefined;
};

export type EditScreenList = {
  [K in keyof MainStackParamList]: MainStackParamList[K] extends {
    isEdit: boolean;
  }
    ? K
    : never;
}[keyof MainStackParamList];

export type MainStackScreenList = {
  [K in keyof MainStackParamList]: MainStackParamList[K] extends undefined
    ? K
    : never;
}[keyof MainStackParamList];

const MainStack = createNativeStackNavigator<MainStackParamList>();

export function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={screenOptions} initialRouteName="Menu">
      <MainStack.Screen
        options={screenOptions}
        name="Menu"
        component={MenuNavigator}
      />
      <MainStack.Screen name="Scenario" component={MainScreen} />
    </MainStack.Navigator>
  );
}
