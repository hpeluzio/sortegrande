import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors, constants } from '~/styles';

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  height: auto;
  width: auto;
  background: ${colors.white};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
  /* background: orange; */
  margin-top: ${hp('8%')}px;
  margin-bottom: ${hp('8%')}px;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* padding: 0 ${wp('5%')}px; */
  /* margin: ${wp('1%')}px; */
  /* background: purple; */
`;

export const Games = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: ${hp('35%')}px;
  width: ${wp('95%')}px;
  border-width: ${wp('1%')}px;
  border-radius: ${hp(constants.height_small_pc)}px;
  border-color: #ddd;
`;

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: ${hp('2%')}px;
  height: ${hp('25%')}px;
  width: ${wp('45%')}px;
  border-width: ${wp('1%')}px;
  border-radius: ${hp(constants.height_small_pc)}px;
  border-color: #ddd;
`;

export const ItemName = styled.Text`
  margin-top: ${hp(constants.height_ten_pix_pc)};
  text-align: center;
  font-size: 13px;
  font-family: ${constants.font_family_medium};
  color: #777777;
  flex-wrap: wrap;
`;

export const List = styled(Ionicons).attrs({
  name: 'ios-bookmarks-outline',
  color: colors.mediumGray,
  size: hp('10%'),
})`
  background-color: ${colors.white};
`;

export const CreditCardIcon = styled(AntDesign).attrs({
  name: 'creditcard',
  color: colors.mediumGray,
  size: hp('5%'),
})`
  background-color: ${colors.white};
`;

export const BookIcon = styled(Ionicons).attrs({
  name: 'document-attach-outline',
  color: colors.mediumGray,
  size: hp('5%'),
})`
  background-color: ${colors.white};
`;
