import { UseQueryOptions, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_LIST_EVENTS_KEY } from '../endpoints';
import { Event } from '../types';

export type UseEventListResponse = Event[];
type UseEventListParams = UseQueryOptions<UseEventListResponse, AxiosError>;

export const useEventList = ({ ...options }: UseEventListParams) => {
  const { api } = useAxios();
  const { isLoading, data, refetch } = useQuery<UseEventListResponse, AxiosError>(
    [USER_LIST_EVENTS_KEY],
    async () =>
      await api
        .get<UseEventListResponse>(Endpoints.event(), {
          params: {
            'pagination[page]': 1,
            'pagination[pageSize]': 10,
          },
        })
        .then((res) => {
          return res.data;
        }),
    {
      ...options,
    },
  );

  return {
    eventListIsLoading: isLoading,
    eventListData: data,
    eventListRefetch: refetch,
  };
};
