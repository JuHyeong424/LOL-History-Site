import useFetch from '@/hooks/fetch/useFetch.ts';
import { SPELL_INFO } from '@/api/url.ts';
import type { SummonerJsonResponse } from '@/types/spell.ts';

export default function useSpellInfo() {
  const { data, isLoading, isError } = useFetch<SummonerJsonResponse>({
    key: 'spellInfo',
    value: '',
    url: SPELL_INFO,
    options: {
      enabled: true,
    },
  });

  const findSpellImage = (id: number) => {
    if (!data || !data.data) return undefined;
    const spell = Object.values(data.data).find((spell) => Number(spell.key) === id);
    return spell?.image.full;
  };

  return {
    spellData: data,
    spellDataIsLoading: isLoading,
    spellDataIsError: isError,
    findSpellImage,
  };
}
