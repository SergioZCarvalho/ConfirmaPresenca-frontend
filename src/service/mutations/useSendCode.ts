import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_SEND_CODE_KEY } from '../endpoints';

type UseSendCodeResponse = object;

type UseSendCodeParams = {
  code: string;
  email: string;
  newPassword: string;
};

type UseSendCodeParam = UseMutationOptions<UseSendCodeResponse, AxiosError, UseSendCodeParams>;

export const UseSendCode = ({ ...options }: UseSendCodeParam) => {
  const { api } = useAxios();
  const { isLoading, mutate } = useMutation<UseSendCodeResponse, AxiosError, UseSendCodeParams>(
    [USER_SEND_CODE_KEY],
    async (requestData) =>
      await api.post(Endpoints.userSendCode(), requestData).then((res) => res.data),
    {
      ...options,
      onSuccess(data, variables, context) {
        options.onSuccess?.(data, variables, context);
        toast('alteração feita com sucesso');
      },
      onError(error, variables, context) {
        if (error.response?.status === 400) {
          toast('Código incorreto');
          return;
        }
      },
    },
  );

  return {
    sendCodeIsLoading: isLoading,
    sendCodeMutate: mutate,
  };
};
