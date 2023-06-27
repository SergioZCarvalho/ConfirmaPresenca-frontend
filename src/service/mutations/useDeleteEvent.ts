import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_DELETE_EVENT_KEY } from '../endpoints';
import {} from '../types';

type DeleteEventResponse = object;

type DeleteEventParam = { eventId: string };

type UseDeleteEventParam = UseMutationOptions<DeleteEventResponse, AxiosError, DeleteEventParam>;

export const useDeleteEvent = ({ ...options }: UseDeleteEventParam) => {
  const { api } = useAxios();
  const { isLoading, mutate } = useMutation<DeleteEventResponse, AxiosError, DeleteEventParam>(
    [USER_DELETE_EVENT_KEY],
    async (requestData) =>
      await api.delete(Endpoints.eventId({ id: requestData.eventId })).then((res) => res.data),
    {
      ...options,
      onSuccess(data, variables, context) {
        options.onSuccess?.(data, variables, context);
        toast('Evento deletado com sucesso');
      },
    },
  );

  return {
    deleteEventIsLoading: isLoading,
    deleteEventMutate: mutate,
  };
};
