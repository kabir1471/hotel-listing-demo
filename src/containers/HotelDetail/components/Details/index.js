import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Rating from '../../../Components/Rating';
import {detailStyles} from './index.styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONT_SIZES, PADDINGS} from '../../../../utills/constants';
import Row from '../Row';
import Button from '../../../Components/Button';

const Detail = props => {
  const {hotel, openMap} = props;
  return (
    <View style={detailStyles.content}>
      <View style={detailStyles.starContainer}>
        <Text style={detailStyles.starText}>{hotel.stars}</Text>
        <Entypo
          name="star"
          color={COLORS.PRIMARY}
          size={FONT_SIZES.SUB_TITLE}
        />
      </View>
      <View style={detailStyles.headContainer}>
        <View style={detailStyles.titleContainer}>
          <View>
            <Text style={detailStyles.titleText} numberOfLines={1}>
              {hotel.name}
            </Text>
            <Rating userRating={hotel.userRating} />
          </View>
        </View>
        <View style={detailStyles.price}>
          <Text style={detailStyles.titleText}>
            {hotel.currency} {hotel.price}
          </Text>
          <Text style={detailStyles.subtitleText}>{'per night'}</Text>
        </View>
      </View>
      <Row
        Icon={
          <Entypo
            name="location-pin"
            color={COLORS.PRIMARY}
            size={FONT_SIZES.SUB_TITLE}
          />
        }
        text={hotel.location.address + ', ' + hotel.location.city}
      />
      <Row
        Icon={
          <Entypo
            name="email"
            color={COLORS.PRIMARY}
            size={FONT_SIZES.SUB_TITLE}
          />
        }
        text={hotel.contact.email}
      />
      <Row
        Icon={
          <Entypo
            name="phone"
            color={COLORS.PRIMARY}
            size={FONT_SIZES.SUB_TITLE}
          />
        }
        text={hotel.contact.phoneNumber}
      />
      <Row
        Icon={
          <Ionicon
            name="enter"
            color={COLORS.PRIMARY}
            size={FONT_SIZES.SUB_TITLE}
          />
        }
        text={hotel.checkIn.from + ' - ' + hotel.checkIn.to}
      />
      <Row
        Icon={
          <Ionicon
            name="exit"
            color={COLORS.PRIMARY}
            size={FONT_SIZES.SUB_TITLE}
          />
        }
        text={hotel.checkOut.from + ' - ' + hotel.checkOut.to}
      />
      <View style={detailStyles.buttonContainer}>
        <Button
          color={COLORS.PRIMARY}
          title={'See on map'}
          Icon={
            <Entypo
              name="location-pin"
              color={COLORS.WHITE}
              size={FONT_SIZES.TITLE}
            />
          }
          onPress={openMap}
        />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
