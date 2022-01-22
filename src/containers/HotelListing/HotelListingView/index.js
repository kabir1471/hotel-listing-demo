import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useHotelListing} from '..';
import {listingStyles} from './index.styles';
import Topbar from '../Components/Topbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import HotelCard from '../Components/HotelItem';
import {ROUTES} from '../../../utills/routes';

const HotelListingScreen = ({navigation}) => {
  const {hotels, error, loading} = useHotelListing();

  const handleHotelCardPress = hotel =>
    navigation.navigate(ROUTES.DETAIL, hotel);

  return (
    <SafeAreaView style={listingStyles.container}>
      <Topbar />
      <FlatList
        data={hotels}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <HotelCard hotel={item} onHotelCardPress={handleHotelCardPress} />
        )}
      />
    </SafeAreaView>
  );
};

export default HotelListingScreen;

const styles = StyleSheet.create({});
