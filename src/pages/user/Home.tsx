import { useState } from 'react';
import useUserPuuid from '@/hooks/fetch/useUserPuuid.ts';
import Search from '@/pages/user/components/Search.tsx';
import UserInfo from '@/pages/user/components/UserInfo.tsx';
import useUserInfo from '@/hooks/fetch/useUserInfo.ts';
import UserGameInfo from '@/pages/user/components/UserGameInfo.tsx';
import useUserGameInfo from '@/hooks/fetch/useUserGameInfo.ts';
import useMatchId from '@/hooks/fetch/useMatchId.ts';
import MatchInfo from '@/pages/user/components/MatchInfo.tsx';

export default function Home() {
  const [userName, setUserName] = useState<string>('');

  const {
    data: puuidData,
    isLoading: puuidIsLoading,
    isError: puuidIsError,
    onClickHandle,
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

  const [visibleMatchId, setVisibleMatchId] = useState(5);

  const handleLoadMore = () => {
    setVisibleMatchId((prevCount) => prevCount + 5);
  };

  const visibleMatchIds = (matchId ?? []).slice(0, visibleMatchId);

  console.log(puuidData);
  console.log('matchId: ', matchId);

  if (puuidIsLoading || matchIdIsLoading) return <span>...Loading</span>;
  if (puuidIsError || matchIdIsError) return <p>해당 사용자를 찾을 수 없습니다.</p>;

  return (
    <>
      <Search setUserName={setUserName} onClickHandle={onClickHandle} />
      <UserInfo userData={userData} userIsLoading={userIsLoading} userIsError={userIsError} />
      <UserGameInfo
        userGameData={userGameData}
        userGameIsLoading={userGameIsLoading}
        userGameIsError={userGameIsError}
      />
      {puuidData && (
        <>
          <p>puuidData.puuid: {puuidData.puuid}</p>
          <p>puuidData.gameName: {puuidData.gameName}</p>
          <p>puuidData.tagLine: {puuidData.tagLine}</p>
        </>
      )}
      {matchId && matchId.map((item) => <p key={item}>{item}</p>)}
      {matchId && visibleMatchIds.map((matchId) => <MatchInfo key={matchId} matchId={matchId} />)}
      {visibleMatchId < (matchId?.length ?? 0) && <button onClick={handleLoadMore}>더 보기</button>}
    </>
  );
}
