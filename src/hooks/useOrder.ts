import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import { addOrder } from '../services/apis';
import { authInstance } from '../util/instance';
import { getToken } from '../util/cookie';
import { BASE_URL } from '../constants/url';

export const useOrder = () => {
  const getOrder = async (page: string) => {
    const { data } = await authInstance.get(page, {
      headers: {
        Authorization: `JWT ${getToken()}`,
      },
    });
    return data;
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
    ['orderData'],
    ({ pageParam = BASE_URL + '/order/' }) => getOrder(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
  };
};

export const useAddOrder = () => {
  return useMutation((formData: FieldValues) => addOrder(formData));
};
