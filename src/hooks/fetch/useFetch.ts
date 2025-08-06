import axios from 'axios';
import { PUIID_URL } from '@/api/url.ts';
import { useQuery } from '@tanstack/react-query';

export default function useFetch(userName: string) {
  const fetchUserPuuid = async () => {
    const res = await axios.get(PUIID_URL(userName));
    return res.data;
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['userPuuidQuery', userName],
    queryFn: fetchUserPuuid,
    enabled: false,
  });

  return { data, isLoading, isError, refetch };
}
