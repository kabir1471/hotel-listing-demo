import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZES, SIZES} from '../../../../utills/constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const detailStyles = StyleSheet.create({
  content: {
    height: SIZES.DETAILS_CONTAINER,
    backgroundColor: COLORS.WHITE,
    marginTop: hp('-5%'),
    borderTopEndRadius: hp('4%'),
    borderTopStartRadius: hp('4%'),
    paddingHorizontal: wp('4%'),
    paddingTop: hp('6%'),
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: FONT_SIZES.SUB_TITLE,
    color: COLORS.PRIMARY,
    fontWeight: '700',
  },
  subtitleText: {
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.LIGHT_TEXT,
  },
});
