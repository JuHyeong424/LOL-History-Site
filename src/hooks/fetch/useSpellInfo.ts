import useFetch from '@/hooks/fetch/useFetch.ts';
import { SPELL_INFO } from '@/api/url.ts';

export default function useSpellInfo() {
  const { data, isLoading, isError } = useFetch({
    key: 'spellInfo',
    value: '',
    url: SPELL_INFO,
    options: {
      enabled: true,
    },
  });

  const findSpellImage = (id: number) => {
    if (!data || !data.data) return undefined;
    return Object.values(data.data).find(
      (spell) => Number(spell.key) === id
    ).image.full;
  };

  return { data, isLoading, isError, findSpellImage };
}
