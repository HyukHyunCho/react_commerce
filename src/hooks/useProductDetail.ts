import { useQuery } from '@tanstack/react-query';
import { getProductDetail } from '../services/apis';

export const useProductDetail = (id: number) => {
  return useQuery(['productDetailData'], () => getProductDetail(id), {
    enabled: !!id,
  });
};
