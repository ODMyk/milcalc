import {TabBar} from '@components/layout/TabBar';
import {screenOptions, tabOptions} from '@navigation/options';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Saved} from '@screens/MainFlow/Saved';
import {Scenarios} from '@screens/MainFlow/Scenarios';
import React from 'react';

export type MenuTabsParamList = {
  ScenariosNavigator: undefined;
  SavedNavigator: undefined;
};

export type ScenariosStackParamList = {
  Scenarios: undefined;
};

export type SavedStackParamList = {
  Saved: undefined;
};

const MenuTabsNaviagor = createBottomTabNavigator<MenuTabsParamList>();

const ScenariosTabStack = createNativeStackNavigator<ScenariosStackParamList>();

const SavedTabStack = createNativeStackNavigator<SavedStackParamList>();

const ScenariosStack = () => {
  return (
    <ScenariosTabStack.Navigator screenOptions={screenOptions}>
      <ScenariosTabStack.Screen name="Scenarios" component={Scenarios} />
    </ScenariosTabStack.Navigator>
  );
};

const SavedStack = () => {
  return (
    <SavedTabStack.Navigator screenOptions={screenOptions}>
      <SavedTabStack.Screen name="Saved" component={Saved} />
    </SavedTabStack.Navigator>
  );
};

export const MenuNavigator = () => {
  return (
    <MenuTabsNaviagor.Navigator
      screenOptions={tabOptions}
      tabBar={CustomTabBar}>
      <MenuTabsNaviagor.Screen
        name="ScenariosNavigator"
        component={ScenariosStack}
        options={{tabBarLabel: 'Scenarios'}}
      />
      <MenuTabsNaviagor.Screen
        name="SavedNavigator"
        component={SavedStack}
        options={{tabBarLabel: 'Saved'}}
      />
    </MenuTabsNaviagor.Navigator>
  );
};

const CustomTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;
