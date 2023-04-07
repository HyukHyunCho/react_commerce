import { useQuery } from '@tanstack/react-query';
import { getCart } from '../services/apis';

export const useShoppingCartCheck = () => {
  return useQuery(['cartData'], () => getCart());
};
