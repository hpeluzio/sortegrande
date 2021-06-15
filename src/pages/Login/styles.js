import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';

import { colors, constants } from '~/styles';
// import TrevoSVG from '~/components/TrevoSVG';
import Trevo from '~/images/trevo.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  height: ${hp('100%')}px;
  width: ${wp('100%')}px;
  background: ${colors.white};
  /* align-items: center; */
  justify-content: center;
  padding: ${wp('10%')}px;
`;

export const Back = styled.View`
  height: ${hp('100%')}px;
  width: ${wp('100%')}px;
  background: ${colors.primary};
  position: absolute;
  top: -${hp('90%')}px;
  right: 0;
  border-radius: ${hp('10%')}px;
`;

export const Logo = styled.Image.attrs({
  source: Trevo,
  resizeMode: 'contain',
})`
  height: ${wp('50%')}px;
  background: ${colors.white};
  align-self: center;
  justify-content: center;
  padding: ${wp('10%')}px;
  background-color: 'rgba(52, 52, 52, 0.0)';
`;

// export const Logo = styled(TrevoSVG)`
//   align-self: center;
//   justify-content: center;
//   background: ${colors.white};
// `;

// export const Logo = styled.View`
//   height: ${wp('30%')}px;
//   width: ${wp('100%')}px;
//   background: ${colors.black};
//   align-items: center;
//   justify-content: center;
//   padding: ${wp('10%')}px;
// `;

export const Label = styled.Text`
  font-size: ${hp(constants.font_size_pc)};
  font-family: ${constants.font_family_medium};
  color: ${colors.primaryDark};
  margin-bottom: ${hp('0.25%')}px;
  margin-left: ${hp(constants.font_size_pc_two)}px;
  margin-top: ${hp('1%')}px;
`;

export const Username = styled.TextInput`
  height: ${hp(constants.height_eight_pc)}px;
  width: ${wp('80%')}px;
  border: ${hp('0.2%')}px solid ${colors.primary};
  border-radius: ${hp(constants.font_size_pc)}px;
  font-size: ${hp(constants.font_size_xl_pc)}px;
  font-family: ${constants.font_family};
  color: ${colors.mediumGray};
  padding: 0 ${hp(constants.font_size_pc_two)}px;
`;

export const Password = styled.TextInput.attrs({
  secureTextEntry: true,
})`
  height: ${hp(constants.height_eight_pc)}px;
  width: ${wp('80%')}px;
  border: ${hp('0.2%')}px solid ${colors.primary};
  border-radius: ${hp(constants.font_size_pc)}px;
  font-size: ${hp(constants.font_size_xl_pc)}px;
  font-family: ${constants.font_family};
  color: ${colors.mediumGray};
  padding: 0 ${hp(constants.font_size_pc_two)}px;
`;
