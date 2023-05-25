import * as S from './styles';
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Item, useContextMenu, ItemParams, TriggerEvent } from 'react-contexify';

import 'react-contexify/ReactContexify.css';

const MENU_ID = 'blahblah';

const MyEvent = () => {
  const [show, setShow] = useState(false);
  const { show: showContextMenu } = useContextMenu({
    id: MENU_ID,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleContextMenu = (event: TriggerEvent) => {
    event.preventDefault();
    showContextMenu({ event });
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

  return (
    <>
      <S.Container>
        <S.Image url="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/09/alok-26-3-1.jpg" />
        <S.Content>
          <S.Title>Alok</S.Title>
          <S.information>21 de outubro</S.information>
          <S.information>Circo Aruja</S.information>
        </S.Content>
        <S.MenuClosed>
          <S.MenuIcon onClick={handleContextMenu} />
        </S.MenuClosed>
      </S.Container>

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
        <Item id="preview" onClick={handleItemClick}>
          Visualizar evento
        </Item>
        <Item id="Delete" onClick={handleItemClick}>
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
