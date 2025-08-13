import type { userGameData } from '@/types/user.ts';

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

  if (userGameIsLoading) return <p>로딩 중...</p>;

  return (
    <>
      {userGameIsError && <p>유저 정보를 불러올 수 없습니다.</p>}
      {userGameData &&
        userGameData.map((userGameData, index) => (
          <div key={index}>
            <p>userGameData.leagueId: {userGameData.leagueId}</p>
            <p>userGameData.queueType: {userGameData.queueType}</p>
            <p>userGameData.tier: {userGameData.tier}</p>
            <p>userGameData.rank: {userGameData.rank}</p>
            <p>userGameData.puuid: {userGameData.puuid}</p>
            <p>userGameData.wins: {userGameData.wins}</p>
            <p>userGameData.losses: {userGameData.losses}</p>
            <p>userGameData.veteran: {userGameData.veteran}</p>
            <p>userGameData.inactive: {userGameData.inactive}</p>
            <p>userGameData.freshBlood: {userGameData.freshBlood}</p>
            <p>userGameData.hotStreak: {userGameData.hotStreak}</p>
          </div>
        ))}
    </>
  );
}
