import {StyleSheet} from 'react-native';
import {SIZES} from '../../../utills/constants';

export const imageStyles = StyleSheet.create({
  activity: {position: 'absolute', left: '45%', top: '45%', zIndex: 1000},
  image: {height: '100%', width: '100%', borderRadius: SIZES.BORDER_RADIUS},
});
