import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_REGISTER_KEY } from '../endpoints';
import { User } from '../types';

type RegisterUserResponse = {
  user: User;
  access_token: string;
};

type RegisterUserParams = {
  email: string;
  password: string;
  name: string;
};

type UseRegisterUserParam = UseMutationOptions<
  RegisterUserResponse,
  AxiosError,
  RegisterUserParams
>;

export const useRegisterUser = ({ ...options }: UseRegisterUserParam) => {
  const { api } = useAxios();
  const { isLoading, mutate } = useMutation<RegisterUserResponse, AxiosError, RegisterUserParams>(
    [USER_REGISTER_KEY],
    async (requestData) => await api.post(Endpoints.user(), requestData).then((res) => res.data),
    {
      ...options,
      onSuccess(data, variables, context) {
        options.onSuccess?.(data, variables, context);
        toast('Usuário logado');
      },
    },
  );

  return {
    registerUserIsLoading: isLoading,
    registerUserMutate: mutate,
  };
};
