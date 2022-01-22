import React from 'react';
import {Text, View} from 'react-native';
import {topbarStyles} from './index.styles';

const Topbar = () => {
  return (
    <View style={topbarStyles.container}>
      <Text style={topbarStyles.title}>{'Listing'}</Text>
    </View>
  );
};

export default Topbar;
