import type { UserData } from '@/types/user.ts';
import { PROFILE_ICON_URL } from '@/api/url.ts';
import {
  LatestRevision,
  UserIcon,
  UserInfoWrapper, UserLeft,
  UserLevel,
  UserName, UserRight,
} from '@/pages/user/styles/userInfo.styles.ts';

interface UserInfoProps {
  userData: UserData | undefined;
  userIsLoading: boolean;
  userIsError: boolean;
}

export default function UserInfo({ puuidData, userData, userIsLoading, userIsError }: UserInfoProps) {
  console.log('userData', userData);

  const date = new Date(Number(userData?.revisionDate)).toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
  });

  if (userIsLoading) return <p>로딩 중...</p>;
  if (userIsError) return <p>유저 정보를 불러올 수 없습니다.</p>;

  return (
    <>
      {userData && (
        <UserInfoWrapper>
          <UserLeft>
            <UserIcon src={PROFILE_ICON_URL(userData.profileIconId)} alt="소환사 프로필 아이콘" />
            <UserLevel>Lv.{userData.summonerLevel}</UserLevel>
          </UserLeft>
          <UserRight>
            <UserName>{puuidData.gameName}</UserName>
            <LatestRevision>마지막 갱신일: {date}</LatestRevision>
          </UserRight>
        </UserInfoWrapper>
      )}
    </>
  );
}
