import React from 'react';
import {Text, View} from 'react-native';
import StarRating from 'react-native-star-rating';
import {COLORS} from '../../../utills/constants';
import {ratingStyles} from './index.styles';

const Rating = props => {
  const {userRating} = props;
  return (
    <View style={ratingStyles.ratingContainer}>
      <StarRating
        disabled={false}
        maxStars={5}
        fullStarColor={COLORS.SECONDARY}
        emptyStarColor={COLORS.SECONDARY}
        starSize={10}
        containerStyle={{justifyContent: 'flex-start'}}
        rating={userRating}
      />
      <Text style={ratingStyles.ratingText}>{userRating}</Text>
    </View>
  );
};

export default Rating;
