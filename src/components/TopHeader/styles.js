import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import Feather from 'react-native-vector-icons/Feather';

import { colors, constants } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  height: ${hp('6%')}px;
  align-items: center;
  justify-content: flex-end;
  /* background-color: green; */
  border-bottom-width: ${hp('0.4%')}px;
  border-color: #ddd;
`;

export const Button = styled.TouchableOpacity`
  padding: 0 ${wp('5%')}px;
  /* width: ${hp('1%')}px; */
  align-items: center;
  /* flex-basis: 50%; */
  /* background-color: red; */
`;

export const Label = styled.Text`
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family};
  text-align: center;
  width: 100%;
  color: #999;
`;

export const User = styled(Feather).attrs({
  name: 'user',
  color: colors.mediumGray,
  size: hp('5%'),
})`
  /* background-color: ${colors.white}; */
`;
