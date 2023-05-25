import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { useState } from 'react';
import ButtonComponent from '@/components/button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const MyEvent = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <S.Container>
        <S.Image url="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/09/alok-26-3-1.jpg" />
        <S.Content>
          <S.Title>Alok</S.Title>
          <S.information>21 de outubro</S.information>
          <S.information>Circo Aruja</S.information>
          <ButtonComponent text="Ver lista de confirmados" onClick={handleShow} />
          <ButtonComponent text="Pré-Visualizar evento" color="secondary" />
        </S.Content>
        <S.Menu></S.Menu>
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
    </>
  );
};

export default MyEvent;
