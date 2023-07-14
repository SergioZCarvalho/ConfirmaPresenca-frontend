import { useEventDetailsSlug } from '@/service';
import { useAuthStore } from '@/store';
import { useFormatDate } from '@/utils/formatDate';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const useLogic = () => {
  const { dateWithRange } = useFormatDate();
  const { user } = useAuthStore();
  const { slug } = useParams();
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const navigate = useNavigate();

  const { eventDetailsIsLoading, eventDetailsData, eventDetailsRefetch } = useEventDetailsSlug({
    slug: slug ?? '',
    enabled: !!slug,
    onError(err) {
      if (err.response?.status === 404) setIsNotFound(true);
    },
    retry(failureCount, err) {
      if (err.response?.status === 404) return false;
      return true;
    },
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

  const handleToggleInviteConfirm = () => {
    setIsOpenConfirmModal(!isOpenConfirmModal);
  };

  const coverUrl = eventDetailsData?.cover || '';
  const eventPhotos = eventDetailsData?.photos || [];

  const share = () =>
    navigator.share({
      title: eventDetailsData?.name,
      url: 'https://confirmapresenca.com.br/event/' + eventDetailsData?.slug,
    });

  const handleCloseModal = () => {
    setIsOpenConfirmModal(false);
  };

  return {
    eventDetailsData,
    user,
    formattedDate,
    updateEventPhotos,
    handleToggleInviteConfirm,
    coverUrl,
    eventPhotos,
    share,
    isOpenConfirmModal,
    handleCloseModal,
    isNotFound,
    navigate,
  };
};

export default useLogic;
