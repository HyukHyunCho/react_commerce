import axios from 'axios';
import { BASE_URL } from '../constants/url';
import { getCookie } from './cookie';

export const instance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: false,
});

export const authInstance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `JWT ${getCookie('access_token')}`,
  },
});

export const authImageInstance = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `JWT ${getCookie('access_token')}`,
  },
});
