import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { colors, constants } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.background};
  /* background: red; */
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
  /* background-color: blue; */
  background: rgba(0, 0, 0, 0);
`;

export const RefreshControl = styled.RefreshControl``;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  height: ${hp('80%')}px;
  margin: ${hp('0%')}px ${hp('4%')}px ${hp('0%')}px ${hp('4%')}px;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
  /* background: orange; */
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.primary,
})``;

export const TotalPrizeRow = styled.View`
  flex-direction: row;
  justify-content: center;
  /* margin: ${hp('1%')}px ${hp('0%')}px ${hp('0%')}px ${hp('0%')}px; */
  background: rgba(0, 0, 0, 0);
  /* background: purple; */
`;

export const ItemPrize = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: ${hp('10%')}px;
  padding-right: ${hp('10%')}px;
  height: ${hp('6%')}px;
  border-radius: ${hp('2.5%')}px;
  margin: ${hp('1%')}px ${hp('1%')}px ${hp('1%')}px ${hp('1%')}px;
  /* padding-left: ${wp('22.5%')}px; */
  /* padding-right: ${wp('22.5%')}px; */
  background: orange;
  background: rgba(0, 0, 0, 0);
  background-color: ${colors.white};
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
  padding-left: ${wp('22.5%')}px;
  padding-right: ${wp('22.5%')}px;
  /* background: orange; */
`;

export const ItemName = styled.Text`
  text-align: center;
  font-size: ${hp(constants.font_default)}px;
  font-family: ${constants.font_family_semi_bold};
  flex-wrap: wrap;
  color: ${colors.mediumGray};
  flex-wrap: wrap;
  /* background: purple; */
`;

export const TextAcumulated = styled.Text`
  text-align: center;
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  flex-wrap: wrap;
  color: ${colors.mediumGray};
  flex-wrap: wrap;
  /* background: purple; */
`;

export const ValueAcumulated = styled.Text`
  text-align: center;
  font-size: ${hp(constants.font_size_md_pc)}px;
  font-family: ${constants.font_family_bold};
  flex-wrap: wrap;
  color: ${colors.primaryDark};
  flex-wrap: wrap;
  /* background: purple; */
`;

export const List = styled(Ionicons).attrs({
  name: 'ios-bookmarks-outline',
  color: colors.primary,
  size: hp('8%'),
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

export const PencilSignIcon = styled(FontAwesome).attrs({
  name: 'pencil-square-o',
  color: colors.primary,
  size: hp('9%'),
})`
  background-color: ${colors.white};
`;
