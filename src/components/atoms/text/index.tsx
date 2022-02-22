import React from 'react';
import { Text as RNText } from 'react-native';

import { TextProps, TextType } from './types';
import styles from './styles';

export const Text = ({
  children,
  style,
  type = TextType.body,
  ...rest
}: TextProps) => (
  <RNText style={[styles.text, styles[type], style]} {...rest}>
    {children}
  </RNText>
);

export * from './types';
