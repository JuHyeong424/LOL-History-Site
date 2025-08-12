import useFetch from '@/hooks/fetch/useFetch.ts';
import { CHAMPION_ID } from '@/api/url.ts';

export default function useChampionId({ puuid, enabled }) {
  const { data, isLoading, isError } = useFetch({
    key: 'useChampionId',
    value: puuid,
    url: CHAMPION_ID(puuid),
    options: {
      enabled,
    },
  });

  return { data, isLoading, isError };
}
