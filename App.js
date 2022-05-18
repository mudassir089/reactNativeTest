import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
