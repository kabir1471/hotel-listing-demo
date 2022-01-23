import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONT_SIZES,
  PADDINGS,
  SIZES,
} from '../../../../utills/constants';
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
    paddingTop: hp('3%'),
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('15%'),
    marginBottom: PADDINGS.PADDING_MEDIUM,
    borderColor: COLORS.PRIMARY,
    borderWidth: 0.5,
    borderRadius: SIZES.BORDER_RADIUS,
    padding: PADDINGS.PADDING_SMALL,
  },
  starText: {
    fontSize: FONT_SIZES.SUB_TITLE,
    color: COLORS.PRIMARY,
  },
  titleContainer: {flex: 0.7},
  titleText: {
    fontSize: FONT_SIZES.SUB_TITLE,
    color: COLORS.PRIMARY,
    fontWeight: '700',
  },
  price: {flex: 0.2},
  subtitleText: {
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.LIGHT_TEXT,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
