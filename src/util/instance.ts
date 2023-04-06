import axios from 'axios';
import { BASE_URL } from '../constants/url';
// import { getCookie } from './cookie';

// const getToken = () => {
//   const userToken =
//     typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
//   return userToken || '';
// };

// const token = getCookie('access_token');

export const instance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: false,
});

export const authInstance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: `JWT ${token}`,
  // },
});
