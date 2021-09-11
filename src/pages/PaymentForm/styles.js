import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import LinearGradient from 'react-native-linear-gradient';

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
  font-size: ${hp(constants.font_default)}px;
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
