import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { Col } from 'react-bootstrap';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [isSingleDay, setIsSingleDay] = useState(false);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [isEventPaid, setIsEventPaid] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSingleDay(event.target.checked);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const imageFile = fileInput.files[0];
      setCoverImage(imageFile);
    }
  };

  const handlePaidCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEventPaid(event.target.checked);
  };

  return (
    <>
      <S.Container>
        <S.FormContainer>
          <S.Group controlId="formGridImage">
            <S.Label>Imagem de Capa</S.Label>
            <S.Control type="file" onChange={handleImageChange} accept="image/*" />
          </S.Group>
          <S.Group controlId="formGridEventTitle">
            <S.Label>Nome do evento</S.Label>
            <S.Control type="text" placeholder="Nome do evento" />
          </S.Group>
          <S.Group controlId="formGridDescription">
            <S.Label>Descrição do evento</S.Label>
            <S.Control as="textarea" rows={3} placeholder="Descrição do evento" />
          </S.Group>
          <S.Group controlId="formGridDate">
            <S.SigleDay>
              <S.Label>Dia do evento</S.Label>
              <S.Check
                type="checkbox"
                label="Dia único"
                checked={isSingleDay}
                onChange={handleCheckboxChange}
              />
            </S.SigleDay>
            <S.Control type="date" />
          </S.Group>
          {!isSingleDay && (
            <S.Group controlId="formGridDate">
              <S.Label>Último dia do evento</S.Label>
              <S.Control type="date" />
            </S.Group>
          )}
          <S.Time>
            <S.Group as={Col} controlId="formGridTime">
              <S.Label>Início do evento</S.Label>
              <S.Control type="time" placeholder="Nome do evento" />
            </S.Group>
            <S.Group as={Col} controlId="formGridTime">
              <S.Label>Final do evento</S.Label>
              <S.Control type="time" placeholder="Nome do evento" />
            </S.Group>
          </S.Time>

          <S.Group controlId="formGridAddress">
            <S.Label>Endereço</S.Label>
            <S.Control type="text" placeholder="Endereço" />
          </S.Group>
          <S.Group controlId="formGridNumber">
            <S.Label>Número</S.Label>
            <S.Control type="text" placeholder="Número" />
          </S.Group>
          <S.Group controlId="formGridCity">
            <S.Label>Cidade</S.Label>
            <S.Control type="text" placeholder="Cidade" />
          </S.Group>
          <S.Group controlId="formGridState">
            <S.Label>Estado</S.Label>
            <S.Control type="text" placeholder="Estado" />
          </S.Group>
          <S.Group controlId="formGridIsEventPaid">
            <S.Check
              type="checkbox"
              label="Evento Pago"
              checked={isEventPaid}
              onChange={handlePaidCheckboxChange}
            />
          </S.Group>

          {isEventPaid && (
            <>
              <S.Group controlId="formGridEventPrice">
                <S.Label>Valor do Evento</S.Label>
                <S.Control type="text" placeholder="Valor do Evento" />
              </S.Group>
              <S.Group controlId="formGridContact">
                <S.Label>Contato para Compra</S.Label>
                <S.Control type="text" placeholder="Contato para Compra" />
              </S.Group>
            </>
          )}
        </S.FormContainer>
      </S.Container>
    </>
  );
};

export default CreateEvent;
