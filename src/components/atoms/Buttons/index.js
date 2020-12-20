import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const AppButton = ({ onPress, title, styleBtnContainer, styleBtnText }) => (
  <TouchableOpacity onPress={onPress} style={styleBtnContainer}>
    <Text style={styleBtnText}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;
