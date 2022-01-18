import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HotelDetail, HotelListing} from '../containers';
import {ROUTES} from './Routes';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HOTEL_LISTING} component={HotelListing} />
        <Stack.Screen name={ROUTES.HOTEL_DETAIL} component={HotelDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
