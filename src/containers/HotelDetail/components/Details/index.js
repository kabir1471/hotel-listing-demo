import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Rating from '../../../Components/Rating';
import {detailStyles} from './index.styles';

const Detail = props => {
  const {hotel} = props;
  return (
    <View style={detailStyles.content}>
      <View style={detailStyles.headContainer}>
        <View style={detailStyles.titleContainer}>
          <Text style={detailStyles.titleText}>{hotel.name}</Text>
          <Rating userRating={hotel.userRating} />
        </View>
        <View>
          <Text style={detailStyles.titleText}>
            {hotel.currency} {hotel.price}
          </Text>
          <Text style={detailStyles.subtitleText}>{'per night'}</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
