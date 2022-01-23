import React from 'react';
import {
  Image,
  Linking,
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
  const openMap = async () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${hotel.location.latitude},${hotel.location.longitude}&dir_action=navigate`,
    );
  };
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
      <Detail hotel={hotel} openMap={openMap} />
    </View>
  );
};

export default HotelDetailScreen;

const styles = StyleSheet.create({});
