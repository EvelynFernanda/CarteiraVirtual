import { StyleSheet } from 'react-native';
import { NEUTRAL_BLACK } from 'styles/colors';
import {
  FONT_SIZE_10,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_24,
  FONT_SIZE_36,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_SEMIBOLD,
  INTER_REGULAR,
  INTER_SEMIBOLD,
  LINE_HEIGHT_12,
  LINE_HEIGHT_18,
  LINE_HEIGHT_21,
  LINE_HEIGHT_24,
  LINE_HEIGHT_27,
  LINE_HEIGHT_32,
  LINE_HEIGHT_41,
  LINE_HEIGHT_45,
} from 'styles/typography';
import { TextType } from './types';

export default StyleSheet.create({
  text: {
    fontFamily: INTER_REGULAR,
    color: NEUTRAL_BLACK,
  },
  [TextType.h1]: {
    fontFamily: INTER_SEMIBOLD,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    fontSize: FONT_SIZE_36,
    lineHeight: LINE_HEIGHT_41,
    letterSpacing: -2,
  },
  [TextType.h2]: {
    fontFamily: INTER_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: FONT_SIZE_36,
    lineHeight: LINE_HEIGHT_45,
    letterSpacing: -2,
  },
  [TextType.h3]: {
    fontFamily: INTER_SEMIBOLD,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    fontSize: FONT_SIZE_24,
    lineHeight: LINE_HEIGHT_32,
    letterSpacing: -2,
  },
  [TextType.subtitle]: {
    fontFamily: INTER_SEMIBOLD,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    fontSize: FONT_SIZE_18,
    lineHeight: LINE_HEIGHT_27,
  },
  [TextType.button]: {
    fontFamily: INTER_SEMIBOLD,
    fontWeight: FONT_WEIGHT_SEMIBOLD,
    fontSize: FONT_SIZE_18,
    lineHeight: LINE_HEIGHT_27,
  },
  [TextType.body]: {
    fontFamily: INTER_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: FONT_SIZE_16,
    lineHeight: LINE_HEIGHT_24,
  },
  [TextType.body_small]: {
    fontFamily: INTER_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: FONT_SIZE_14,
    lineHeight: LINE_HEIGHT_21,
  },
  [TextType.caption]: {
    fontFamily: INTER_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: FONT_SIZE_12,
    lineHeight: LINE_HEIGHT_18,
  },
  [TextType.footer]: {
    fontFamily: INTER_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR,
    fontSize: FONT_SIZE_10,
    lineHeight: LINE_HEIGHT_12,
  },
});
