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
  /* background: ${colors.white}; */
  margin-top: ${hp('2%')}px;
  margin-bottom: ${hp('2%')}px;
  align-items: center;
  /* justify-content: center; */
  /* background: orange; */
`;

export const GameCard = styled.View`
  flex-direction: column;
  align-items: center;
  /* background: ${colors.white}; */
  width: ${wp('95%')}px;
  height: ${hp('25%')}px;
  /* background: orange; */
  border-radius: ${wp('3%')}px;
  margin-bottom: ${wp('2%')}px;
  border-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray};
`;

export const Top = styled.View`
  flex-direction: column;
  width: ${wp('95%')}px;
  height: ${hp('7%')}px;
  align-items: center;
  justify-content: center;
  /* background: red; */
  border-bottom-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray};
`;

export const Down = styled.View`
  flex-direction: row;
  width: ${wp('90%')}px;
  height: ${hp('17%')}px;
  align-items: center;
  justify-content: center;
  /* background: blue; */
`;

export const Name = styled.View`
  flex-direction: row;
  /* background: red; */
  width: ${wp('75%')}px;
  height: ${hp('7%')}px;
  /* background: gray; */
  align-items: center;
  justify-content: space-around;
  /* margin-bottom: ${wp('2%')}px; */
`;

export const NameSquare = styled.View`
  flex-direction: row;
  /* background: red; */
  width: ${wp('25%')}px;
  height: ${hp('5%')}px;
  /* background: gray; */
  align-items: center;
  justify-content: space-around;
  /* margin-bottom: ${wp('2%')}px; */

  border-color: ${colors.mediumGray};
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
  height: ${hp('16%')}px;
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
  height: ${hp('16%')}px;
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

export const EditIcon = styled(Feather).attrs({
  name: 'edit',
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
