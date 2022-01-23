import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {buttonStyles} from './index.styles';

const Button = props => {
  const {color, onPress, Icon, title} = props;
  return (
    <TouchableOpacity
      style={{
        ...buttonStyles.container,
        backgroundColor: color,
      }}
      onPress={onPress}>
      {Icon}
      <Text style={buttonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
