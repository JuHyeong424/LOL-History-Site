import styled from '@emotion/styled';
import theme from '@/styles/theme/theme.ts';

export const HeaderWrapper = styled.div`
  max-width: ${theme.viewSize.mobile};
  height: ${theme.viewport.vh10};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${theme.spacing.spacing0} auto;
  background-color: ${theme.colors.blue400};
  padding: ${theme.spacing.spacing5};
`;

export const TopHeader = styled.h1`
  ${theme.typography.title1Bold};
  color: ${theme.colors.gray00};
`;
