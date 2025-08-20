import styled from '@emotion/styled';
import theme from '@/styles/theme/theme.ts';

export const MatchInfoWrapper = styled.div<{ win: boolean }>`
  padding: ${theme.spacing.spacing3};
  margin: ${theme.spacing.spacing5} 0;
  border-radius: ${theme.spacing.spacing2};
  background-color: ${({ win }) => (win ? `${theme.colors.blue500}` : `${theme.colors.red500}`)};
  font-weight: bold;
`;

export const GameStatus = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.spacing4};

  div {
    display: flex;
  }
  p {
    padding: ${theme.spacing.spacing1};
  }
`;

export const PlayerStatus = styled.div`
  display: flex;
  gap: ${theme.spacing.spacing4};
  align-items: center;
  background-color: white;
  padding: ${theme.spacing.spacing4};
  border-radius: ${theme.spacing.spacing2};
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  border-radius: ${theme.spacing.spacing1};
  background-color: ${theme.colors.gray1000};
  min-height: ${theme.viewport.vh20};
`;

export const ChampionImage = styled.img`
  width: ${theme.spacing.spacing30};
  height: auto;
  border-radius: ${theme.spacing.spacing1};
`;

export const SpellRuneContent = styled.div<{ rune: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ rune }) => (rune ? 'center' : 'flex-start')};
  background-color: ${theme.colors.gray1000};
`;

export const SpellImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: ${theme.spacing.spacing7};
  }
`;

export const RuneImageWrapper = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: ${theme.spacing.spacing7};
  }
`;

export const MatchKDAInfo = styled.div`
  p {
    font-size: ${theme.spacing.spacing3};
    margin: ${theme.spacing.spacing2} 0;
  }
`;

export const ItemStatus = styled.div`
  display: flex;
  gap: ${theme.spacing.spacing1};

  img {
    width: ${theme.spacing.spacing8};
    border: 2px solid ${theme.colors.gray700};
    border-radius: ${theme.spacing.spacing1};
    margin: ${theme.spacing.spacing1};
  }
`;

export const ItemBox = styled.div`
  width: ${theme.spacing.spacing8};
  height: ${theme.spacing.spacing8};
  background-color: ${theme.colors.gray300};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.spacing.spacing1};
`;

export const MoreButton = styled.button`
  display: flex;
  margin: 0 auto;
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding-top: ${theme.spacing.spacing3};
`;

export const ParticipantLists = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${theme.spacing.spacing3};
  border: 1.25px solid ${theme.colors.gray800};
  border-radius: ${theme.spacing.spacing2};
  padding: ${theme.spacing.spacing3};
`;

export const VS = styled.p`
  flex: 0.2;
  text-align: center;
`;

export const AllyTeam = styled.div`
  flex: 1;
`;

export const ChampionIcon = styled.img`
  width: ${theme.spacing.spacing4};
  height: ${theme.spacing.spacing4};
`;

export const EnemyTeam = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
`;

export const TeamList = styled.div`
  display: flex;
  alignitems: 'center';
  gap: ${theme.spacing.spacing1};
  margin-bottom: ${theme.spacing.spacing1};
`;
