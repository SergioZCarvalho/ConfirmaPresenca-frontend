import { UseQueryOptions, useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, USER_CONFIRM_LIST_KEY } from '../endpoints';
import { Confirm } from '../types';

export type UseConfirmListResponse = Confirm[];
type UseConfirmListParams = UseQueryOptions<UseConfirmListResponse, AxiosError>;

export const useConfirmList = ({ ...options }: UseConfirmListParams) => {
  const { api } = useAxios();
  const { isLoading, data, refetch } = useQuery<UseConfirmListResponse, AxiosError>(
    [USER_CONFIRM_LIST_KEY],
    async () =>
      await api
        .get<UseConfirmListResponse>(Endpoints.confirm(), {
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
    confirmListIsLoading: isLoading,
    confirmListData: data,
    confirmListRefetch: refetch,
  };
};
