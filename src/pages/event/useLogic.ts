import { useEventDetailsSlug } from '@/service';
import { useAuthStore } from '@/store';
import { useFormatDate } from '@/utils/formatDate';
import { useParams } from 'react-router-dom';

const useLogic = () => {
  const { dateWithRange } = useFormatDate();
  const { user } = useAuthStore();
  const { slug } = useParams();

  const { eventDetailsIsLoading, eventDetailsData, eventDetailsRefetch } = useEventDetailsSlug({
    slug: slug ?? '',
    enabled: !!slug,
  });

  const formattedDate = dateWithRange(
    eventDetailsData?.startEvent ?? new Date(),
    eventDetailsData?.endEvent ?? new Date(),
  );

  return {
    eventDetailsIsLoading,
    eventDetailsData,
    eventDetailsRefetch,
    user,
    formattedDate,
  };
};

export default useLogic;
