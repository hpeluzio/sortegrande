import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import Feather from 'react-native-vector-icons/Feather';

import { colors, constants } from '~/styles';

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: ${colors.white};
  margin-top: ${hp('2%')}px;
  /* margin-bottom: ${hp('8%')}px; */
  /* background: orange; */
`;

export const SubmitContainer = styled.View`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${hp('12%')}px;
  background: ${colors.white};
  /* background: orange; */
`;

export const InputLabel = styled.Text`
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family_semi_bold};
  color: ${colors.mediumGray};
`;

export const NumberInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
})`
  text-align: center;
  height: ${hp(constants.height_eight_pc)}px;
  width: ${wp('20%')}px;
  border: ${hp('0.2%')}px solid ${colors.primary};
  border-radius: ${hp(constants.font_size_pc)}px;
  border-color: ${colors.mediumGray};
  font-size: ${hp(constants.font_size_xl_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  color: ${colors.darkGray};
`;

export const SubmitButton = styled.TouchableOpacity`
  height: ${hp(constants.height_small_pc)}px;
  width: ${wp('18%')}px;
  border-radius: ${wp('1%')}px;
  overflow: hidden;
  margin-left: ${wp('5%')}px;
  text-align: center;
  background: ${colors.primary};
  align-self: center;
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

export const ButtonText = styled.Text`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family_semi_bold};
`;

export const NumbersContainer = styled.View`
  /* flex: 1; */
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  width: ${wp('80%')}px;
  height: ${hp('42%')}px;
  /* background: blue; */
`;

export const NumberSquare = styled.View`
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* background: orange;44 */
  width: ${wp('12%')}px;
  height: ${wp('12%')}px;
  margin: ${hp('1%')}px ${hp('1%')}px;
  border: ${hp('0.2%')}px solid ${colors.primary};
  border-radius: ${hp(constants.font_size_pc)}px;
  border-color: ${colors.lightGray};
  /* margin-bottom: ${hp('8%')}px; */
  /* background: orange; */
`;

export const TextNumber = styled.Text`
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  color: ${colors.mediumGray};
`;

export const SubmitForm = styled.View`
  /* flex: 1; */
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  width: ${wp('80%')}px;
  height: ${hp('10%')}px;
  background: blue;
`;
