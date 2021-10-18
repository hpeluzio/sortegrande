import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors, constants } from '~/styles';

import Spinner from '~/images/spinner.gif';
import Empty from '~/images/empty.gif';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.background};
  /* background: ${colors.background}; */
  /* background: red; */
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  /* width: ${wp('95%')}px; */
  /* height: ${hp('6%')}px; */
  align-items: center;
  justify-content: space-around;
  border-radius: ${hp('1%')}px;
  background: ${colors.white};
  /* background: blue; */
`;

export const NotCheckedSquare = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  margin: ${hp('0.25%')}px;
  padding: ${hp('1%')}px;
  /* width: ${wp('30%')}px; */
  /* height: ${hp('6%')}px; */
  align-items: center;
  justify-content: center;
  border-radius: ${hp('1%')}px;
  /* border-color: ${colors.mediumGray}; */
  background: ${props => (props.toCheck ? colors.primary : colors.mediumGray)};
`;

export const CheckedSquare = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  margin: ${hp('0.25%')}px;
  padding: ${hp('1%')}px;
  /* width: ${wp('30%')}px; */
  /* height: ${hp('6%')}px; */
  align-items: center;
  justify-content: center;
  border-radius: ${hp('1%')}px;
  /* border-color: ${colors.mediumGray}; */
  background: ${colors.primary};
  background: ${props => (props.won ? '#99ccff' : colors.mediumGray)};
`;

export const WonText = styled.Text`
  color: ${colors.black};
  /* text-transform: uppercase; */
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  color: ${colors.white};
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#fff',
})``;
