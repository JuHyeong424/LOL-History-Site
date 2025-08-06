import { useState } from 'react';
import useUserPuuid from '@/hooks/fetch/useUserPuuid.ts';
import Search from '@/pages/user/components/Search.tsx';
import UserInfo from '@/pages/user/components/UserInfo.tsx';

export default function User() {
  const [userName, setUserName] = useState<string>('');

  const { data, isLoading, isError, onClickHandle } = useUserPuuid(userName);

  console.log(data);

  if (isLoading) return <span>...Loading</span>;

  return (
    <>
      <Search setUserName={setUserName} onClickHandle={onClickHandle} />
      {data && <UserInfo puuid={data.puuid} />}
      {isError && <p>해당 사용자를 찾을 수 없습니다.</p>}
      {data && (
        <>
          <p>{data.puuid}</p>
          <p>{data.gameName}</p>
          <p>{data.tagLine}</p>
        </>
      )}
    </>
  );
}
