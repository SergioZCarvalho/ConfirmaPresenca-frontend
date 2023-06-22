import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError } from 'axios';
import { useAxios } from '@/utils/useAxios';
import { Endpoints, UPLOAD_EVENT_COVER_KEY } from '../endpoints';
import {} from '../types';

type UploadEventCoverResponse = object;

type UploadEventCoverParams = {
  eventId: string;
  file: File;
};

type UseUploadEventCoverParam = UseMutationOptions<
  UploadEventCoverResponse,
  AxiosError,
  UploadEventCoverParams
>;

export const useUploadEventCover = ({ ...options }: UseUploadEventCoverParam) => {
  const { api } = useAxios();
  const { isLoading, mutate } = useMutation<
    UploadEventCoverResponse,
    AxiosError,
    UploadEventCoverParams
  >(
    [UPLOAD_EVENT_COVER_KEY],
    async (requestData) => {
      const formData = new FormData();
      formData.append('file', requestData.file);
      formData.append('event', requestData.eventId);
      const configs = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      return await api.post(Endpoints.eventUpload(), formData, configs).then((res) => res.data);
    },
    {
      ...options,
    },
  );

  return {
    uploadEventCoverIsLoading: isLoading,
    uploadEventCoverMutate: mutate,
  };
};
