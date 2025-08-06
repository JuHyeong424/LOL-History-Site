import type { UserData } from '@/types/user.ts';
import { PROFILE_ICON_URL } from '@/api/url.ts';

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
          <img src={PROFILE_ICON_URL(userData.profileIconId)} alt="소환사 프로필 아이콘" />
          <p>userData.revisionDate: {userData.revisionDate}</p>
          <p>userData.summonerLevel: {userData.summonerLevel}</p>
        </>
      )}
    </>
  );
}
