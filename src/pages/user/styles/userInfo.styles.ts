import styled from '@emotion/styled';
import theme from '@/styles/theme/theme.ts';

export const UserInfoWrapper = styled.div`
  border: 1px solid ${theme.colors.gray900};
  border-radius: ${theme.spacing.spacing1};
  display: flex;
  flex-direction: row;
  padding: ${theme.spacing.spacing4};
`;

export const UserLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.spacing1};
`;

export const UserRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.spacing4};
`;

export const UserName = styled.span`
  ${theme.typography.title2Bold};
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.spacing2};
`;

export const UserIcon = styled.img`
  width: ${theme.spacing.spacing26};
  border-radius: 50%;
`;

export const LatestRevision = styled.span`
  font-size: ${theme.spacing.spacing3};
`;

export const UserLevel = styled.span`
  font-size: ${theme.spacing.spacing4};
  margin-bottom: ${theme.spacing.spacing2};
`;
