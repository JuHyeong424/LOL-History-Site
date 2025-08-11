import useFetch from '@/hooks/fetch/useFetch.ts';
import { MATCH_ID } from '@/api/url.ts';

export default function useMatchId({ puuid, enabled }) {
  const { data, isLoading, isError } = useFetch({
    key: 'matchId',
    value: puuid,
    url: MATCH_ID(puuid),
    options: {
      enabled,
    },
  });

  return { data, isLoading, isError };
}
