import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import colors from './colors/colors';

const {width, height} = Dimensions.get('screen');

export default function Button({text, handle}) {
  return (
    <TouchableOpacity
      onPress={handle}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: height / 20,
        height: height / 14,
        borderRadius: 7,
        backgroundColor: colors.secondary,
      }}>
      <Text style={{color: '#FFF', fontSize: 18}}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
