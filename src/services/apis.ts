import { getToken, getUserType } from '../util/cookie';
import { authInstance, instance } from '../util/instance';
import { FieldValues } from 'react-hook-form';

interface IFormSignUp {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
}

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

export const signIn = async (formData: FieldValues) => {
  const { data } = await instance.post('/accounts/login/', formData);
  return data;
};

export const userIdCheck = async (username: string) => {
  const { data } = await instance.post('/accounts/signup/valid/username/', {
    username,
  });
  return data;
};

export const signUp = async (formData: FieldValues) => {
  const { data } = await instance.post('/accounts/signup/', formData);
  return data;
};

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

export const getCart = async () => {
  const token = getToken();
  const userType = getUserType();

  if (!token || userType === 'SELLER') return [];
  const {
    data: { results },
  } = await authInstance.get('/cart/', {
    headers: {
      Authorization: `JWT ${token}`,
    },
  });
  return results;
};

export const addCart = async (formData: IFormCart) => {
  const res = await authInstance.post('/cart/', formData, {
    headers: {
      Authorization: `JWT ${getToken()}`,
    },
  });
  return res;
};

export const updateCart = async (formData: IFormCart, id: number) => {
  const res = await authInstance.put(`/cart/${id}/`, formData, {
    headers: {
      Authorization: `JWT ${getToken()}`,
    },
  });
  return res;
};

export const deleteCart = async (id: number) => {
  const res = await authInstance.delete(`/cart/${id}/`, {
    headers: {
      Authorization: `JWT ${getToken()}`,
    },
  });
  return res;
};

export const geSellerProduct = async () => {
  const {
    data: { results },
  } = await authInstance.get(`/seller/`, {
    headers: {
      Authorization: `JWT ${getToken()}`,
    },
  });
  return results;
};

export const addProduct = async (submitFormData: IFormProduct) => {
  const res = await authInstance.post(`/products/`, submitFormData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${getToken()}`,
    },
  });
  return res;
};

export const updateProduct = async (data: {
  submitFormData: FieldValues;
  id: number;
}) => {
  const res = await authInstance.patch(
    `/products/${data.id}/`,
    data.submitFormData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `JWT ${getToken()}`,
      },
    }
  );
  return res;
};

export const deleteProduct = async (id: number) => {
  await authInstance.delete(`/products/${id}/`, {
    headers: {
      Authorization: `JWT ${getToken()}`,
    },
  });
};

export const getOrder = async () => {
  const {
    data: { results },
  } = await authInstance.get(`/order/`, {
    headers: {
      Authorization: `JWT ${getToken()}`,
    },
  });
  return results;
};

export const addOrder = async (formData: FieldValues) => {
  const res = await authInstance.post('/order/', formData, {
    headers: {
      Authorization: `JWT ${getToken()}`,
    },
  });
  return res;
};
