// import Cookies from 'universal-cookie';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function setTokenCookie(token: string) {
  cookies.set('access_token', token, {
    path: '/',
    secure: true,
    sameSite: 'none',
  });
}

export function setUserTypeCookie(userType: string) {
  cookies.set('user_type', userType, {
    path: '/',
    secure: true,
    sameSite: 'none',
  });
}

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const getUserType = () => {
  return cookies.get('user_type');
};

export const removeCookie = () => {
  cookies.remove('access_token', { path: '/' });
  cookies.remove('user_type', { path: '/' });
};
