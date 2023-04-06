import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import { getCookie } from '../util/cookie';
import { authInstance } from '../util/instance';

interface IFormProduct {
  image: string;
  product_name: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  product_info: string;
}

export const useSellerProduct = () => {
  const token = getCookie('access_token');

  const geSellerProduct = async () => {
    const {
      data: { results },
    } = await authInstance.get(`/seller/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return results;
  };

  return useQuery(['sellerData'], () => geSellerProduct());
};

export const useAddProduct = () => {
  const token = getCookie('access_token');

  const addProduct = async (submitFormData: IFormProduct) => {
    const res = await authInstance.post(`/products/`, submitFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `JWT ${token}`,
      },
    });
    return res;
  };
  return useMutation((submitFormData: any) => addProduct(submitFormData));
};

export const useUpdateProduct = () => {
  const token = getCookie('access_token');
  const updateProduct = async (data: {
    submitFormData: FieldValues;
    id: number;
  }) => {
    const res = await authInstance.patch(
      `/products/${data.id}/`,
      data.submitFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `JWT ${token}`,
        },
      }
    );
    return res;
  };
  return useMutation((data: { submitFormData: FieldValues; id: number }) =>
    updateProduct(data)
  );
};

export const useDeleteProduct = () => {
  const token = getCookie('access_token');
  const queryClient = useQueryClient();

  const deleteProduct = async (id: number) => {
    await authInstance.delete(`/products/${id}/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
  };

  return useMutation((id: number) => deleteProduct(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['sellerData']);
    },
  });
};
