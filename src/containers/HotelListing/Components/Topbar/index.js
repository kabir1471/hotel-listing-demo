import React from 'react';
import {Text, View} from 'react-native';
import {topbarStyles} from './index.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, FONT_SIZES} from '../../../../utills/constants';

const Topbar = props => {
  return (
    <View style={topbarStyles.container}>
      <Text style={topbarStyles.title}>{'Listing'}</Text>
      <AntDesign name="filter" size={FONT_SIZES.TITLE} color={COLORS.PRIMARY} />
    </View>
  );
};

export default Topbar;
