import { TextProps as RNTextProps } from 'react-native';

export enum TextType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  subtitle = 'subtitle',
  button = 'button',
  body = 'body',
  body_small = 'body_small',
  caption = 'caption',
  footer = 'footer',
}

export interface TextProps extends RNTextProps {
  type?: TextType;
  underline?: boolean;
}
