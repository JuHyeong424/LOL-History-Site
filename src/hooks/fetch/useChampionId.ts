import useFetch from '@/hooks/fetch/useFetch.ts';
import { CHAMPION_ID } from '@/api/url.ts';
import type { userInfoProps } from '@/types/user.ts';
import type { ChampionData } from '@/types/champion/championId.ts';

export default function useChampionId({ puuid, enabled }: userInfoProps) {
  const { data, isLoading, isError } = useFetch<ChampionData[]>({
    key: 'useChampionId',
    value: puuid,
    url: CHAMPION_ID(puuid),
    options: {
      enabled,
    },
  });

  return { data, isLoading, isError };
}
