import { useQuery } from '@tanstack/react-query';
import { getCookie } from '../util/cookie';
import { authInstance } from '../util/instance';

export const useShoppingCartCheck = () => {
  const token = getCookie('access_token');
  const userType = getCookie('user_type');

  const getCart = async () => {
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
  return useQuery(['cartData'], () => getCart());
};
