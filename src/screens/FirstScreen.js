import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function FirstScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 20}}>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: 'grey',

          width: 350,
          alignSelf: 'center',
          borderRadius: 7,
        }}>
        <Text
          style={{
            color: '#123369',
            fontSize: 30,
            fontWeight: '600',
            marginBottom: 20,
          }}>
          Test for candidates
        </Text>
      </View>
      <View
        style={{
          flex: 0.7,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupScreen')}
          style={{
            backgroundColor: '#123369',
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            height: 70,
            borderRadius: 7,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>React Native Tasks</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            backgroundColor: '#123369',
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            height: 70,
            borderRadius: 7,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Task 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#123369',
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
            height: 70,
            borderRadius: 7,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Task 3</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
