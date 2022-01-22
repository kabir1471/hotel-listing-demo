import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONT_SIZES,
  PADDINGS,
  SIZES,
} from '../../../../utills/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const hotelCardStyles = StyleSheet.create({
  container: {
    height: SIZES.CARD_HEIGHT,
    backgroundColor: COLORS.WHITE,
    marginTop: PADDINGS.PADDING_SMALL,
    borderRadius: SIZES.BORDER_RADIUS,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {height: '100%', flex: 0.4},
  content: {
    flex: 0.5,
    padding: PADDINGS.PADDING_SMALL,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: FONT_SIZES.SUB_TITLE,
    fontWeight: '600',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.LIGHT_TEXT,
    marginLeft: PADDINGS.PADDING_HORIZANTAL_XS,
  },

  iconContainer: {
    flex: 0.1,
  },
});
