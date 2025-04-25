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
  IncomingNavigator: undefined;
};

export type ScenariosStackParamList = {
  Scenarios: undefined;
};

export type IncomingStackParamList = {
  Incoming: undefined;
};

const MenuTabsNaviagor = createBottomTabNavigator<MenuTabsParamList>();

const ScenariosTabStack = createNativeStackNavigator<ScenariosStackParamList>();

const IncomingTabStack = createNativeStackNavigator<IncomingStackParamList>();

const ScenariosStack = () => {
  return (
    <ScenariosTabStack.Navigator screenOptions={screenOptions}>
      <ScenariosTabStack.Screen name="Scenarios" component={Scenarios} />
    </ScenariosTabStack.Navigator>
  );
};

const IncomingStack = () => {
  return (
    <IncomingTabStack.Navigator screenOptions={screenOptions}>
      <IncomingTabStack.Screen name="Incoming" component={Saved} />
    </IncomingTabStack.Navigator>
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
        name="IncomingNavigator"
        component={IncomingStack}
        options={{tabBarLabel: 'Incoming'}}
      />
    </MenuTabsNaviagor.Navigator>
  );
};

const CustomTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;
