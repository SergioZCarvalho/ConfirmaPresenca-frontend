import { UseQueryOptions, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useAxios } from '@/utils/useAxios';
import { EVENT_DETAIL_KEY, Endpoints } from '../endpoints';
import { Event } from '../types';

export type UseEventDetailsResponse = Event;
type UseEventDetailsParams = UseQueryOptions<UseEventDetailsResponse, AxiosError> & {
  eventId: string;
};

export const UseEventDetails = ({ eventId, ...options }: UseEventDetailsParams) => {
  const { api } = useAxios();
  const { isFetching, data, refetch } = useQuery<UseEventDetailsResponse, AxiosError>(
    [EVENT_DETAIL_KEY],
    async () =>
      await api.get<UseEventDetailsResponse>(Endpoints.eventId({ id: eventId })).then((res) => {
        return res.data;
      }),
    {
      ...options,
    },
  );

  return {
    useEventDetailsisFetching: isFetching,
    useEventDetailsData: data,
    useEventDetailsRefetch: refetch,
  };
};
