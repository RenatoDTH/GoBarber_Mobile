import React from 'react';
import { Text, StatusBar } from 'react-native';
import Background from '~/pages/components/Background';
// import { Container } from './styles';

const SignUp = () => {
  return (
    <Background>
      <StatusBar translucent backgroundColor="transparent" />
      <Text>SignUp</Text>
    </Background>
  );
};

export default SignUp;
