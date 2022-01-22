import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {checkImageUrl} from '../../../services';
import {COLORS} from '../../../utills/constants';
import {imageStyles} from './index.styles';

const HotelImage = props => {
  const {imageLink} = props;
  const [image, setImage] = useState(imageLink);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkImage();
  }, []);

  const checkImage = async () => {
    await checkImageUrl(image, setImage);
  };

  return (
    <>
      {loading && (
        <ActivityIndicator
          color={COLORS.PRIMARY}
          style={imageStyles.activity}
        />
      )}
      <Image
        source={{uri: image}}
        style={imageStyles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </>
  );
};

export default HotelImage;
