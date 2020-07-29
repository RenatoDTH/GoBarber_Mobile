import React from 'react';
import { Image, StatusBar } from 'react-native';
import Logo from '~/assets/logo.png';

import Background from '~/pages/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignIn = ({ navigation }) => {
  return (
    <Background>
      <StatusBar translucent backgroundColor="transparent" />
      <Container>
        <Image source={Logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignIn;
