import useFetch from '@/hooks/fetch/useFetch.ts';
import { SUMMONER_URL } from '@/api/url.ts';
import type { UserData } from '@/types/user.ts';

interface useUserInfoProps {
  puuid: string;
  enabled: boolean;
}

export default function useUserInfo({ puuid, enabled }: useUserInfoProps) {
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
