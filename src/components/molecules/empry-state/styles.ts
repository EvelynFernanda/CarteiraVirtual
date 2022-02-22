import { StyleSheet } from 'react-native';
import { BLACK } from 'styles/colors';
import { INTER_REGULAR, FONT_SIZE_18 } from 'styles/typography';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 50,
  },
  text: {
    fontFamily: INTER_REGULAR,
    fontSize: FONT_SIZE_18,
    color: BLACK,
    textAlign: 'center',
    marginTop: 24,
  },
});
