import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors, constants } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.background};
  /* background: red; */
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  /* margin-top: ${hp('2%')}px; */
  margin: ${hp('4%')}px ${hp('4%')}px ${hp('4%')}px ${hp('4%')}px;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
  /* background: orange; */
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  /* margin: ${hp('1%')}px ${hp('0%')}px ${hp('0%')}px ${hp('0%')}px; */
  background: rgba(0, 0, 0, 0);
  /* background: purple; */
`;

export const Item = styled.TouchableOpacity`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  padding: ${hp('4%')}px;
  height: ${hp('20%')}px;
  border-radius: ${hp(constants.height_small_pc)}px;
  margin: ${hp('1%')}px ${hp('1%')}px ${hp('1%')}px ${hp('1%')}px;
`;

export const ItemName = styled.Text`
  text-align: center;
  font-size: ${hp(constants.font_default)}px;
  font-family: ${constants.font_family_semi_bold};
  color: ${colors.mediumGray};
  flex-wrap: wrap;
`;

export const List = styled(Ionicons).attrs({
  name: 'ios-bookmarks-outline',
  color: colors.primary,
  size: hp('5%'),
})`
  background-color: ${colors.white};
`;

export const CreditCardIcon = styled(AntDesign).attrs({
  name: 'creditcard',
  color: colors.primary,
  size: hp('5%'),
})`
  background-color: ${colors.white};
`;

export const BookIcon = styled(Ionicons).attrs({
  name: 'document-attach-outline',
  color: colors.primary,
  size: hp('8%'),
})`
  background-color: ${colors.white};
`;

export const CloverIcon = styled(MaterialCommunityIcons).attrs({
  name: 'clover',
  color: colors.primary,
  size: hp('10%'),
})`
  background-color: ${colors.white};
`;
