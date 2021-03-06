import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';

export const Container = styled.View`
  position: absolute;
  width: ${wp('200%')}px;
  height: ${hp('200%')}px;
  z-index: -1;
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: flex-end; */
  /* padding-right: ${wp('15%')}px; */
  /* border-top-width: ${hp('0.2%')}px; */
  /* border-color: #ddd; */

  /* background-color: red; */
`;

export const Clover = styled(MaterialCommunityIcons).attrs({
  name: 'clover',
  size: wp('200%'),
})`
  position: relative;
  /* z-index: -1; */
  bottom: ${hp('0%')}px;
  right: ${wp('50%')}px;
  color: rgba(74, 211, 149, 0.075);
  /* background-color: purple; */
`;
