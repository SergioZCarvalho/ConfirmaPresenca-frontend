import { useEventDetails } from '@/service';
import { formatDate } from '@/utils/formatDate';
import { useParams } from 'react-router-dom';

const useLogic = () => {
  const { slug } = useParams();

  const { eventDetailsIsLoading, eventDetailsData, eventDetailsRefetch } = useEventDetails({
    slug: slug ?? '',
    enabled: !!slug,
  });

  const formattedStartDate = formatDate(eventDetailsData?.startEvent ?? new Date());
  const formattedEndDate = formatDate(eventDetailsData?.endEvent ?? new Date());

  return {
    eventDetailsIsLoading,
    eventDetailsData,
    eventDetailsRefetch,
    formattedStartDate,
    formattedEndDate,
  };
};

export default useLogic;
