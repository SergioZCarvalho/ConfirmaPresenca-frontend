import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, UPDATE_EVENT_KEY } from '../endpoints';
import {} from '../types';

type UpdateEventResponse = object;

type UpdateEventParam = { eventId: string };

type UseUpdateEventParam = UseMutationOptions<UpdateEventResponse, AxiosError, UpdateEventParam>;

export const useUpdateEvent = ({ ...options }: UseUpdateEventParam) => {
  const { api } = useAxios();
  const { isLoading, mutate } = useMutation<UpdateEventResponse, AxiosError, UpdateEventParam>(
    [UPDATE_EVENT_KEY],
    async (requestData) =>
      await api.put(Endpoints.eventId({ id: requestData.eventId })).then((res) => res.data),
    {
      ...options,
      onSuccess(data, variables, context) {
        options.onSuccess?.(data, variables, context);
        toast('Evento deletado com sucesso');
      },
    },
  );

  return {
    updateEventIsLoading: isLoading,
    updateEventMutate: mutate,
  };
};
