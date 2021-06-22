import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors, constants } from '~/styles';
import Trevo from '~/images/trevo.png';

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export const InputContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
  padding: ${wp('10%')}px;
  padding-top: ${wp('25%')}px;
`;

export const Back = styled.View`
  height: ${hp('100%')}px;
  width: ${wp('100%')}px;
  background: ${colors.primary};
  position: absolute;
  top: -${hp('90%')}px;
  left: 0;
  border-radius: ${hp('10%')}px;
`;

export const Logo = styled.Image.attrs({
  source: Trevo,
  resizeMode: 'contain',
})`
  height: ${wp('50%')}px;
  background: ${colors.white};
  align-self: center;
  justify-content: center;
  padding: ${wp('10%')}px;
  background-color: 'rgba(52, 52, 52, 0.0)';
`;

//Input
export const InputLabel = styled.Text`
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family_medium};
  color: ${colors.primaryDark};
  margin-bottom: ${hp('0.25%')}px;
  margin-left: ${hp(constants.font_size_pc_two)}px;
  margin-top: ${hp('1%')}px;
`;

export const Email = styled.TextInput`
  text-align: center;
  height: ${hp(constants.height_eight_pc)}px;
  width: ${wp('80%')}px;
  border: ${hp('0.2%')}px solid ${colors.primary};
  border-radius: ${hp(constants.font_size_pc)}px;
  font-size: ${hp(constants.font_size_xl_pc)}px;
  font-family: ${constants.font_family};
  color: ${colors.mediumGray};
  padding: 0 ${hp(constants.font_size_pc_two)}px;
`;

export const Password = styled.TextInput.attrs({
  secureTextEntry: true,
})`
  text-align: center;
  height: ${hp(constants.height_eight_pc)}px;
  width: ${wp('80%')}px;
  border: ${hp('0.2%')}px solid ${colors.primary};
  border-radius: ${hp(constants.font_size_pc)}px;
  font-size: ${hp(constants.font_size_xl_pc)}px;
  font-family: ${constants.font_family};
  color: ${colors.mediumGray};
  padding: 0 ${hp(constants.font_size_pc_two)}px;
`;

//Account
export const AccountContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const AccountLabel = styled.Text`
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family_medium};
  color: ${colors.mediumGray};
  margin-bottom: ${hp('0.25%')}px;
  margin-left: ${hp(constants.font_size_pc_two)}px;
  margin-top: ${hp('1%')}px;
`;

export const LoginIcon = styled(AntDesign).attrs({
  name: 'login',
  color: colors.mediumGray,
  size: hp('4.5%'),
})`
  background-color: ${colors.white};
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#1a9929', '#3cb24a'],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#fff',
})``;

export const Button = styled.TouchableOpacity`
  height: ${hp(constants.height_small_pc)}px;
  width: ${wp('60%')}px;
  border-radius: ${wp('1%')}px;
  overflow: hidden;
  margin: ${wp('10%')}px ${wp('1%')}px;
  text-align: center;
  background: ${colors.primary};
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family_semi_bold};
`;

export const Spacer = styled.View`
  flex-direction: column;
  height: ${hp('25%')}px;
  background: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const SimpleButton = styled.TouchableOpacity`
  flex-direction: row;
`;
