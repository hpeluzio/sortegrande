import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import { colors, constants } from '~/styles';

export { default as CustomInputText } from '~/components/CustomInputText';

export const Scroll = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  background: ${colors.background};
  /* background: red; */
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.background};
  /* background: red; */
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
  margin: ${hp('1%')}px ${wp('2%')}px ${hp('2%')}px ${wp('2%')}px;
  background: ${colors.background};
  /* background: purple; */
`;

export const Spacer = styled.View`
  flex-direction: column;
  height: ${hp('3%')}px;
  background: ${colors.white};
  align-items: center;
  justify-content: center;
  /* background-color: orange; */
  background: ${colors.background};
`;

export const Row = styled.View`
  /* flex: 1; */
  flex-direction: row;
  justify-content: space-between;
  /* border-radius: ${hp('2%')}px; */
  /* background-color: ${colors.background}; */
  /* padding: ${hp('1%')}px; */
  /* margin-bottom: ${hp('1%')}px; */
`;

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: ${hp('2%')}px;
  padding: ${hp('1%')}px;
  margin: ${hp('0.5%')}px;
  justify-content: flex-start;
`;

export const SingleColumn = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: ${hp('2%')}px;
  align-items: center;
  justify-content: center;
  padding: ${hp('1%')}px;
  margin: ${hp('0.5%')}px;
  justify-content: flex-start;
`;

export const Numbers = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: ${wp('70%')}px;
  /* height: ${hp('8%')}px; */
  /* background: red; */
  align-items: center;
  justify-content: center;
  /* border-radius: ${wp('3%')}px; */
  /* border-width: ${wp('0.5%')}px; */
  /* border-color: ${colors.mediumGray}; */
`;

export const NumberSquare = styled.View`
  width: ${hp('4%')}px;
  height: ${hp('4%')}px;
  background: ${props => (props.color ? '#1a8cff' : colors.primary)};
  margin-right: ${wp('1%')}px;
  margin-bottom: ${wp('1%')}px;
  padding: ${wp('0.75%')}px;
  border-radius: ${wp('2%')}px;
  align-items: center;
  justify-content: center;
`;

export const NumbersText = styled.Text`
  text-transform: uppercase;
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  color: ${colors.white};
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: ${hp(constants.font_default)}px;
  font-family: ${constants.font_family_semi_bold};
`;

export const InfoLabel = styled.Text`
  color: ${colors.mediumGray};
  /* text-transform: uppercase; */
  font-size: ${hp(constants.font_default)}px;
  font-family: ${constants.font_family_semi_bold};
`;

export const Info = styled.Text`
  color: ${colors.mediumGray};
  text-transform: uppercase;
  font-size: ${hp(constants.font_default)}px;
  font-family: ${constants.font_family};
  padding-left: ${wp('4%')}px;
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

export const SimpleButton = styled.TouchableOpacity`
  flex-direction: row;
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
