import {StyleSheet} from 'react-native';
import {COLORS, PADDINGS, SIZES} from '../../../../utills/constants';

export const loaderStyles = StyleSheet.create({
  container: {
    height: SIZES.CARD_HEIGHT,
    backgroundColor: COLORS.WHITE,
    marginTop: PADDINGS.PADDING_SMALL,
    borderRadius: SIZES.BORDER_RADIUS,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    display: 'flex',
    flexDirection: 'row',
  },
});
