import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  addCart,
  deleteCart,
  getCart,
  getProductDetail,
  updateCart,
} from '../services/apis';

interface IFormCart {
  product_id: number;
  quantity: number;
  check: boolean;
}

export const useCart = () => {
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

export const useAddCart = () => {
  return useMutation((formData: IFormCart) => addCart(formData));
};

export const useUpdateCart = () => {
  return useMutation(({ formData, id }: any) => updateCart(formData, id));
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number) => deleteCart(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['cartData']);
      queryClient.invalidateQueries(['productDetail']);
    },
  });
};
