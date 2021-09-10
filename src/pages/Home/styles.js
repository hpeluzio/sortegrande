import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import AntDesign from 'react-native-vector-icons/AntDesign';
// import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors, constants } from '~/styles';

// export const ScrollView = styled.ScrollView`
//   flex: 1;
//   background-color: ${colors.background};
// `;

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.background};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  margin-top: ${hp('2%')}px;
  /* margin-bottom: ${hp('8%')}px; */
  /* justify-content: flex-start; */
  background: rgba(0, 0, 0, 0);
  /* background: orange; */
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: ${hp('1%')}px ${hp('0%')}px ${hp('0%')}px ${hp('0%')}px;
  background: rgba(0, 0, 0, 0);
  /* background: purple; */
`;

export const Games = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: ${hp('30%')}px;
  width: ${wp('84%')}px;
  border-radius: ${hp(constants.height_small_pc)}px;
`;

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: ${hp('2%')}px;
  height: ${hp('20%')}px;
  width: ${wp('40%')}px;
  border-radius: ${hp(constants.height_small_pc)}px;
  margin: ${hp('1%')}px ${hp('1%')}px ${hp('1%')}px ${hp('1%')}px;
`;

export const ItemName = styled.Text`
  margin-top: ${hp(constants.height_ten_pix_pc)};
  text-align: center;
  font-size: 13px;
  font-family: ${constants.font_family_medium};
  color: ${colors.lightBlack};
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
  size: hp('5%'),
})`
  background-color: ${colors.white};
`;
