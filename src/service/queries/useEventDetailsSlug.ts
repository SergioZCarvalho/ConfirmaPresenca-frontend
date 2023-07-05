import { UseQueryOptions, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_EVENTS_DETAILS_KEY } from '../endpoints';
import { Event } from '../types';

export type UseEventDetailsSlugResponse = Event;
type UseEventDetailsSlugParams = UseQueryOptions<UseEventDetailsSlugResponse, AxiosError> & {
  slug: string;
};

export const useEventDetailsSlug = ({ slug, ...options }: UseEventDetailsSlugParams) => {
  const { api } = useAxios();
  const { isLoading, data, refetch } = useQuery<UseEventDetailsSlugResponse, AxiosError>(
    [USER_EVENTS_DETAILS_KEY, slug],
    async () =>
      await api.get<UseEventDetailsSlugResponse>(Endpoints.eventDetail({ slug })).then((res) => {
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
