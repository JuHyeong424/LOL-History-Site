import styled from '@emotion/styled';
import theme from '@/styles/theme/theme.ts';

export const UserGameInfoWrapper = styled.div`
  text-align: center;
  width: 30vh;
  border-radius: ${theme.spacing.spacing1};
  background-color: ${theme.colors.blue100};
  padding: ${theme.spacing.spacing4} 0;
`;

export const QueueType = styled.div`
  ${theme.typography.title2Bold};
`;

export const TierImage = styled.img`
  width: ${theme.spacing.spacing25};
`;

export const Tier = styled.div``;
