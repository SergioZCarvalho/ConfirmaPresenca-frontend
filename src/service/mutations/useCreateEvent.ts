import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_CREATE_EVENT_KEY } from '../endpoints';
import {} from '../types';

type CreateUserResponse = {
  name: string;
  description: string;
  startEvent: Date;
  endEvent: Date;
  address: string;
  city: string;
  number: 0;
  zipCode: string;
  slug: string;
  creator: {
    id: string;
  };
  cover?: string | null;
  id: string;
};

type CreateUserParams = {
  name: string;
  description: string;
  startEvent: Date;
  endEvent: Date;
  address: string;
  city: string;
  number: string;
  zipCode: string;
  price: number;
};

type UseCreateEventParam = UseMutationOptions<CreateUserResponse, AxiosError, CreateUserParams>;

export const useCreateEvent = ({ ...options }: UseCreateEventParam) => {
  const { api } = useAxios();
  const { isLoading, mutate } = useMutation<CreateUserResponse, AxiosError, CreateUserParams>(
    [USER_CREATE_EVENT_KEY],
    async (requestData) => await api.put(Endpoints.event(), requestData).then((res) => res.data),
    {
      ...options,
      onSuccess(data, variables, context) {
        options.onSuccess?.(data, variables, context);
        toast('Evento criado com sucesso');
      },
    },
  );

  return {
    createEventIsLoading: isLoading,
    createEventMutate: mutate,
  };
};
