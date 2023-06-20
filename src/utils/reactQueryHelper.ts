import {
  QueryClient,
  QueryClientProvider,
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query';

const queryClient = new QueryClient();

export { QueryClientProvider, queryClient, useMutation, useQuery, useQueryClient };
export type { UseQueryOptions, QueryKey };
