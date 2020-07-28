import React from 'react';
import { Text, StatusBar } from 'react-native';
import Background from '~/pages/components/Background';

// import { Container } from './styles';

const SignIn = () => {
  return (
    <Background>
      <StatusBar translucent backgroundColor="transparent" />
      <Text> Hello World </Text>
    </Background>
  );
};

export default SignIn;
