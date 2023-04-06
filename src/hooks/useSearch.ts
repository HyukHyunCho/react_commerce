import { useQuery } from '@tanstack/react-query';
import { getSearchProduct } from '../services/apis';

export const useSearch = (search: string) => {
  const { data, refetch } = useQuery(['searchData'], () =>
    getSearchProduct(search)
  );
  return { data, refetch };
};
