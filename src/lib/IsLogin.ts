import { getToken } from '../util/cookie';

export const isLogin = () => getToken();
// export const isLogout = () => localStorage.removeItem("token_");
// export const addAccount = () => localStorage.getItem("account");
// export const removeAccount = () => localStorage.removeItem("account");
