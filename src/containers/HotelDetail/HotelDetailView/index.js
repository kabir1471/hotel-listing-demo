import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {hotelDetailStyles} from './index.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZES} from '../../../utills/constants';
import Rating from '../../Components/Rating';
import BackgroundCarousel from '../components/carousel';
import Detail from '../components/Details';

const HotelDetailScreen = ({route, navigation}) => {
  const hotel = route.params;
  console.log('dasjkbfdkjsa ', hotel);
  const handleNavigate = () => navigation.goBack();
  return (
    <View style={hotelDetailStyles.container}>
      <TouchableOpacity
        style={hotelDetailStyles.backButton}
        onPress={handleNavigate}>
        <AntDesign
          name="arrowleft"
          size={FONT_SIZES.TITLE}
          color={COLORS.PRIMARY}
        />
      </TouchableOpacity>
      <BackgroundCarousel images={hotel.gallery} />
      <Detail hotel={hotel} />
    </View>
  );
};

export default HotelDetailScreen;

const styles = StyleSheet.create({});
