import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';

interface useFetchProps<T> {
  key: string;
  value: string;
  url: string;
  options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>;
}

export default function useFetch<T>({ key, value, url, options }: useFetchProps<T>) {
  const fetch = async (): Promise<T> => {
    const res = await axios.get(url);
    return res.data;
  };

  const { data, isLoading, isError, refetch } = useQuery<T>({
    queryKey: [key, value],
    queryFn: fetch,
    enabled: false,
    ...options,
  });

  return { data, isLoading, isError, refetch };
}
