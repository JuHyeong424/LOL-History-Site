import useFetch from '@/hooks/fetch/useFetch.ts';
import { SUMMONER_URL } from '@/api/url.ts';
import type { UserData, userInfoProps } from '@/types/user.ts';

export default function useUserInfo({ puuid, enabled }: userInfoProps) {
  const { data, isLoading, isError } = useFetch<UserData>({
    key: 'userInfoQuery',
    value: puuid,
    url: SUMMONER_URL(puuid),
    options: {
      enabled,
    },
  });

  return { data, isLoading, isError };
}
