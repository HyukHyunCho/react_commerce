import { useMutation } from '@tanstack/react-query';
import { instance } from '../util/instance';

interface IFormValue {
  username: string;
  password: string;
  login_type: string;
}

interface IFormSignUp {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
}

export const useLogin = () => {
  const signin = async (formData: IFormValue) => {
    const { data } = await instance.post('/accounts/login/', formData);
    return data;
  };

  return useMutation((formData: IFormValue) => signin(formData));
};

export const useIdCheck = () => {
  const userIdCheck = async (username: string) => {
    const { data } = await instance.post('/accounts/signup/valid/username/', {
      username,
    });
    return data;
  };
  return useMutation((username: string) => userIdCheck(username));
};

export const useSignUp = () => {
  const signUp = async (formData: IFormSignUp) => {
    const { data } = await instance.post('/accounts/signup/', formData);
    return data;
  };
  return useMutation((formData: IFormSignUp) => signUp(formData));
};
