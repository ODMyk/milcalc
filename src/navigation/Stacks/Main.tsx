import {screenOptions} from '@navigation/options';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from '@screens/MainFlow/MainScreen';
import React from 'react';

export type MainStackParamList = {
  MainScreen: undefined;
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
    <MainStack.Navigator
      screenOptions={screenOptions}
      initialRouteName="MainScreen">
      <MainStack.Screen
        options={screenOptions}
        name="MainScreen"
        component={MainScreen}
      />
    </MainStack.Navigator>
  );
}
