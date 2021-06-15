import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import { colors, constants } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  height: ${hp('100%')}px;
  height: ${wp('100%')}px;
  background: ${colors.primary};

  align-items: center;
  justify-content: center;
  /* align-items: center;
  justify-content: center;
  min-height: ${wp('20%')}px;
  background: white;
  margin-top: ${wp('2%')}px;
  margin-bottom: ${wp('2%')}px;
  margin-left: ${wp('2%')}px;
  margin-right: ${wp('2%')}px; */
`;

export const Welcome = styled.Text`
  color: ${colors.white};
  font-size: ${hp('6%')}px;
  font-family: ${constants.font_family_semi_bold};
  /* align-items: center;
  justify-content: center;
  min-height: ${wp('20%')}px;
  background: white;
  margin-top: ${wp('2%')}px;
  margin-bottom: ${wp('2%')}px;
  margin-left: ${wp('2%')}px;
  margin-right: ${wp('2%')}px; */
`;
