import {StyleSheet} from 'react-native';
import {COLORS, PADDINGS} from '../../../utills/constants';

export const ratingStyles = StyleSheet.create({
  ratingContainer: {flexDirection: 'row', alignItems: 'center'},
  ratingText: {
    color: COLORS.SECONDARY,
    marginLeft: PADDINGS.PADDING_HORIZANTAL_XS,
  },
});
