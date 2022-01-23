import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useHotelListing} from '..';
import {listingStyles} from './index.styles';
import Topbar from '../Components/Topbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import HotelCard from '../Components/HotelItem';
import {ROUTES} from '../../../utills/routes';
import Shimmer from '../Components/Shimmer';
import Filter from '../Components/Filter';

const HotelListingScreen = ({navigation}) => {
  const {hotels, error, loading} = useHotelListing();

  const handleHotelCardPress = hotel =>
    navigation.navigate(ROUTES.DETAIL, hotel);

  return (
    <SafeAreaView style={listingStyles.container}>
      <Topbar />
      {loading ? (
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={item => item.toString()}
          renderItem={() => <Shimmer />}
        />
      ) : (
        <FlatList
          data={hotels}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <HotelCard hotel={item} onHotelCardPress={handleHotelCardPress} />
          )}
        />
      )}
      {error && <Text>{'Some error Occured'}</Text>}
    </SafeAreaView>
  );
};

export default HotelListingScreen;

const styles = StyleSheet.create({});
