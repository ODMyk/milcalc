import {Typography} from '@components/core/Typography';
import {BottomTabDescriptor} from '@react-navigation/bottom-tabs/lib/typescript/commonjs/src/types';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {useStyles} from './styles';

interface TabButtonProps {
  descriptor: BottomTabDescriptor;
}

export function TabButton({descriptor}: TabButtonProps) {
  const {options, navigation, route} = descriptor;
  const label = (
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name
  ) as string;

  const onPress = () => {
    if (!navigation.isFocused()) {
      navigation.navigate(route.name, route.params);
    }
  };

  const styles = useStyles(navigation.isFocused());

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Typography.Description center customStyles={styles.label}>
        {label}
      </Typography.Description>
    </TouchableOpacity>
  );
}
