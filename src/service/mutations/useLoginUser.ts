import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_LOGIN_KEY } from '../endpoints';
import { User } from '../types';

type LoginUserResponse = {
  user: User;
  access_token: string;
};

type LoginUserParams = {
  email: string;
  password: string;
};

type UseLoginUserParam = UseMutationOptions<LoginUserResponse, AxiosError, LoginUserParams>;

export const useLoginUser = ({ ...options }: UseLoginUserParam) => {
  const { api } = useAxios();
  const { isLoading, mutate } = useMutation<LoginUserResponse, AxiosError, LoginUserParams>(
    [USER_LOGIN_KEY],
    async (requestData) =>
      await api.post(Endpoints.userLogin(), requestData).then((res) => res.data),
    {
      ...options,
      onSuccess(data, variables, context) {
        options.onSuccess?.(data, variables, context);
        toast('Usuário logado');
      },
    },
  );

  return {
    loginUserIsLoading: isLoading,
    loginUserMutate: mutate,
  };
};
