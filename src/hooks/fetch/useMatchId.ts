import useFetch from '@/hooks/fetch/useFetch.ts';
import { MATCH_ID } from '@/api/url.ts';
import type { userInfoProps } from '@/types/user.ts';

export default function useMatchId({ puuid, enabled }: userInfoProps) {
  const { data, isLoading, isError } = useFetch<string[]>({
    key: 'matchId',
    value: puuid,
    url: MATCH_ID(puuid),
    options: {
      enabled,
    },
  });

  return { data, isLoading, isError };
}
