import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../utills/constants';

export const hotelDetailStyles = StyleSheet.create({
  container: {height: hp('100%')},
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 50,
    height: 50,
    zIndex: 1000,
  },
});
