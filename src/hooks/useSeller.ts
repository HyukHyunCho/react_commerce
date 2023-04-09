import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';

import {
  addProduct,
  deleteProduct,
  geSellerProduct,
  updateProduct,
} from '../services/apis';

export const useSellerProduct = () => {
  return useQuery(['sellerData'], () => geSellerProduct());
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
