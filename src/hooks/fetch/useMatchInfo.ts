import useFetch from '@/hooks/fetch/useFetch.ts';
import { MATCH_INFO } from '@/api/url.ts';
import type { matchInfoProps } from '@/types/match-v5/match.ts';
import type { MatchDto } from '@/types/match-v5';

export default function useMatchInfo({ matchId, enabled }: matchInfoProps) {
  const { data, isLoading, isError } = useFetch<MatchDto>({
    key: 'matchInfo',
    value: matchId,
    url: MATCH_INFO(matchId),
    options: {
      enabled,
    },
  });

  return { data, isLoading, isError };
}
