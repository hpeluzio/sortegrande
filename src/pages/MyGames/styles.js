import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors, constants } from '~/styles';

import Spinner from '~/images/spinner.gif';

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${colors.background};
  /* background-color: blue; */
`;

export const RefreshControl = styled.RefreshControl``;

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.background};
  /* background: ${colors.background}; */
  /* background: red; */
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${hp('1%')}px;
  padding-bottom: ${hp('1%')}px;
  padding-left: ${hp('1%')}px;
  padding-right: ${hp('1%')}px;
  background: ${colors.white};
  background-color: ${colors.background};
  /* background: green; */
`;

export const GameCard = styled.View`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  padding: ${hp('1%')}px;
  border-radius: ${hp('2%')}px;
  margin-bottom: ${hp('4%')}px;
  /* border-width: ${hp('0.35%')}px; */
  border-color: ${colors.lightGray};
  background: ${colors.white};
  /* background: orange; */
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

export const NameSquareLeft = styled.View`
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
  background: ${colors.background};
  /* background: green; */
`;

export const NameSquareRight = styled.View`
  flex: 2;
  flex-direction: row;
  align-self: stretch;
  margin: ${hp('0.25%')}px;
  padding: ${hp('1%')}px;
  /* width: ${wp('60%')}px; */
  /* height: ${hp('6%')}px; */
  align-items: center;
  justify-content: center;
  border-radius: ${hp('1%')}px;
  /* border-color: ${colors.mediumGray};
  border-left-width: ${wp('0.5%')}px; */
  background: ${colors.background};
  /* background: green; */
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
  /* text-transform: uppercase; */
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  color: ${colors.mediumGray};
`;

export const WonText = styled.Text`
  color: ${colors.black};
  /* text-transform: uppercase; */
  font-size: ${hp(constants.font_size_pc)}px;
  font-family: ${constants.font_family_semi_bold};
  color: ${colors.white};
`;

export const Left = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: ${wp('2%')}px;
  /* width: ${wp('16%')}px; */
  /* height: ${hp('15%')}px; */
  /* margin-left: ${wp('2%')}px; */
  /* background: red; */
  border-radius: ${wp('3.5%')}px;
  /* margin-bottom: ${wp('2%')}px; */
  /* border-width: ${wp('0.2%')}px; */
  border-color: ${colors.mediumGray};
  background: ${colors.background};
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
  background: ${props => (props.color ? '#1a8cff' : colors.primary)};
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
  padding: ${hp('2%')}px;
  align-items: center;
  justify-content: center;
  /* background: red; */
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

export const LoadingGif = styled.Image.attrs({
  source: Spinner,
  resizeMode: 'contain',
})`
  height: ${hp('20%')}px;
  justify-content: center;
  margin-top: ${hp('30%')}px;
  align-self: center;
  background-color: rgba(0, 0, 0, 0);
`;

export const Loader = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#fff',
})``;
