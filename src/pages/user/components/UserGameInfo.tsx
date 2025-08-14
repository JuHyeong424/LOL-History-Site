import type { userGameData } from '@/types/user.ts';
import {
  QueueType,
  Tier,
  TierImage,
  UserGameInfoWrapper,
} from '@/pages/user/styles/userGameInfo.styles.ts';

interface UserGameInfoProps {
  userGameData: userGameData[] | undefined;
  userGameIsLoading: boolean;
  userGameIsError: boolean;
}

export default function UserGameInfo({
  userGameData,
  userGameIsLoading,
  userGameIsError,
}: UserGameInfoProps) {
  console.log('userGameData', userGameData);

  if (userGameData && userGameData.length === 0)
    return <UserGameInfoWrapper>올해 데이터가 없습니다.</UserGameInfoWrapper>;
  if (userGameIsLoading) return <p>로딩 중...</p>;
  if (userGameIsError) return <p>유저 정보를 불러올 수 없습니다.</p>;

  return (
    <>
      {userGameData &&
        userGameData.map((data, index) => {
          const totalGames = data.wins + data.losses;
          const winRate = totalGames > 0 ? ((data.wins / totalGames) * 100).toFixed(1) : '0.0';

          return (
            <UserGameInfoWrapper key={index}>
              {data.queueType === 'RANKED_SOLO_5x5' && <QueueType>개인/2인 랭크</QueueType>}
              <TierImage
                src={`src/assets/tierAmbler/${data.tier.toLowerCase()}.png`}
                alt="티어 이미지"
              />
              {data.tier !== 'MASTER' &&
              data.tier !== 'GRANDMASTER' &&
              data.tier !== 'CHALLENGER' ? (
                <Tier>
                  {data.tier} {data.rank}
                </Tier>
              ) : (
                <Tier>{data.tier}</Tier>
              )}
              <p>
                {totalGames}전 {data.wins}승 {data.losses}패
              </p>
              <p>승률 {winRate}%</p>
            </UserGameInfoWrapper>
          );
        })}
    </>
  );
}
