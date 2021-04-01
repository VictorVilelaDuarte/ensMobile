import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <Title>Faça o login</Title>
      <Input name="idmens" icon="user" placeholder="Digite seu IDMENS" />
      <Input name="password" icon="lock" placeholder="Digite sua senha" />
      <Button
        onPress={() => {
          console.log('oi');
        }}
      >
        Entrar
      </Button>
    </Container>
  );
};

export default SignIn;
