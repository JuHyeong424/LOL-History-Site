import useFetch from '@/hooks/fetch/useFetch.ts';
import { PUIID_URL } from '@/api/url.ts';
import type { PuuidData } from '@/types/user.ts';

export default function useUserPuuid(userName: string) {
  const { data, isLoading, isError, refetch } = useFetch<PuuidData>({
    key: 'userPuuidQuery',
    value: userName,
    url: PUIID_URL(userName),
  });

  const onClickHandle = () => {
    if (userName.trim() === '') {
      return;
    }
    refetch();
  };

  return { data, isLoading, isError, onClickHandle };
}
