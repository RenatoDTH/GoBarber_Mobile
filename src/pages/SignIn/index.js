import React from 'react';
import { Text, StatusBar } from 'react-native';
import Background from '~/pages/components/Background';
import Input from '~/pages/components/Input';
import Button from '~/pages/components/Button';

// import { Container } from './styles';

const SignIn = () => {
  return (
    <Background>
      <StatusBar translucent backgroundColor="transparent" />
      <Text> Hello World </Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite o seu nome"
      />
      <Button>Entrar</Button>
    </Background>
  );
};

export default SignIn;
