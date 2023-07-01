import { UseQueryOptions, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_EVENTS_DETAILS_KEY } from '../endpoints';
import { Event } from '../types';

export type UseEventDetailsResponse = Event;
type UseEventDetailsParams = UseQueryOptions<UseEventDetailsResponse, AxiosError> & {
  slug: string;
};

export const useEventDetails = ({ slug, ...options }: UseEventDetailsParams) => {
  const { api } = useAxios();
  const { isLoading, data, refetch } = useQuery<UseEventDetailsResponse, AxiosError>(
    [USER_EVENTS_DETAILS_KEY, slug],
    async () =>
      await api
        .get<UseEventDetailsResponse>(Endpoints.eventDetail({ slug }), {
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
    eventDetailsIsLoading: isLoading,
    eventDetailsData: data,
    eventDetailsRefetch: refetch,
  };
};
