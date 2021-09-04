import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { TextInputMask } from 'react-native-masked-text';
import { Input as InputElements } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
  background: ${colors.white};
  margin-top: ${hp('2%')}px;
  margin-bottom: ${hp('2%')}px;
  /* background: orange; */
`;

export const Button = styled.TouchableOpacity`
  padding: 0 ${wp('5%')}px;
  align-items: center;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  height: ${hp(constants.height_small_pc)}px;
  width: ${wp('60%')}px;
  border-radius: ${wp('1%')}px;
  overflow: hidden;
  /* margin: ${wp('10%')}px ${wp('1%')}px; */
  text-align: center;
  background: ${colors.primary};
  align-self: center;
`;

export const Label = styled.Text`
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family};
  text-align: center;
  width: 100%;
  color: ${colors.mediumGray};
`;

export const InputContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  background: ${colors.white};
  /* background-color: blue; */
`;

export const InputRow = styled.View`
  /* flex: 1; */
  flex-direction: row;
  justify-content: flex-start;
  border-radius: ${hp('1%')}px;
  /* background-color: red; */
`;

export const ExpireDate = styled(TextInputMask).attrs({
  placeholderTextColor: colors.newLightBlack,
  type: 'datetime',
  options: {
    format: 'MM/YYYY',
  },
})`
  flex: 1;
  height: ${hp(constants.height_small_pc)};
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family};
  color: ${colors.lightBlack};
  padding: 0 ${hp('1%')}px;
  /* text-align: center; */
`;

export const SecureCode = styled(TextInputMask).attrs({
  placeholderTextColor: colors.newLightBlack,
  type: 'only-numbers',
  // options: {
  //   format: 'MM/YYYY',
  // },
})`
  flex: 1;
  height: ${hp(constants.height_small_pc)};
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family};
  color: ${colors.lightBlack};
  padding: 0 ${hp('1%')}px;
  /* text-align: center; */
`;

// export const NameCard = styled.TextInput`
// flex: 1;
// height: ${hp(constants.height_small_pc)};
// font-size: ${hp(constants.font_size_pc)};
// font-family: ${constants.font_family};
// color: ${colors.lightBlack};
// padding: 0 ${hp('1%')}px;
// `;

export const NameCard = styled(InputElements).attrs({
  keyboardType: 'default',
  leftIcon: {
    type: 'font-awesome',
    name: 'pencil-square-o',
    color: colors.mediumGray,
    size: wp('8%'),
  },
})`
  flex: 1;
  height: ${hp(constants.height_small_pc)};
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family};
  color: ${colors.lightBlack};
  margin-top: ${hp('0.5%')}px;
  /* padding: 0 ${hp('1%')}px; */
  /* margin: ${hp('1%')}px ${hp('4%')}px ${hp('1%')}px ${hp('1%')}px; */
  /* border-bottom-width: ${hp('0.1%')}px;
  border-radius: ${hp('1%')}px; */
  /* padding-left: ${hp('1%')}; */
  /* background-color: red; */
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
  /* background-color: orange; */
`;

export const SimpleButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const CardIcon = styled(Entypo).attrs({
  name: 'credit-card',
  color: colors.mediumGray,
  size: hp('4%'),
})`
  background-color: rgba(0, 0, 0, 0);
`;

export const CalendarIcon = styled(Fontisto).attrs({
  name: 'date',
  color: colors.mediumGray,
  size: hp('4%'),
})`
  background-color: rgba(0, 0, 0, 0);
`;

export const NameIcon = styled(MaterialCommunityIcons).attrs({
  name: 'smart-card-outline',
  color: colors.mediumGray,
  size: hp('4%'),
})`
  background-color: rgba(0, 0, 0, 0);
`;

export const SecureCodeIcon = styled(MaterialCommunityIcons).attrs({
  name: 'credit-card-check-outline',
  color: colors.mediumGray,
  size: hp('4%'),
})`
  background-color: rgba(0, 0, 0, 0);
`;
