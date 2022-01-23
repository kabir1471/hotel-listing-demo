import React from 'react';
import {Text, View} from 'react-native';
import {rowStyles} from './index.styles';

const Row = props => {
  const {Icon, text} = props;
  return (
    <View style={rowStyles.container}>
      {Icon}
      <Text style={rowStyles.text}>{text}</Text>
    </View>
  );
};

export default Row;
