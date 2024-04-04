import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Details from '../screens/Details';

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  Details:{product: Product};
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#f02e65', // Set header background color
        },
        headerTintColor: '#ffffff',
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home"  component={Home} />
      <Stack.Screen name="Details"  component={Details} />
    </Stack.Navigator>
  );
};
