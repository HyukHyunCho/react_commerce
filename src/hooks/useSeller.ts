import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';

import { addProduct, deleteProduct, updateProduct } from '../services/apis';
import { authInstance } from '../util/instance';
import { getToken } from '../util/cookie';
import { BASE_URL } from '../constants/url';

export const useSellerProduct = () => {
  const getSellerProduct = async (page: string) => {
    const { data } = await authInstance.get(page, {
      headers: {
        Authorization: `JWT ${getToken()}`,
      },
    });

    return data;
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['sellerProduct'],
    ({ pageParam = BASE_URL + '/seller/' }) => getSellerProduct(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );

  return {
    data,
    fetchNextPage,
    hasNextPage,
  };
};
export const useAddProduct = () => {
  return useMutation((submitFormData: any) => addProduct(submitFormData));
};

export const useUpdateProduct = () => {
  return useMutation((data: { submitFormData: FieldValues; id: number }) =>
    updateProduct(data)
  );
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation((id: number) => deleteProduct(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['sellerData']);
    },
  });
};
