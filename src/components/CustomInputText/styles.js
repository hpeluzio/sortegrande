import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { TextInputMask } from 'react-native-masked-text';

import { colors, constants } from '~/styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  background: ${colors.white};
  padding: ${hp('1%')}px;
  /* background: orange; */
`;

export const LabelView = styled.View`
  align-items: flex-start;
  justify-content: center;
  /* background-color: blue; */
`;

export const LabelText = styled.Text`
  font-size: ${hp(constants.font_size_pc_two)}px;
  font-family: ${constants.font_family_bold};
  color: ${colors.mediumGray};
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: ${hp('0.1%')}px;
  border-color: ${colors.mediumGray};
  /* background-color: green; */
`;

export const ErrorView = styled.View`
  /* flex: 1; */
  align-items: flex-start;
  justify-content: center;
  padding-left: ${wp('5%')}px;
  /* height: ${hp('1.6%')}px; */
  /* background-color: orange; */
`;

export const ErrorMessage = styled.Text`
  font-size: ${hp(constants.font_1_5)}px;
  font-family: ${constants.font_family_light};
  color: red;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: ${hp(constants.height_two_dot_five)};
  padding: ${hp('1%')}px;
  /* background-color: green; */
`;

export const MaskedText = styled(TextInputMask).attrs(props => ({
  ...props.attrs,
}))`
  flex: 1;
  font-size: ${hp(constants.height_two_dot_five)}px;
  padding: ${hp('1%')}px;
  /* background-color: green; */
`;
