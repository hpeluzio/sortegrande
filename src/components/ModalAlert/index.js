import React, { useCallback, useEffect, useState } from 'react';

import {
  MainContainer,
  Container,
  TittleContainer,
  Tittle,
  MessageContainer,
  Message,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

export default function ModalAlert({
  show = false,
  tittle = 'Tittle',
  message = 'Message',
  buttonText = 'Ok',
  close,
  action = () => {},
}) {
  const onPressButton = useCallback(() => {
    close(false);
    action();
  }, [close, action]);

  if (show) {
    return (
      <MainContainer>
        <Container>
          <TittleContainer>
            <Tittle>{tittle}</Tittle>
          </TittleContainer>
          <MessageContainer>
            <Message>{message}</Message>
          </MessageContainer>
          <ButtonContainer>
            <Button>
              <ButtonText onPress={onPressButton}>{buttonText}</ButtonText>
            </Button>
          </ButtonContainer>
        </Container>
      </MainContainer>
    );
  } else {
    return null;
  }
}
