import type { UserData } from '@/types/user.ts';

interface UserInfoProps {
  userData: UserData | undefined;
  userIsLoading: boolean;
  userIsError: boolean;
}

export default function UserInfo({ userData, userIsLoading, userIsError }: UserInfoProps) {
  console.log(userData);

  if (userIsLoading) return <p>로딩 중...</p>;

  return (
    <>
      {userIsError && <p>유저 정보를 불러올 수 없습니다.</p>}
      {userData && (
        <>
          <p>userData.puuid: {userData.puuid}</p>
          <p>userData.profileIconId: {userData.profileIconId}</p>
          <p>userData.revisionDate: {userData.revisionDate}</p>
          <p>userData.summonerLevel: {userData.summonerLevel}</p>
        </>
      )}
    </>
  );
}
