import { formatCurrency } from '@/utils/formatCurrency';
import * as S from './styles';
import useLogic from './useLogic';
import InviteConfirm from '@/components/InviteConfirm';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonComponent from '@/components/button';

const Event = () => {
  const {
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
  } = useLogic();

  if (isNotFound)
    return (
      <S.NotFound>
        <S.Message>Este evento não foi encontrado</S.Message>
        <ButtonComponent text={'Votar para home'} onClick={() => navigate('/')} />
      </S.NotFound>
    );

  return (
    <>
      <S.Cover>
        <S.Image url={coverUrl} />

        <S.Content>
          <S.ToShare onClick={share} />
          <S.EventTitle>{eventDetailsData?.name}</S.EventTitle>
          <S.EventDate>{formattedDate}</S.EventDate>
          <S.EventEntranceFee>
            <S.EntranceFeeText>Preço da entrada:</S.EntranceFeeText>
            <S.EntranceFeePrice>
              {eventDetailsData &&
                (eventDetailsData.price || eventDetailsData.price === 0
                  ? 'Gratuito'
                  : formatCurrency(eventDetailsData.price))}
            </S.EntranceFeePrice>
          </S.EventEntranceFee>
        </S.Content>
      </S.Cover>
      <S.Information>
        <S.EventInformation>
          <S.EventInformationTitle>Descrição do evento</S.EventInformationTitle>
          <S.EventInformationValue>{eventDetailsData?.description}</S.EventInformationValue>
        </S.EventInformation>
        <S.EventInformation>
          <S.EventInformationTitle>Endereço</S.EventInformationTitle>
          <S.EventInformationValue>
            {eventDetailsData?.localName}: <br /> {eventDetailsData?.address},{' '}
            {eventDetailsData?.number} -{eventDetailsData?.city}/{eventDetailsData?.state} -{' '}
            {eventDetailsData?.zipCode}
          </S.EventInformationValue>
          <S.EventPhotos>
            {eventPhotos.map((photo, index) => (
              <S.EventPhoto key={index} url={photo} onClick={() => updateEventPhotos([photo])} />
            ))}
          </S.EventPhotos>
        </S.EventInformation>
        <S.EventInformation>
          <S.EventInformationTitle>Contato</S.EventInformationTitle>
          <S.Contact>
            <S.TypeOfContact>Telefone:</S.TypeOfContact>
            <S.ValueOfContact>{eventDetailsData?.whatsapp}</S.ValueOfContact>
          </S.Contact>
        </S.EventInformation>

        {eventDetailsData && (
          <S.Card>
            <ButtonComponent
              text={'Confirmar ou Recusar presença'}
              onClick={handleToggleInviteConfirm}
            ></ButtonComponent>
            {isOpenConfirmModal && (
              <InviteConfirm handleCloseModal={handleCloseModal} eventId={eventDetailsData?.id} />
            )}
          </S.Card>
        )}
      </S.Information>
    </>
  );
};

export default Event;
