import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '~/pages/SignIn/index';
import SignUp from '~/pages/SignUp/index';
import Dashboard from '~/pages/Dashboard/index';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

const AppStack = createBottomTabNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);
  return (
    <NavigationContainer>
      {signed ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
