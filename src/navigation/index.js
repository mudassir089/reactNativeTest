import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import SignupScreen from '../screens/authScreens/SignupScreen';
import LoginScreen from '../screens/authScreens/LoginScreen';
import VerificationScreen from '../screens/authScreens/VerificationScreen';
import HomeScreen from '../screens/homeScreens/HomeScreen';
import ResturantsDetails from '../screens/homeScreens/ResturantsDetails';

const Stack = createStackNavigator();

function MainNavigation(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ResturantsDetails" component={ResturantsDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default MainNavigation;
