import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../utills/constants';

const DEVICE_WIDTH = Dimensions.get('window').width;

export const carouselStyles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
  },
  backgroundImage: {height: '100%', width: DEVICE_WIDTH},
  circleDiv: {
    position: 'absolute',
    bottom: '20%',
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  whiteCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 8,
    backgroundColor: COLORS.PRIMARY,
  },
});
