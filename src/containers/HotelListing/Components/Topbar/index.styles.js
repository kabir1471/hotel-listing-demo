import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, FONT_SIZES, PADDINGS} from '../../../../utills/constants';

export const topbarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.PADDING_SMALL,
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    color: COLORS.PRIMARY,
    fontWeight: '600',
    paddingVertical: PADDINGS.PADDING_MEDIUM,
  },
});
