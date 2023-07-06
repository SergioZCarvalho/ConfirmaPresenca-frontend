import { useEventDetailsSlug } from '@/service';
import { useAuthStore } from '@/store';
import { useFormatDate } from '@/utils/formatDate';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

  const updateEventPhotos = async (eventPhotos: Array<string>) => {
    try {
      await axios.put('/api/event/update-photos', {
        eventId: eventDetailsData?.id,
        photos: eventPhotos,
      });
    } catch (error) {
      console.error('Erro ao atualizar as fotos do evento:', error);
    }
  };

  return {
    eventDetailsIsLoading,
    eventDetailsData,
    eventDetailsRefetch,
    user,
    formattedDate,
    updateEventPhotos,
  };
};

export default useLogic;
