import React, { useEffect, useState } from 'react';

import {
  Container,
  InputView,
  LabelView,
  LabelText,
  MaskedText,
  TextInput,
  ErrorView,
  ErrorMessage,
} from './styles';

import vectors from './vectorIcons';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colors } from '~/styles';

export default function CustomInputText({
  label = null,
  placeholder = null,
  value = null,
  errorMessage = null,
  onChangeText = null,
  onBlur = null,
  type = null,
  icon = null,
  color = null,
  attrs = null,
  secureTextEntry = false,
}) {
  const { name, icon: IconOf } = vectors.find(
    v => v.name.toLowerCase() === type.toLowerCase(),
  );
  // const Vec = VectorIcon.vector;

  useEffect(() => {}, []);

  return (
    <Container>
      <LabelView>
        <LabelText>{label}</LabelText>
      </LabelView>
      <InputView>
        <IconOf name={icon} size={hp('4%')} color={color || colors.primary} />
        {attrs === null ? (
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
          />
        ) : (
          <MaskedText
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            attrs={attrs}
            secureTextEntry={secureTextEntry}
          />
        )}
      </InputView>
      <ErrorView>
        {errorMessage !== null && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorView>
    </Container>
  );
}
