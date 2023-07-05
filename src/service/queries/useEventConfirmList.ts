import { UseQueryOptions, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useAxios } from '@/utils/useAxios';
import { EVENT_CONFIRM_LIST_KEY, Endpoints } from '../endpoints';
import { EventPopulated } from '../types';

export type UseEventConfirmListResponse = EventPopulated;
type UseEventConfirmListParams = UseQueryOptions<UseEventConfirmListResponse, AxiosError> & {
  eventId: string;
};

export const useEventConfirmList = ({ eventId, ...options }: UseEventConfirmListParams) => {
  const { api } = useAxios();
  const { isFetching, data, refetch } = useQuery<UseEventConfirmListResponse, AxiosError>(
    [EVENT_CONFIRM_LIST_KEY, eventId],
    async () =>
      await api
        .get<UseEventConfirmListResponse>(Endpoints.eventConfirms({ id: eventId }))
        .then((res) => {
          return res.data;
        }),
    {
      ...options,
    },
  );

  return {
    eventConfirmListIsLoading: isFetching,
    eventConfirmListData: data,
    eventConfirmListRefetch: refetch,
  };
};
