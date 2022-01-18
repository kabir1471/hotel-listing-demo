import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useHotelListing} from '..';

const HotelListingScreen = () => {
  const {hotels, error, loading} = useHotelListing();
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default HotelListingScreen;

const styles = StyleSheet.create({});
