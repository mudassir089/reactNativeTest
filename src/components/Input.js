import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');
export default function Input({type, secureText, placeholder, setState, icon}) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View
      style={{
        width: width / 1.2,
        height: height / 11,
        flexDirection: 'row',
        borderBottomColor: '#EDEEEE',
        borderBottomWidth: 1,
        alignItems: 'center',
        width: width / 1.2,
      }}>
      <MaterialCommunityIcons
        name={icon}
        color="#7E8895"
        size={22}
        style={{paddingRight: 10}}
      />
      <TextInput
        onChangeText={e => setState(e)}
        style={{
          color: '#7E8895',
          fontSize: 16,
          width: width / 1.4,
          paddingRight: 5,
        }}
        placeholder={placeholder}
        placeholderTextColor="#BBC0C6"
        autoCapitalize="none"
        keyboardType={type}
        secureTextEntry={showPassword && secureText}
      />
      {secureText && (
        <Ionicons
          onPress={() => setShowPassword(!showPassword)}
          name={showPassword ? 'eye-outline' : 'eye-off-outline'}
          color="#7E8895"
          size={22}
          style={{}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
