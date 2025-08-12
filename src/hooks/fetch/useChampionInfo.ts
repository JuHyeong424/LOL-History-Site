import useFetch from '@/hooks/fetch/useFetch.ts';
import { CHAMPION_INFO_URL } from '@/api/url.ts';
import type { ChampionResponse } from '@/types/champion/championInfo.ts';

interface useChampionInfoProps {
  enabled: boolean;
}

export default function useChampionInfo({ enabled }: useChampionInfoProps) {
  const { data, isLoading, isError } = useFetch<ChampionResponse>({
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
