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

const SignUp = ({ navigation }) => {
  return (
    <Background>
      <StatusBar translucent backgroundColor="transparent" />
      <Container>
        <Image source={Logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
          />
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
          <SubmitButton onPress={() => {}}>Cadastrar</SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <SignLinkText>Já possuo conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignUp;
