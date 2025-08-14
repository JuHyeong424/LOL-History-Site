import styled from '@emotion/styled';
import theme from '@/styles/theme/theme.ts';

export const BestChampionWrapper = styled.div`
  text-align: center;
  padding: ${theme.spacing.spacing4} 0;
  ${theme.typography.title2Bold};
  background-color: ${theme.colors.blue100};
  border-radius: ${theme.spacing.spacing1};
`;

export const BestChampionTitle = styled.h3`
  ${theme.typography.title2Bold};
`;

export const BestChampionImageWrapper = styled.div`
  display: inline-block;
`;

export const BestChampionImage = styled.img`
  width: ${theme.spacing.spacing10};
  border-radius: 50%;
  margin: ${theme.spacing.spacing3};
`;
