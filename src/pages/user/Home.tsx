import { useState } from 'react';
import useUserPuuid from '@/hooks/fetch/useUserPuuid.ts';
import Search from '@/pages/user/components/Search.tsx';
import UserInfo from '@/pages/user/components/UserInfo.tsx';
import useUserInfo from '@/hooks/fetch/useUserInfo.ts';
import UserGameInfo from '@/pages/user/components/UserGameInfo.tsx';
import useUserGameInfo from '@/hooks/fetch/useUserGameInfo.ts';
import useMatchId from '@/hooks/fetch/useMatchId.ts';
import MatchInfo from '@/pages/user/components/MatchInfo.tsx';
import useChampionId from '@/hooks/fetch/useChampionId.ts';
import BestChampion from '@/pages/user/components/BestChampion.tsx';
import { GameChampion } from '@/pages/user/styles/home.styles.ts';

export default function Home() {
  const [userName, setUserName] = useState<string>('');

  const {
    data: puuidData,
    isLoading: puuidIsLoading,
    isError: puuidIsError,
    refetch: puuidRefetch,
  } = useUserPuuid(userName);

  const {
    data: userData,
    isLoading: userIsLoading,
    isError: userIsError,
  } = useUserInfo({ puuid: puuidData?.puuid ?? '', enabled: !!puuidData?.puuid });

  const {
    data: userGameData,
    isLoading: userGameIsLoading,
    isError: userGameIsError,
  } = useUserGameInfo({ puuid: puuidData?.puuid ?? '', enabled: !!puuidData?.puuid });

  const {
    data: matchId,
    isLoading: matchIdIsLoading,
    isError: matchIdIsError,
  } = useMatchId({ puuid: puuidData?.puuid ?? '', enabled: !!puuidData?.puuid });

  const {
    data: championId,
    isLoading: championIsLoading,
    isError: championIsError,
  } = useChampionId({ puuid: puuidData?.puuid ?? '', enabled: !!puuidData?.puuid });

  const [visibleMatchId, setVisibleMatchId] = useState(10);

  const onClickHandle = () => {
    if (userName.trim() === '') {
      return;
    }
    setVisibleMatchId(10);
    puuidRefetch();
  };

  const handleLoadMore = () => {
    setVisibleMatchId((prevCount) => prevCount + 10);
  };

  const visibleMatchIds = (matchId ?? []).slice(0, visibleMatchId);

  console.log('puuidData', puuidData);
  console.log('matchId: ', matchId);

  if (puuidIsLoading || matchIdIsLoading)
    return (
      <>
        <Search setUserName={setUserName} onClickHandle={onClickHandle} />
        <span>...Loading</span>
      </>
    );

  if (puuidIsError || matchIdIsError)
    return (
      <>
        <Search setUserName={setUserName} onClickHandle={onClickHandle} />
        <p>해당 사용자를 찾을 수 없습니다.</p>
      </>
    );

  return (
    <>
      <Search setUserName={setUserName} onClickHandle={onClickHandle} />
      <UserInfo
        puuidData={puuidData}
        userData={userData}
        userIsLoading={userIsLoading}
        userIsError={userIsError}
      />
      <GameChampion>
        <UserGameInfo
          userGameData={userGameData}
          userGameIsLoading={userGameIsLoading}
          userGameIsError={userGameIsError}
        />
        <BestChampion
          championId={championId}
          championIsLoading={championIsLoading}
          championIsError={championIsError}
        />
      </GameChampion>
      {matchId && visibleMatchIds.map((matchId) => <MatchInfo key={matchId} puuidData={puuidData} matchId={matchId} />)}
      {visibleMatchId < (matchId?.length ?? 0) && <button onClick={handleLoadMore}>더 보기</button>}
    </>
  );
}
