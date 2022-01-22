import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../utills/constants';

export const hotelDetailStyles = StyleSheet.create({
  container: {height: hp('100%')},
  content: {
    height: hp('50%'),
    backgroundColor: COLORS.WHITE,
    marginTop: hp('-5%'),
    borderTopEndRadius: hp('4%'),
    borderTopStartRadius: hp('4%'),
  },
});
