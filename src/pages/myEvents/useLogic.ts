import { useEventList } from '@/service';

const useLogic = () => {
  const { eventListData, eventListIsLoading, eventListRefetch } = useEventList({});

  return {
    eventListData,
    eventListIsLoading,
    eventListRefetch,
  };
};

export default useLogic;
