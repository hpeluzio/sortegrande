import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
// import LinearGradient from 'react-native-linear-gradient';

// import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors, constants } from '~/styles';

export const MainContainer = styled.SafeAreaView`
  position: absolute;
  /* top: 0;
  left: 0; */
  width: ${wp('100%')}px;
  height: ${hp('100%')}px;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const Container = styled.View`
  position: absolute;
  /* top: ${hp('30%')}px;
  left: ${wp('30%')}px; */
  width: ${wp('90%')}px;
  height: ${hp('40%')}px;
  /* flex-direction: column; */
  border-width: ${wp('0.25%')}px;
  border-color: rgba(0, 150, 0, 0.4);
  /* border-color: ${colors.primary}; */
  border-radius: ${wp('5%')}px;
  background: white;
`;

export const TittleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${wp('5%')}px;
  /* background: blue; */
`;

export const Tittle = styled.Text`
  flex-direction: row;
  font-family: ${constants.font_family_semi_bold};
  font-size: ${wp(constants.height_small_pc)};
  color: ${colors.mediumGray};
`;

export const MessageContainer = styled.View`
  flex: 1;
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: center; */
  padding: ${wp('5%')}px;
  /* background: red; */
`;

export const Message = styled.Text`
  font-family: ${constants.font_family_semi_bold};
  font-size: ${wp(constants.height_four_pc)}px;
  color: ${colors.mediumGray};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: ${hp('1%')}px;
`;

export const Button = styled.TouchableOpacity`
  font-family: ${constants.font_family_semi_bold};
  font-size: ${wp(constants.height_four_pc)}px;
  color: ${colors.mediumGray};
  padding-left: ${wp('10%')}px;
  padding-right: ${wp('10%')}px;
  padding-bottom: ${hp('2%')}px;
  padding-top: ${hp('2%')}px;
  /* background: green; */
`;

export const ButtonText = styled.Text`
  font-family: ${constants.font_family_semi_bold};
  font-size: ${wp(constants.height_four_pc)}px;
  color: ${colors.mediumGray};
`;
