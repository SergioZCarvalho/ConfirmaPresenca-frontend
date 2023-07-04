import * as S from './styles';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Item } from 'react-contexify';

import 'react-contexify/ReactContexify.css';
import useLogic from './useLogic';
import { useConfirmList } from '@/service';

const MyEvent = () => {
  const {
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
  } = useLogic();

  const { confirmListData, confirmListIsLoading, confirmListRefetch } = useConfirmList({});

  const confirmedList = confirmListData?.filter((confirm) => confirm.hasAccepted === true);
  const declinedList = confirmListData?.filter((confirm) => confirm.hasAccepted === false);

  return (
    <>
      {eventListData &&
        eventListData.map((event) => (
          <S.Container key={event.id}>
            <S.Image url={event.cover ?? ''} />
            <S.Content>
              <S.Title>{event.name}</S.Title>
              <S.Information>{dateWithRange(event.startEvent, event.endEvent)}</S.Information>
              <S.Information>{event.address}</S.Information>
            </S.Content>
            <S.MenuClosed>
              <S.MenuIcon onClick={(e) => handleContextMenu(e, event)} />
            </S.MenuClosed>
          </S.Container>
        ))}

      <S.confirmed show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <S.TitleConfirmed>Lista de Confirmações</S.TitleConfirmed>
        </Offcanvas.Header>
        <S.BodyConfirmed>
          <div>
            <S.willAttend>Confirmados:</S.willAttend>
            {confirmedList && confirmedList.length > 0 ? (
              confirmedList.map((confirm) => (
                <div key={confirm.id}>
                  <p>{confirm.name}</p>
                </div>
              ))
            ) : (
              <p>Sem confirmados</p>
            )}
          </div>
          <div>
            <S.willNotAttend>Recusados:</S.willNotAttend>
            {declinedList && declinedList.length > 0 ? (
              declinedList.map((confirm) => (
                <div key={confirm.id}>
                  <p>{confirm.name}</p>
                </div>
              ))
            ) : (
              <p>Sem recusados</p>
            )}
          </div>
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
