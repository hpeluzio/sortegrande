import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors, constants } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  height: ${hp('8%')}px;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${wp('15%')}px;
  /* background-color: red; */
  border-top-width: ${hp('0.2%')}px;
  border-color: #ddd;
`;

export const Button = styled.TouchableOpacity`
  padding: 0 ${wp('5%')}px;
  /* width: ${hp('1%')}px; */
  align-items: center;
  /* flex-basis: 50%; */
  /* background-color: red; */
`;

export const ButtonHighlighted = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: ${hp('3%')}px;
  border-width: ${hp('0.1%')}px;
  border-color: ${colors.primary};

  align-items: center;
  justify-content: center;

  height: ${hp('9%')}px;
  width: ${hp('9%')}px;

  position: absolute;
  left: ${wp('40%')}px;
  /* bottom: ${hp('1%')}px; */
  /* z-index: 999; */
`;

export const Clover = styled(MaterialCommunityIcons).attrs({
  name: 'clover',
  color: colors.white,
  size: hp('8%'),
})`
  /* background-color: ${colors.white}; */
  align-items: center;
  justify-content: center;
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
  size: hp('6%'),
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

export const Back = styled(AntDesign).attrs({
  name: 'back',
  color: colors.mediumGray,
  size: hp('5%'),
})`
  /* background-color: ${colors.white}; */
`;
