import styled from 'styled-components';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colors } from '~/styles';

export { default as CustomInputText } from '~/components/CustomInputText';

import Spinner from '~/images/spinner.gif';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.background};
`;

export const HiddenWebView = styled.SafeAreaView`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: ${hp('0.1%')}px;
  width: ${hp('0.1%')}px;
  flex-direction: column;
  background: ${colors.white};
`;

export const LoadingGif = styled.Image.attrs({
  source: Spinner,
  resizeMode: 'contain',
})`
  height: ${hp('20%')}px;
  justify-content: center;
  /* padding-top: ${hp('35%')}px; */
  background-color: rgba(0, 0, 0, 0);
`;
