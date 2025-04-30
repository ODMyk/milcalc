import {Typography} from '@components/core/Typography';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';

import {Tab} from './components/Tab';
import {useStyles} from './styles';

interface TabsProps<T extends {label?: string; id: string}> {
  initialTab?: string;
  children: React.ReactElement<T>[] | React.ReactElement<T>;
}

export function Tabs<T extends {label?: string; id: string}>({
  initialTab = '',
  children: childrenProp,
}: TabsProps<T>) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const children = Array.isArray(childrenProp) ? childrenProp : [childrenProp];
  const styles = useStyles();

  return (
    <>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {children.map(tab => (
          <TouchableOpacity
            key={tab.props.id}
            style={styles.tab}
            onPress={() => setActiveTab(tab.props.id)}>
            <Typography.Description
              customStyles={{
                ...styles.description,
                ...(tab.props.id === activeTab ? styles.activeDescription : {}),
              }}>
              {tab.props.label ?? tab.props.id}
            </Typography.Description>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.content}>
        {children.find(tab => tab.props.id === activeTab)}
      </View>
    </>
  );
}

Tabs.Tab = Tab;
