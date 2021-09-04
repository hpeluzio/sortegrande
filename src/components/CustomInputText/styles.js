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
  color: ${colors.newLightBlack};
`;

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: ${hp('0.1%')}px;
  border-color: ${colors.newLightBlack};
  /* background-color: green; */
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

export const ErrorView = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding-left: ${hp('3%')};
`;

export const ErrorMessage = styled.Text`
  font-size: ${hp(constants.font_size_pc_two)}px;
  font-family: ${constants.font_family_light};
  color: red;
`;
