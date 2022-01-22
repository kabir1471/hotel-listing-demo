import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {hotelCardStyles} from './index.styles';
import StarRating from 'react-native-star-rating';
import {COLORS, FONT_SIZES} from '../../../../utills/constants';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';

const HotelCard = props => {
  const {hotel, onHotelCardPress} = props;
  return (
    <TouchableOpacity
      style={hotelCardStyles.container}
      onPress={() => onHotelCardPress(hotel)}>
      <View style={hotelCardStyles.imageContainer}>
        <Image source={{uri: hotel.gallery[0]}} style={hotelCardStyles.image} />
      </View>
      <View style={hotelCardStyles.content}>
        <Text style={hotelCardStyles.cardTitle} numberOfLines={1}>
          {hotel.name}
        </Text>
        <View style={hotelCardStyles.locationContainer}>
          <Icon
            name="location-pin"
            color={COLORS.LIGHT_TEXT}
            size={FONT_SIZES.MEDIUM}
          />
          <Text numberOfLines={1} style={hotelCardStyles.locationText}>
            {hotel.location.address}
          </Text>
        </View>
        <View style={hotelCardStyles.locationContainer}>
          <FontAwsome5
            name="city"
            color={COLORS.LIGHT_TEXT}
            size={FONT_SIZES.MEDIUM}
          />
          <Text numberOfLines={1} style={hotelCardStyles.locationText}>
            {hotel.location.city}
          </Text>
        </View>
        <View>
          <Text style={{...hotelCardStyles.cardTitle, color: COLORS.PRIMARY}}>
            {hotel.currency} {hotel.price}
          </Text>
          <Text
            numberOfLines={1}
            style={{...hotelCardStyles.locationText, marginLeft: 0}}>
            {'per night'}
          </Text>
        </View>
        <View style={hotelCardStyles.ratingContainer}>
          <StarRating
            disabled={false}
            maxStars={5}
            fullStarColor={COLORS.SECONDARY}
            emptyStarColor={COLORS.SECONDARY}
            starSize={10}
            containerStyle={{justifyContent: 'flex-start'}}
            rating={hotel.userRating}
          />
          <Text style={hotelCardStyles.ratingText}>{hotel.userRating}</Text>
        </View>
      </View>
      <View style={hotelCardStyles.iconContainer}></View>
    </TouchableOpacity>
  );
};

export default HotelCard;
