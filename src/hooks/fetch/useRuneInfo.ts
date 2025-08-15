import useFetch from '@/hooks/fetch/useFetch.ts';
import { RUNES_INFO } from '@/api/url.ts';
import type { RuneTree } from '@/types/rune.ts';

export default function useRuneInfo() {
  const { data, isLoading, isError } = useFetch<RuneTree[]>({
    key: 'runeInfo',
    value: '',
    url: RUNES_INFO,
    options: {
      enabled: true,
    },
  });

  const findRuneImage = (id: number) => {
    if (!data) return null;
    for (const tree of data) {
      for (const slot of tree.slots) {
        const rune = slot.runes.find((r) => r.id === id);
        if (rune) return rune.icon;
      }
    }
    return null;
  };

  const findSecondaryRuneImage = (id: number) => {
    if (!data) return null;
    return data.find((item) => item.id === id)?.icon || null;
  };

  return {
    runeData: data,
    runeDataIsLoading: isLoading,
    runeDataIsError: isError,
    findRuneImage,
    findSecondaryRuneImage,
  };
}
