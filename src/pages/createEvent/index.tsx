import * as S from './styles';
import { Col } from 'react-bootstrap';
import useLogic from './useLogic';
import ButtonComponent from '@/components/button';

const CreateEvent = () => {
  const {
    onSubmit,
    register,
    handleSubmit,
    errors,
    handlePaidCheckboxChange,
    handleImageChange,
    handleCheckboxChange,
    isEventPaid,
    isSingleDay,
    isSubmitDisabled,
    currentImage,
    updatingId,
  } = useLogic();

  return (
    <>
      {Object.keys(errors)}
      <S.Container>
        <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
          <S.Group controlId="formGridImage">
            <S.Label>Imagem de Capa</S.Label>
            <div>
              {currentImage && <img width="200px" height="100%" src={currentImage} alt="" />}
            </div>

            <S.Control
              type="file"
              as="input"
              onChange={handleImageChange}
              accept=".png, .jpg, .jpeg, .webp, .jfif"
            />
          </S.Group>
          <S.Group controlId="formGridEventTitle">
            <S.Label>Nome do evento</S.Label>
            <S.Control type="text" placeholder="Nome do evento" {...register('name')} />
            {errors.name && errors.name.message && <S.Error>{errors.name.message}</S.Error>}
          </S.Group>
          <S.Group controlId="formGridDescription">
            <S.Label>Descrição do evento</S.Label>
            <S.Control
              as="textarea"
              rows={3}
              placeholder="Descrição do evento"
              {...register('description')}
            />
            {errors.description && errors.description.message && (
              <S.Error>{errors.description.message}</S.Error>
            )}
          </S.Group>
          <S.Group>
            <S.SigleDay>
              <S.Label>Dia do evento</S.Label>
              <S.Check
                type="checkbox"
                label="Dia único"
                checked={isSingleDay}
                onChange={handleCheckboxChange}
              />
            </S.SigleDay>
            <S.Control type="date" {...register('startEvent')} />
            {errors.startEvent && errors.startEvent.message && (
              <S.Error>{errors.startEvent.message}</S.Error>
            )}
          </S.Group>
          {!isSingleDay && (
            <S.Group controlId="formGridDate">
              <S.Label>Último dia do evento</S.Label>
              <S.Control type="date" {...register('endEvent')} />
              {errors.name && errors.name.message && <S.Error>{errors.name.message}</S.Error>}
            </S.Group>
          )}
          <S.Time>
            <S.Group as={Col} controlId="formGridTime">
              <S.Label>Início do evento</S.Label>
              <S.Control
                type="time"
                placeholder="Hora inicio do evento"
                {...register('startEventTime')}
              />
              {errors.name && errors.name.message && <S.Error>{errors.name.message}</S.Error>}
            </S.Group>
            <S.Group as={Col} controlId="formGridTime">
              <S.Label>Final do evento</S.Label>
              <S.Control
                type="time"
                placeholder="Hora final do evento"
                {...register('endEventTime')}
              />
            </S.Group>
          </S.Time>

          <S.Group controlId="formGridAddress">
            <S.Label>Local do evento</S.Label>
            <S.Control type="text" placeholder="nome do local " {...register('localName')} />
            {errors.address && errors.address.message && (
              <S.Error>{errors.address.message}</S.Error>
            )}
          </S.Group>
          <S.Group controlId="formGridAddress">
            <S.Label>Endereço</S.Label>
            <S.Control type="text" placeholder="Endereço" {...register('address')} />
            {errors.address && errors.address.message && (
              <S.Error>{errors.address.message}</S.Error>
            )}
          </S.Group>
          <S.Group controlId="formGridNumber">
            <S.Label>Número</S.Label>
            <S.Control type="text" placeholder="Número" {...register('number')} />
            {errors.number && errors.number.message && <S.Error>{errors.number.message}</S.Error>}
          </S.Group>
          <S.Group controlId="formGridCity">
            <S.Label>Cidade</S.Label>
            <S.Control type="text" placeholder="Cidade" {...register('city')} />
            {errors.city && errors.city.message && <S.Error>{errors.city.message}</S.Error>}
          </S.Group>
          <S.Group controlId="formGridState">
            <S.Label>Estado</S.Label>
            <S.Control type="text" placeholder="Estado" {...register('state')} />
            {errors.state && errors.state.message && <S.Error>{errors.state.message}</S.Error>}
          </S.Group>
          <S.Group controlId="formGridState">
            <S.Label>CEP</S.Label>
            <S.Control type="text" placeholder="CEP" {...register('zipCode')} />
            {errors.zipCode && errors.zipCode.message && (
              <S.Error>{errors.zipCode.message}</S.Error>
            )}
          </S.Group>

          <S.Group controlId="formGridContact">
            <S.Label>WhatsApp para contato</S.Label>
            <S.Control type="text" placeholder="Contato" {...register('whatsapp')} />
            {errors.whatsapp && errors.whatsapp.message && (
              <S.Error>{errors.whatsapp.message}</S.Error>
            )}
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
                <S.Control type="text" placeholder="Valor do Evento" {...register('price')} />
              </S.Group>
            </>
          )}

          <ButtonComponent
            disabled={isSubmitDisabled()}
            type="submit"
            text={updatingId ? 'Atualizar Evento' : 'Criar Evento'}
          ></ButtonComponent>
        </S.FormContainer>
      </S.Container>
    </>
  );
};

export default CreateEvent;
