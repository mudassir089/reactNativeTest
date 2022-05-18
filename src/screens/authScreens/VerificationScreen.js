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

import colors from '../../components/colors/colors';
import Input from '../../components/Input';
function VerificationScreen({navigation, route}) {
  const {state} = route.params;

  const {width, height} = Dimensions.get('window');
  const [code, setCode] = useState('');
  const handleVerify = ({}) => {
    if (code == state) {
      navigation.replace('HomeScreen');
    } else {
      alert('verification is wrong');
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
              User Verification
            </Text>

            <Input
              placeholder="Enter Verification Code"
              type={'number-pad'}
              icon="lock-outline"
              setState={setCode}
            />

            <Button text={'Verify'} handle={handleVerify} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default VerificationScreen;
