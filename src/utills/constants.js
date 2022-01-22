import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const COLORS = {
  BACKGROUND: '#f2f2f2',
  PRIMARY: '#08459f',
  SECONDARY: '#FCB80B',
  WHITE: '#fff',
  LIGHT_TEXT: '#c1c1c1',
};

export const FONT_SIZES = {
  TITLE: hp('3%'),
  SUB_TITLE: hp('2%'),
  MEDIUM: hp('1.8%'),
};

export const SIZES = {
  CARD_HEIGHT: 150,
  BORDER_RADIUS: hp('1%'),
};

export const PADDINGS = {
  PADDING_HORIZANTAL_XS: wp('1%'),
  PADDING_SMALL: hp('1%'),
  PADDING_MEDIUM: hp('2%'),
};
