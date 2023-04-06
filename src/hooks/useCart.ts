import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { authInstance } from '../util/instance';
import { getCookie } from '../util/cookie';
import { getProductDetail } from '../services/apis';

interface IFormCart {
  product_id: number;
  quantity: number;
  check: boolean;
}

export const useCart = () => {
  const token = getCookie('access_token');

  const getCart = async () => {
    const {
      data: { results },
    } = await authInstance.get('/cart/', {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return results;
  };

  const { data } = useQuery(['cartData'], () => getCart());

  const cartQueries = useQueries({
    queries:
      data === undefined
        ? []
        : data.map((item: { product_id: number }) => {
            return {
              queryKey: ['productDetail', item.product_id],
              queryFn: () => getProductDetail(Number(item.product_id)),
            };
          }),
  });

  return {
    data,
    cartQueries,
  };
};

export const useCreateCart = () => {
  const token = getCookie('access_token');

  const addCart = async (formData: IFormCart) => {
    const res = await authInstance.post('/cart/', formData, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return res;
  };

  return useMutation((formData: IFormCart) => addCart(formData));
};

// export const useUpdateCart = () => {
//   const token = getCookie('access_token');
//   const updateCart = async (formData: IFormCart, id: number) => {
//     const res = await authInstance.put(`/cart/${id}/`, formData, {
//       headers: {
//         Authorization: `JWT ${token}`,
//       },
//     });
//     return res;
//   };

//   return useMutation(({ formData, id }: any) => updateCart(formData, id));
// };

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  const token = getCookie('access_token');

  const deleteCart = async (id: number) => {
    const res = await authInstance.delete(`/cart/${id}/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return res;
  };

  return useMutation((id: number) => deleteCart(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cartData']);
      queryClient.invalidateQueries(['productDetail']);
    },
  });
};
