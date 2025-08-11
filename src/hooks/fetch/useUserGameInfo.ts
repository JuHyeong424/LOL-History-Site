import useFetch from '@/hooks/fetch/useFetch.ts';
import { USER_GAME_INFO_URL } from '@/api/url.ts';
import type { userGameData, userInfoProps } from '@/types/user.ts';

export default function useUserGameInfo({ puuid, enabled }: userInfoProps) {
  const { data, isLoading, isError } = useFetch<userGameData[]>({
    key: 'userGameInfo',
    value: puuid,
    url: USER_GAME_INFO_URL(puuid),
    options: {
      enabled,
    },
  });

  return { data, isLoading, isError };
}
