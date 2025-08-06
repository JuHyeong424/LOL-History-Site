import { useState } from 'react';
import useUserPuuid from '@/hooks/fetch/useUserPuuid.ts';
import Search from '@/pages/user/components/Search.tsx';
import UserInfo from '@/pages/user/components/UserInfo.tsx';
import useUserInfo from '@/hooks/fetch/useUserInfo.ts';

export default function User() {
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

  console.log(puuidData);

  if (puuidIsLoading) return <span>...Loading</span>;

  return (
    <>
      <Search setUserName={setUserName} onClickHandle={onClickHandle} />
      <UserInfo userData={userData} userIsLoading={userIsLoading} userIsError={userIsError} />
      {puuidIsError && <p>해당 사용자를 찾을 수 없습니다.</p>}
      {puuidData && (
        <>
          <p>puuidData.puuid: {puuidData.puuid}</p>
          <p>puuidData.gameName: {puuidData.gameName}</p>
          <p>puuidData.tagLine: {puuidData.tagLine}</p>
        </>
      )}
    </>
  );
}
