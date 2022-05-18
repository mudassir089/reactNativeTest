import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../components/colors/colors';
import Input from '../../components/Input';
function LoginScreen({navigation}) {
  const {width, height} = Dimensions.get('window');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const saveEmail = await AsyncStorage.getItem('email');
    const savePassword = await AsyncStorage.getItem('password');
    if (email == saveEmail && password == savePassword) {
      navigation.replace('HomeScreen');
    } else {
      alert('wrong email and password');
    }
  };
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{
          backgroundColor: '#FFF',
          flex: 1,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
            height: height / 2.6,
            flex: 1,
          }}>
          <Image
            source={require('../../assets/signup.png')}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
        <View style={{flex: 0.5}}>
          <View
            style={{
              width: width / 1.2,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 25,
                color: colors.secondary,
                letterSpacing: 1,
                marginVertical: 10,
              }}>
              Sign in
            </Text>

            <Input
              placeholder="Enter Email"
              type="email-address"
              icon="email"
              setState={setEmail}
            />
            <Input
              placeholder="Enter Password"
              secureText={true}
              icon="lock-outline"
              setState={setPassword}
            />

            <Button text={'Login'} handle={handleSignup} />

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                height: height / 30,
              }}>
              <Text style={{color: colors.grey}}>
                Create a new account ? &nbsp;
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignupScreen')}>
                <Text
                  style={{
                    color: colors.secondary,
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  Register now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
