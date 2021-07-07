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
  align-items: center;
  /* justify-content: center; */
  /* background: orange; */
`;

export const GameCard = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${colors.white};
  width: ${wp('95%')}px;
  height: ${hp('10%')}px;
  /* background: orange; */
  border-radius: ${wp('3%')}px;
  margin-bottom: ${wp('2%')}px;
  border-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray};
`;

export const Left = styled.View`
  flex-direction: column;
  /* align-items: center; */
  background: ${colors.white};
  width: ${wp('75%')}px;
  height: ${hp('10%')}px;
  background: red;
  align-items: center;
  justify-content: center;
  /* border-radius: ${wp('3%')}px;
  margin-bottom: ${wp('2%')}px;
  border-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray}; */
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: ${colors.white};
  width: ${wp('20%')}px;
  height: ${hp('10%')}px;
  /* background: red; */
  /* border-radius: ${wp('3%')}px;
  margin-bottom: ${wp('2%')}px;
  border-width: ${wp('0.5%')}px;
  border-color: ${colors.mediumGray}; */
`;

export const Numbers = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
  background: orange;
  align-items: center;
  justify-content: center;
  /* border-radius: ${wp('3%')}px; */
  /* border-width: ${wp('0.5%')}px; */
  /* border-color: ${colors.mediumGray}; */
`;

export const NumbersText = styled.Text`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family_semi_bold};
`;

export const Name = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
  background: gray;
  align-items: center;
  justify-content: center;

  /* margin-bottom: ${wp('2%')}px; */
  /* border-width: ${wp('0.5%')}px; */
  /* border-color: ${colors.mediumGray}; */
`;

export const NameText = styled.Text`
  color: ${colors.black};
  text-transform: uppercase;
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
`;

export const EditIcon = styled(Feather).attrs({
  name: 'edit',
  color: colors.mediumGray,
  size: hp('4%'),
})`
  background-color: ${colors.white};
`;

export const DeleteIcon = styled(AntDesign).attrs({
  name: 'delete',
  color: colors.mediumGray,
  size: hp('4%'),
})`
  background-color: ${colors.white};
`;
