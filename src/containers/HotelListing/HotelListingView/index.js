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
  const [modal, setModal] = useState(false);

  const handleHotelCardPress = hotel =>
    navigation.navigate(ROUTES.DETAIL, hotel);

  const handleFilterClick = () => setModal(true);

  const handleCloseModal = () => setModal(false);

  console.log(loading);

  return (
    <SafeAreaView style={listingStyles.container}>
      {modal && <Filter closeModal={handleCloseModal} />}
      <Topbar onFilterClick={handleFilterClick} />
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
    </SafeAreaView>
  );
};

export default HotelListingScreen;

const styles = StyleSheet.create({});
