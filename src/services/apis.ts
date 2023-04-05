import { authInstance, instance } from '../util/instance';

interface IFormCart {
  product_id: number;
  quantity: number;
  check: boolean;
}

export const getProductDetail = async (id: number) => {
  const { data } = await instance.get(`/products/${id}`);
  return data;
};

export const getCart = async () => {
  const {
    data: { results },
  } = await authInstance.get('/cart/');
  return results;
};

export const addCart = async (formData: IFormCart) => {
  const res = await authInstance.post('/cart/', formData);
  return res;
};

export const deleteCart = async (id: number) => {
  const res = await authInstance.delete(`/cart/${id}/`);
  return res;
};
