import React from 'react';
import {Text, TextStyle} from 'react-native';

import {useStyles} from './styles';

const maxFontSizeMultiplier = 1.3;

interface TextIE {
  customStyles?: TextStyle | false;
  children: React.ReactNode;
  center?: boolean;
  dark?: boolean;
  numberOfLines?: number;
}

const DefaultText = ({
  children,
  customStyles,
  center,
  numberOfLines,
}: TextIE) => {
  const styles = useStyles();

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.text, center && styles.center, customStyles]}
      ellipsizeMode="tail"
      lineBreakMode="tail"
      maxFontSizeMultiplier={maxFontSizeMultiplier}>
      {children}
    </Text>
  );
};

const Header = ({children, customStyles, center}: TextIE) => {
  const styles = useStyles();

  return (
    <Text
      style={[styles.header, center && styles.center, customStyles]}
      maxFontSizeMultiplier={maxFontSizeMultiplier}>
      {children}
    </Text>
  );
};

const Description = ({children, customStyles, center}: TextIE) => {
  const styles = useStyles();

  return (
    <Text
      style={[styles.description, center && styles.center, customStyles]}
      maxFontSizeMultiplier={maxFontSizeMultiplier}>
      {children}
    </Text>
  );
};

const Elipses = ({children, customStyles, center}: TextIE) => {
  const styles = useStyles();

  return (
    <Text
      style={[styles.text, center && styles.center, customStyles]}
      numberOfLines={1}
      ellipsizeMode="tail"
      maxFontSizeMultiplier={maxFontSizeMultiplier}>
      {children}
    </Text>
  );
};

const Link = ({
  children,
  customStyles,
  handlePress,
  center,
}: TextIE & {handlePress?: () => void}) => {
  const styles = useStyles();

  return (
    <Text
      onPress={handlePress}
      style={[styles.link, center && styles.center, customStyles]}
      maxFontSizeMultiplier={maxFontSizeMultiplier}>
      {children}
    </Text>
  );
};

const Label = React.memo(
  ({
    children,
    focused,

    customStyles,
  }: TextIE & {focused?: boolean}) => {
    const styles = useStyles();
    return (
      <Text
        style={[
          styles.label,
          focused && styles.label_focused,
          customStyles && customStyles,
        ]}
        maxFontSizeMultiplier={maxFontSizeMultiplier}>
        {children}
      </Text>
    );
  },
);

export const Typography = {
  Text: DefaultText,
  Header,
  Elipses,
  Description,
  Link,
  Label,
};
