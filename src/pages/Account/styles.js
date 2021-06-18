import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors, constants } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  height: auto;
  width: auto;
  background: ${colors.white};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
  /* background: orange; */
  margin-top: ${hp('8%')}px;
  margin-bottom: ${hp('8%')}px;
`;

export const Button = styled.TouchableOpacity`
  padding: 0 ${wp('5%')}px;
  /* width: ${hp('1%')}px; */
  align-items: center;
  /* flex-basis: 50%; */
  /* background-color: red; */
`;

export const Logout = styled(AntDesign).attrs({
  name: 'logout',
  color: colors.mediumGray,
  size: hp('5%'),
})`
  /* background-color: ${colors.white}; */
`;

export const Label = styled.Text`
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family};
  text-align: center;
  width: 100%;
  color: ${colors.mediumGray};
`;
