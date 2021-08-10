import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import { Input } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

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
  margin-top: ${hp('1.5%')}px;
`;

export const NameInput = styled(Input).attrs({
  keyboardType: 'default',
  leftIcon: {
    type: 'font-awesome',
    name: 'pencil-square-o',
    color: colors.mediumGray,
    size: wp('8%'),
  },
})`
  font-family: ${constants.font_family};
  color: ${colors.mediumGray};
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

export const GradientClear = styled(LinearGradient).attrs({
  colors: ['#969900', '#917e10'],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GradientSendBlocked = styled(LinearGradient).attrs({
  colors: ['#808080', '#9a9a9a'],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const GradientSend = styled(LinearGradient).attrs({
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
  /* height: ${hp('42%')}px; */
  /* background: blue; */
`;

export const NumberSquare = styled.TouchableOpacity`
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* background: orange;44 */
  width: ${wp('11%')}px;
  height: ${wp('11%')}px;
  margin: ${hp('0.25%')}px ${hp('0.25%')}px;
  border: ${hp('0.2%')}px solid ${colors.primary};
  border-radius: ${hp('1%')}px;
  border-color: ${colors.lightGray};
  /* margin-bottom: ${hp('8%')}px; */
  background: ${props => (props.isNumberSelected ? 'green' : 'white')};
`;

export const TextNumber = styled.Text`
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  /* color: ${colors.mediumGray}; */
  color: ${props => (props.isNumberSelected ? 'white' : 'green')};
`;
