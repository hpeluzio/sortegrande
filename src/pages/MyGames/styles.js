import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors, constants } from '~/styles';

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export const RefreshControl = styled.RefreshControl``;

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: ${hp('2%')}px;
  margin-bottom: ${hp('2%')}px;
  align-items: center;
  /* background: ${colors.white}; */
  /* background: orange; */
`;

export const GameCard = styled.View`
  flex-direction: column;
  align-items: center;
  width: ${wp('95%')}px;
  height: ${hp('38%')}px;
  border-radius: ${wp('3%')}px;
  margin-bottom: ${hp('3%')}px;
  border-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray};
  /* background: ${colors.white}; */
  /* background: orange; */
`;

export const EmptyGameCard = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${wp('95%')}px;
  height: ${hp('30%')}px;
  border-radius: ${wp('3%')}px;
  margin-bottom: ${hp('3%')}px;
  border-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray};
  /* background: ${colors.white}; */
  /* background: orange; */
`;

export const EmptyGameText = styled.Text`
  color: ${colors.black};
  /* text-transform: uppercase; */
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  text-align: center;
`;

export const Top = styled.View`
  flex-direction: row;
  width: ${wp('95%')}px;
  height: ${hp('6%')}px;
  align-items: center;
  justify-content: space-around;
  border-bottom-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray};
  /* background: blue; */
`;

export const Down = styled.View`
  flex-direction: row;
  width: ${wp('90%')}px;
  height: ${hp('19%')}px;
  align-items: center;
  justify-content: center;
  /* background: blue; */
`;

export const DownDate = styled.View`
  flex-direction: row;
  width: ${wp('94%')}px;
  height: ${hp('6%')}px;
  align-items: center;
  justify-content: center;
  border-color: ${colors.mediumGray};
  border-bottom-width: ${wp('0.5%')}px;
  /* background: blue; */
`;

export const NameSquareLeft = styled.View`
  flex-direction: row;
  width: ${wp('30%')}px;
  height: ${hp('6%')}px;
  align-items: center;
  justify-content: flex-end;
  border-color: ${colors.mediumGray};
  /* background: red; */
`;

export const NameSquareRight = styled.View`
  flex-direction: row;
  width: ${wp('60%')}px;
  height: ${hp('6%')}px;
  align-items: center;
  justify-content: center;
  border-color: ${colors.mediumGray};
  border-left-width: ${wp('0.5%')}px;
  /* background: red; */
`;

export const DateSquareLeft = styled.View`
  flex-direction: row;
  width: ${wp('60%')}px;
  height: ${hp('6%')}px;
  align-items: center;
  justify-content: space-around;
  /* background: red; */
`;

export const NameText = styled.Text`
  color: ${colors.black};
  text-transform: uppercase;
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
`;

export const Left = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* background: ${colors.white}; */
  width: ${wp('16%')}px;
  height: ${hp('15%')}px;
  /* margin-left: ${wp('2%')}px; */
  /* background: red; */
  border-radius: ${wp('3.5%')}px;
  /* margin-bottom: ${wp('2%')}px; */
  border-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray};
`;

export const Right = styled.View`
  flex-direction: column;
  /* align-items: center; */
  /* background: orange; */
  width: ${wp('70%')}px;
  height: ${hp('15%')}px;
  /* background: blue; */
  align-items: center;
  justify-content: center;
  /* border-radius: ${wp('3%')}px;
  margin-bottom: ${wp('2%')}px;
  border-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray}; */
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
  background: ${colors.primary};
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

export const RepeatIcon = styled(Feather).attrs({
  name: 'refresh-cw',
  color: colors.mediumGray,
  size: hp('4%'),
})`
  /* background-color: ${colors.white}; */
`;

export const DeleteIcon = styled(AntDesign).attrs({
  name: 'delete',
  color: colors.mediumGray,
  size: hp('4%'),
})`
  /* background-color: ${colors.white}; */
`;

export const Button = styled.TouchableOpacity`
  /* width: ${hp('4%')}px;
  height: ${hp('4%')}px; */
  padding: ${wp('1.5%')}px;
  align-items: center;
  justify-content: center;
  /* background: red; */
`;
