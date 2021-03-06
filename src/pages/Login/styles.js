import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors, constants } from '~/styles';
import Trevo from '~/images/trevo.png';

export { default as CustomInputText } from '~/components/CustomInputText';

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
  padding: ${wp('10%')}px;
  padding-top: ${wp('7.5%')}px;
`;

export const Back = styled.View`
  height: ${hp('100%')}px;
  width: ${wp('100%')}px;
  background: ${colors.primary};
  position: absolute;
  top: -${hp('92.5%')}px;
  left: 0;
  border-radius: ${hp('10%')}px;
`;

export const Logo = styled.Image.attrs({
  source: Trevo,
  resizeMode: 'contain',
})`
  height: ${wp('40%')}px;
  background: ${colors.white};
  align-self: center;
  justify-content: center;
  padding: ${wp('10%')}px;
  background-color: 'rgba(52, 52, 52, 0.0)';
  margin-bottom: ${hp('5%')}px;
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

// export const Email = styled(Input).attrs({
//   keyboardType: 'email-address',
//   leftIcon: {
//     type: 'Entypo',
//     name: 'mail',
//     color: colors.mediumGray,
//     size: wp('8%'),
//   },
// })`
//   font-family: ${constants.font_family};
//   color: ${colors.mediumGray};
// `;

// export const Password = styled(Input).attrs({
//   secureTextEntry: true,
//   leftIcon: {
//     type: 'FontAwesome',
//     name: 'lock',
//     color: colors.mediumGray,
//     size: wp('8%'),
//   },
// })`
//   font-family: ${constants.font_family};
//   color: ${colors.mediumGray};
// `;

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${hp('6%')}px;
  width: ${wp('80%')}px;
  background: ${colors.white};
  border-width: ${wp('0.25%')}px;
  border-radius: ${wp('3%')}px;
  border-color: red;
  margin-top: ${hp('1%')}px;
`;

export const ErrorLog = styled.Text`
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_medium};
  color: red;
`;

//Account
export const AccountContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background: ${colors.white};
  align-items: center;
  justify-content: center;
  margin-bottom: ${hp(constants.font_size_pc)}px;
`;

export const AccountLabel = styled.Text`
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_medium};
  color: ${colors.mediumGray};
  margin-bottom: ${hp('0.25%')}px;
  margin-left: ${hp(constants.font_size_pc_two)}px;
  margin-top: ${hp('1%')}px;
`;

export const LockIcon = styled(Feather).attrs({
  name: 'unlock',
  color: colors.mediumGray,
  size: hp('3.5%'),
})`
  background-color: ${colors.white};
`;

export const AddUserIcon = styled(AntDesign).attrs({
  name: 'adduser',
  color: colors.mediumGray,
  size: hp('4%'),
})`
  background-color: ${colors.white};
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: [colors.primaryDark, colors.primary],
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
  /* margin: ${wp('10%')}px ${wp('1%')}px; */
  text-align: center;
  background: ${colors.primary};
  align-self: center;
  margin-top: ${hp(constants.font_size_pc)}px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family_semi_bold};
`;

export const SimpleButton = styled.TouchableOpacity`
  flex-direction: row;
`;
