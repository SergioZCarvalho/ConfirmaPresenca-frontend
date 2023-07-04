import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_CONFIRM_EVENT_KEY } from '../endpoints';
import { Confirm } from '../types';

type ConfirmEventResponse = Confirm;

type ConfirmEventParams = Omit<Confirm, 'id'>;

type UseCreateEventParam = UseMutationOptions<ConfirmEventResponse, AxiosError, ConfirmEventParams>;

export const useConfirmEvent = ({ ...options }: UseCreateEventParam) => {
  const { api } = useAxios();
  const { isLoading, mutate } = useMutation<ConfirmEventResponse, AxiosError, ConfirmEventParams>(
    [USER_CONFIRM_EVENT_KEY],
    async (requestData) => await api.post(Endpoints.confirm(), requestData).then((res) => res.data),
    {
      ...options,
      onSuccess(data, variables, context) {
        options.onSuccess?.(data, variables, context);
        toast('Você confirmou sua presença!');
      },
    },
  );

  return {
    confirmEventIsLoading: isLoading,
    confirmEventMutate: mutate,
  };
};
