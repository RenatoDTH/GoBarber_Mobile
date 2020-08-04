import React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn/index';
import SignUp from '~/pages/SignUp/index';
import Dashboard from '~/pages/Dashboard/index';
import Profile from '~/pages/Profile/index';
import SelectProvider from '~/pages/New/SelectProvider/index';
import SelectDateTime from '~/pages/New/SelectDateTime/index';
import Confirm from '~/pages/New/Confirm/index';

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

const New = ({ navigation }) => (
  <AuthStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTransparent: true,
      headerTintColor: '#FFF',
      headerLeftContainerStyle: {
        marginLeft: 20,
        marginTop: 12,
      },
      headerTitleStyle: { marginTop: 10 },
    }}
  >
    <AuthStack.Screen
      name="SelectProvider"
      component={SelectProvider}
      options={{
        title: 'Selecione o prestador',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          >
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        ),
      }}
    />
    <AuthStack.Screen
      name="SelectDateTime"
      component={SelectDateTime}
      options={{
        title: 'Selecione o horário',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectProvider');
            }}
          >
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        ),
      }}
    />
    <AuthStack.Screen
      name="Confirm"
      component={Confirm}
      options={{
        title: 'Confirmar agendamento',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectDateTime');
            }}
          >
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        ),
      }}
    />
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
      name="New"
      component={New}
      options={{
        tabBarLabel: 'Agendar',
        tabBarVisible: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="add-circle-outline" color={color} size={size} />
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
