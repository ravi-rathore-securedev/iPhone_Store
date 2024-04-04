import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Details from '../screens/Details';

export type AppStackParamList = {
  Home: undefined;
  Login: undefined;
  Details:{product: Product};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#f02e65', // Set header background color
        },
        headerTintColor: '#ffffff', // Set text color
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Details"  component={Details} />
    </Stack.Navigator>
  );
};
