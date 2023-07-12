import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_SEND_EMAIL_KEY } from '../endpoints';

type UseSendEmailResponse = object;

type UseSendEmailParams = {
  email: string;
};

type UseSendEmailParam = UseMutationOptions<UseSendEmailResponse, AxiosError, UseSendEmailParams>;

export const UseSendEmail = ({ ...options }: UseSendEmailParam) => {
  const { api } = useAxios();
  const { isLoading, mutate } = useMutation<UseSendEmailResponse, AxiosError, UseSendEmailParams>(
    [USER_SEND_EMAIL_KEY],
    async (requestData) =>
      await api.post(Endpoints.userSendEmail(), requestData).then((res) => res.data),
    {
      ...options,
      onSuccess(data, variables, context) {
        options.onSuccess?.(data, variables, context);
        toast('Email Enviado com Sucesso');
      },
      onError(error, variables, context) {
        if (error.response?.status === 400) {
          toast('Email não encontrado!');
          return;
        }
      },
    },
  );

  return {
    sendEmailIsLoading: isLoading,
    sendEmailMutate: mutate,
  };
};
