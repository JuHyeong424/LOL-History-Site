import useFetch from '@/hooks/fetch/useFetch.ts';

export default function useUserPuuid(userName: string) {
  const { data, isLoading, isError, refetch } = useFetch(userName);

  const onClickHandle = () => {
    if (userName.trim() === '') {
      return;
    }
    refetch();
  };

  return { data, isLoading, isError, onClickHandle };
}
