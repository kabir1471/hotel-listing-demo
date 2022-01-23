import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONT_SIZES,
  PADDINGS,
  SIZES,
} from '../../../../utills/constants';

export const modalStyles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: COLORS.WHITE,
    borderRadius: SIZES.BORDER_RADIUS,
    padding: PADDINGS.PADDING_MEDIUM,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    alignSelf: 'center',
    color: COLORS.PRIMARY,
  },
  buttonCOntainer: {
    alignItems: 'center',
  },
});
