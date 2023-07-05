import { Event, useEventConfirmList, useEventList } from '@/service';
import { useDeleteEvent } from '@/service/mutations/useDeleteEvent';
import { useFormatDate } from '@/utils/formatDate';
import { useState } from 'react';
import { TriggerEvent, useContextMenu } from 'react-contexify';
import { useNavigate } from 'react-router-dom';

const MENU_ID = 'blahblah';

const useLogic = () => {
  const { dateWithRange } = useFormatDate();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { show: showContextMenu } = useContextMenu({
    id: MENU_ID,
  });
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleContextMenu = (e: TriggerEvent, event: Event) => {
    e.preventDefault();
    setSelectedEvent(event);
    showContextMenu({ event: e });
  };

  const handleGoToEventClick = () => {
    navigate(`/event/${selectedEvent?.slug}`);
  };

  const handleGoToUpdateEventClick = () => {
    navigate(`/update-event/${selectedEvent?.id}`);
  };

  const { deleteEventIsLoading, deleteEventMutate } = useDeleteEvent({
    onSuccess: () => {
      handleClose();
      eventListRefetch();
    },
  });

  const handleDeleteEventClick = () => {
    if (!selectedEvent || isLoading) return;
    if (confirm('Deseja realmente excluir este evento?')) {
      deleteEventMutate({ eventId: selectedEvent.id });
    }
  };

  const { eventListData, eventListIsLoading, eventListRefetch } = useEventList({});
  const { eventConfirmListData, eventConfirmListIsLoading, eventConfirmListRefetch } =
    useEventConfirmList({ eventId: selectedEvent?.id ?? '', enabled: !!selectedEvent }); // Use the useConfirmList query hook

  const isLoading = eventListIsLoading || deleteEventIsLoading;

  const confirmedList = eventConfirmListData
    ? eventConfirmListData.confirms.filter((confirm) => confirm.hasAccepted === true)
    : [];
  const declinedList = eventConfirmListData
    ? eventConfirmListData.confirms.filter((confirm) => confirm.hasAccepted === false)
    : [];

  return {
    eventListData,
    eventListIsLoading,
    eventListRefetch,
    handleClose,
    handleShow,
    handleContextMenu,
    handleGoToEventClick,
    handleDeleteEventClick,
    isLoading,
    show,
    dateWithRange,
    MENU_ID,
    confirmedList,
    declinedList,
    eventConfirmListIsLoading,
    handleGoToUpdateEventClick,
  };
};

export default useLogic;
