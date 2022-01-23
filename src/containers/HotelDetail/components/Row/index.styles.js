import {StyleSheet, Text} from 'react-native';
import {COLORS, PADDINGS} from '../../../../utills/constants';

export const rowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: PADDINGS.PADDING_SMALL,
  },
  text: {color: COLORS.LIGHT_TEXT, marginLeft: PADDINGS.PADDING_SMALL},
});
