import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BackgroundCarousel from './components/carousel';
import {hotelDetailStyles} from './index.styles';

const HotelDetailScreen = ({route, navigation}) => {
  const hotel = route.params;
  console.log('dasjkbfdkjsa ', hotel);
  return (
    <View style={hotelDetailStyles.container}>
      <BackgroundCarousel images={hotel.gallery} />
      <View style={hotelDetailStyles.content}></View>
    </View>
  );
};

export default HotelDetailScreen;

const styles = StyleSheet.create({});
