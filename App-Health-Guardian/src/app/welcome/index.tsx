import React from 'react';
import { Container, Subtitle, Title, Button, ButtonText } from './styles'

const WelcomeScreen = () => {
  return (
    <Container>
      <Title>Welcome to Health-Guardian</Title>
      <Subtitle>Your Heart in Safe Hands</Subtitle>

      <Button>
        <ButtonText>Get Started</ButtonText>
      </Button>
    </Container>
  );
};

export default WelcomeScreen;
