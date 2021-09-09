import styled from 'styled-components';

import { colors } from '~/styles';

export { default as CustomInputText } from '~/components/CustomInputText';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background: ${colors.white};
`;
