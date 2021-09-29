import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import LinearGradient from 'react-native-linear-gradient';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors, constants } from '~/styles';

export { default as CustomInputText } from '~/components/CustomInputText';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  background: ${colors.white};
  /* margin-top: ${hp('2%')}px; */
  /* margin-bottom: ${hp('2%')}px; */
  /* background: orange; */
`;

export const Button = styled.TouchableOpacity`
  padding: ${hp('2%')}px;
  height: ${hp('12%')}px;
  width: ${wp('40%')}px;
  align-items: center;
  justify-content: center;
  /* align-self: flex-end; */
  /* background-color: red; */
`;

export const ButtonSubmit = styled.TouchableOpacity`
  height: ${hp(constants.height_small_pc)}px;
  width: ${wp('60%')}px;
  border-radius: ${wp('1%')}px;
  overflow: hidden;
  /* margin: ${wp('10%')}px ${wp('1%')}px; */
  text-align: center;
  align-self: center;
  background-color: ${colors.primary};
  background-color: red;
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

export const InputContainer = styled.SafeAreaView`
  /* flex: 1; */
  /* flex-direction: column; */
  /* height: ${hp('75%')}px; */
  /* justify-content: flex-start; */
  /* align-items: center; */
  background: ${colors.white};
  margin: ${hp('0%')}px ${hp('4%')}px ${hp('25%')}px ${hp('4%')}px;
  /* background: tomato; */
`;

export const InputRow = styled.View`
  /* flex: 1; */
  flex-direction: row;
  justify-content: flex-start;
  border-radius: ${hp('1%')}px;
  /* background-color: red; */
`;

export const InputRowLogout = styled.View`
  /* flex: 1; */
  flex-direction: row;
  justify-content: center;
  border-radius: ${hp('1%')}px;
  /* background-color: red; */
`;
export const Back = styled.View`
  /* height: ${hp('100%')}px; */
  width: ${wp('100%')}px;
  background: ${colors.primary};
  position: absolute;
  top: -${hp('90%')}px;
  left: 0;
  border-radius: ${hp('10%')}px;
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

export const ButtonText = styled.Text`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family_semi_bold};
`;

export const Spacer = styled.View`
  flex-direction: column;
  height: ${hp('5%')}px;
  background: ${colors.white};
  align-items: center;
  justify-content: center;
`;

export const SimpleButton = styled.TouchableOpacity`
  flex-direction: row;
`;
