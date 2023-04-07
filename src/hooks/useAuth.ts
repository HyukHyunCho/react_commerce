import { useMutation } from '@tanstack/react-query';
import { signIn, signUp, userIdCheck } from '../services/apis';
import { FieldValues } from 'react-hook-form';

export const useLogin = () => {
  return useMutation((formData: FieldValues) => signIn(formData));
};

export const useIdCheck = () => {
  return useMutation((username: string) => userIdCheck(username));
};

export const useSignUp = () => {
  return useMutation((formData: FieldValues) => signUp(formData));
};
