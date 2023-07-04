import { Event, useEventList, useConfirmList } from '@/service';
import { useDeleteEvent } from '@/service/mutations/useDeleteEvent';
import { useFormatDate } from '@/utils/formatDate';
import { useState } from 'react';
import { ItemParams, TriggerEvent, useContextMenu } from 'react-contexify';
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

  const handleItemClick = ({ event, props }: ItemParams) => {
    // eslint-disable-next-line react/prop-types
    const { id } = props;
    switch (id) {
      case 'Delete':
        console.log(event, props);
        break;
      case 'update':
        console.log(event, props);
        break;
      case 'view':
        console.log(event, props);
        break;
      case 'preview':
        console.log(event, props);
        break;

      default:
        break;
    }
  };

  const { eventListData, eventListIsLoading, eventListRefetch } = useEventList({});
  const { confirmListData, confirmListIsLoading, confirmListRefetch } = useConfirmList({}); // Use the useConfirmList query hook

  const isLoading = eventListIsLoading || deleteEventIsLoading;

  return {
    eventListData,
    eventListIsLoading,
    eventListRefetch,
    handleItemClick,
    handleClose,
    handleShow,
    handleContextMenu,
    handleGoToEventClick,
    handleDeleteEventClick,
    isLoading,
    show,
    dateWithRange,
    MENU_ID,
    confirmListData,
    confirmListIsLoading,
    confirmListRefetch,
  };
};

export default useLogic;
