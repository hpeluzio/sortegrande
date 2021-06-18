import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import Feather from 'react-native-vector-icons/Feather';

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
  margin-top: ${hp('2%')}px;
  margin-bottom: ${hp('2%')}px;
  /* background: orange; */
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
`;

export const List = styled(Feather).attrs({
  name: 'list',
  color: colors.mediumGray,
  size: hp('10%'),
})`
  background-color: ${colors.white};
`;

export const PlayIcon = styled(Feather).attrs({
  name: 'user',
  color: colors.mediumGray,
  size: hp('5%'),
})`
  background-color: ${colors.white};
`;
