import React from 'react';

import {
  Container,
  InputView,
  LabelView,
  LabelText,
  MaskedText,
  TextInput,
  ErrorView,
  ErrorMessage,
  CardIcon,
} from './styles';

export default function CustomInputText({
  label = null,
  placeholder = null,
  value = null,
  errorMessage = null,
  onChangeText = null,
  onBlur = null,
  attrs = null,
}) {
  return (
    <Container>
      <LabelView>
        <LabelText>{label}</LabelText>
      </LabelView>
      <InputView>
        <CardIcon />
        {attrs === null ? (
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
          />
        ) : (
          <MaskedText
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            attrs={attrs}
          />
        )}
      </InputView>
      <ErrorView>
        {errorMessage !== null && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorView>
    </Container>
  );
}
