import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn/index';
import SignUp from '~/pages/SignUp/index';
import Dashboard from '~/pages/Dashboard/index';
import Profile from '~/pages/Profile/index';

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
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
      style: {
        backgroundColor: '#8d41a8',
      },
      labelStyle: {
        fontSize: 12,
        marginBottom: 4,
      },
    }}
  >
    <AppStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'Agendamento',
        tabBarIcon: ({ color, size }) => (
          <Icon name="event" color={color} size={size} />
        ),
      }}
    />
    <AppStack.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Meu perfil',
        tabBarIcon: ({ color, size }) => (
          <Icon name="person" color={color} size={size} />
        ),
      }}
    />
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
