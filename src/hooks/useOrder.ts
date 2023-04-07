import { useMutation, useQuery } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';
import { getOrder, addOrder } from '../services/apis';

export const useOrder = () => {
  return useQuery(['orderData'], () => getOrder());
};

export const useAddOrder = () => {
  return useMutation((formData: FieldValues) => addOrder(formData));
};
