import { Event, useEventList } from '@/service';
import * as S from './styles';
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Item, useContextMenu, ItemParams, TriggerEvent } from 'react-contexify';

import 'react-contexify/ReactContexify.css';
import { useNavigate } from 'react-router-dom';
import { useDeleteEvent } from '@/service/mutations/useDeleteEvent';

const MENU_ID = 'blahblah';

const MyEvent = () => {
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

  const isLoading = eventListIsLoading || deleteEventIsLoading;

  return (
    <>
      {eventListData &&
        eventListData.map((event) => (
          <S.Container key={event.id}>
            <S.Image url={event.cover ?? ''} />
            <S.Content>
              <S.Title>{event.name}</S.Title>
              <S.information>{event.startEvent.toString()}</S.information>
              <S.information>{event.address}</S.information>
            </S.Content>
            <S.MenuClosed>
              <S.MenuIcon onClick={(e) => handleContextMenu(e, event)} />
            </S.MenuClosed>
          </S.Container>
        ))}

      <S.confirmed show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <S.TitleConfirmed>Confirmados</S.TitleConfirmed>
        </Offcanvas.Header>
        <S.BodyConfirmed>
          <p>confirmado 1</p>
          <p>confirmado 2</p>
          <p>confirmado 3</p>
          <p>confirmado 4</p>
          <p>confirmado 5</p>
        </S.BodyConfirmed>
      </S.confirmed>

      <S.MenuOpen id={MENU_ID} animation="slide">
        <Item id="view" onClick={handleShow}>
          Ver confirmados
        </Item>
        <Item id="preview" onClick={handleGoToEventClick}>
          Visualizar evento
        </Item>
        <Item id="Delete" onClick={handleDeleteEventClick}>
          Deletar
        </Item>
        <Item id="update" onClick={handleItemClick}>
          Atualizar
        </Item>
      </S.MenuOpen>
    </>
  );
};

export default MyEvent;
