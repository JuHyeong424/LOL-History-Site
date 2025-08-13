import styled from '@emotion/styled';
import theme from '@/styles/theme/theme.ts';

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: ${theme.spacing.spacing5};

`;

export const SearchNameInput = styled.input`
  border: 1px solid ${theme.colors.gray600};
  margin: ${theme.spacing.spacing3};
  border-radius: ${theme.spacing.spacing2};
  height: ${theme.spacing.spacing10};
  padding: ${theme.spacing.spacing2};
  width: ${theme.viewport.vh40};
`;

export const SearchButton = styled.button`
  margin: ${theme.spacing.spacing3};
  border: none;
  border-radius: ${theme.spacing.spacing2};
  background-color: ${theme.colors.blue400};
  color: ${theme.colors.blue00};
  font-weight: bold;
  width: ${theme.viewport.vh10};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.gray900};
  }
`;
