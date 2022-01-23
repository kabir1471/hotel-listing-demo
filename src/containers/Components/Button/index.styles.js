import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, FONT_SIZES, PADDINGS, SIZES} from '../../../utills/constants';

export const buttonStyles = StyleSheet.create({
  container: {
    height: hp('6%'),
    width: '70%',
    borderRadius: SIZES.BORDER_RADIUS,
    marginTop: PADDINGS.PADDING_MEDIUM,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.PADDING_MEDIUM,
  },
  buttonText: {
    fontSize: FONT_SIZES.SUB_TITLE,
    fontWeight: '500',
    color: COLORS.WHITE,
  },
});
