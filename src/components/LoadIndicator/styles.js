import styled from 'styled-components';

import { colors } from '~/styles';

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.primary,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
