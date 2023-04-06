import { authInstance, instance } from '../util/instance';
import { FieldValues } from 'react-hook-form';

interface IFormCart {
  product_id: number;
  quantity: number;
  check: boolean;
}

interface IFormProduct {
  image: string;
  product_name: string;
  price: number;
  shipping_method: string;
  shipping_fee: number;
  stock: number;
  product_info: string;
}
export const getProductDetail = async (id: number) => {
  const { data } = await instance.get(`/products/${id}`);
  return data;
};

export const getSearchProduct = async (search: string | undefined) => {
  const {
    data: { results },
  } = await instance.get(`/products/?search=${search}`);
  return results;
};

// export const addProduct = async (submitFormData: IFormProduct) => {
//   const res = await authImageInstance.post(`/products/`, submitFormData);
//   return res;
// };

// export const updateProduct = async (data: {
//   submitFormData: FieldValues;
//   id: number;
// }) => {
//   const res = await authImageInstance.patch(
//     `/products/${data.id}/`,
//     data.submitFormData
//   );
//   return res;
// };

// export const deleteProduct = async (id: number) => {
//   await authInstance.delete(`/products/${id}/`);
// };
