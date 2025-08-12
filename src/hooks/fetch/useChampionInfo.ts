import useFetch from '@/hooks/fetch/useFetch.ts';
import { CHAMPION_INFO_URL } from '@/api/url.ts';

export default function useChampionInfo({ enabled }) {
  const { data, isLoading, isError } = useFetch({
    key: 'championInfo',
    value: '',
    url: CHAMPION_INFO_URL,
    options: {
      enabled,
    },
  });

  const championData = data ? Object.values(data.data) : [];

  return { data: championData, isLoading, isError };
}
