import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import { colors } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  height: ${hp('100%')}px;
  height: ${wp('100%')}px;
  background: ${colors.primary};

  align-items: center;
  justify-content: center;
`;
