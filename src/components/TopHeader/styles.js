import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import { colors, constants } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  height: ${hp('8%')}px;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: ${hp('0.2%')}px;
  border-color: #ddd;
  background-color: ${colors.white};
  /* background-color: green; */
`;

export const Button = styled.TouchableOpacity`
  padding: 0 ${wp('5%')}px;
  /* width: ${hp('1%')}px; */
  align-items: center;
  /* flex-basis: 50%; */
  /* background-color: red; */
`;

export const Label = styled.Text`
  font-size: ${hp(constants.font_size_md_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  text-align: center;
  /* width: 100%; */
  color: ${colors.mediumGray};

  /* background-color: red; */
`;

export const Header = styled.Text`
  font-size: ${hp(constants.font_size_md_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  text-align: center;
  /* width: 100%; */
  color: ${colors.mediumGray};
  /* background-color: red; */
`;

export const User = styled(Feather).attrs({
  name: 'user',
  color: colors.mediumGray,
  size: hp('5%'),
})`
  /* background-color: ${colors.white}; */
`;

export const Back = styled(AntDesign).attrs({
  name: 'back',
  color: colors.mediumGray,
  size: hp('5%'),
})`
  /* background-color: ${colors.white}; */
`;

export const Home = styled(Feather).attrs({
  name: 'home',
  color: colors.mediumGray,
  size: hp('5%'),
})`
  /* background-color: ${colors.white}; */
`;

export const Empty = styled.View`
  height: ${hp('5%')}px;
  width: ${hp('10%')}px;
  background-color: rgba(0, 0, 0, 0);
`;
