import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HotelDetailScreen, HotelListingScreen} from '../containers';
import {ROUTES} from '../utills/routes';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LISTING} component={HotelListingScreen} />
        <Stack.Screen name={ROUTES.DETAIL} component={HotelDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
