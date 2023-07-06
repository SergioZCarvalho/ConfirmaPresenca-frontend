import { formatCurrency } from '@/utils/formatCurrency';
import * as S from './styles';
import useLogic from './useLogic';
import InviteConfirm from '@/components/InviteConfirm';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Event = () => {
  const { eventDetailsIsLoading, eventDetailsData, user, formattedDate, updateEventPhotos } =
    useLogic();
  const coverUrl = eventDetailsData?.cover || '';
  const eventPhotos = eventDetailsData?.photos || [];

  return (
    <>
      <S.Cover>
        <S.Image url={coverUrl} />

        <S.Content>
          <S.ToShare />
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
      <S.EventInformation>
        <S.EventInformationTitle>Endereço</S.EventInformationTitle>
        <S.EventInformationValue>{eventDetailsData?.address}</S.EventInformationValue>
      </S.EventInformation>
      <S.EventInformation>
        <S.EventInformationTitle>Local</S.EventInformationTitle>
        <S.EventInformationValue>
          {eventDetailsData?.city} / {eventDetailsData?.state}
        </S.EventInformationValue>
      </S.EventInformation>
      <S.EventInformation>
        <S.EventInformationTitle>Contato</S.EventInformationTitle>
        <S.Contact>
          <S.TypeOfContact>Telefone:</S.TypeOfContact>
          <S.ValueOfContact>{eventDetailsData?.whatsapp}</S.ValueOfContact>
        </S.Contact>
      </S.EventInformation>

      <S.EventPhotos>
        {eventPhotos.map((photo, index) => (
          <S.EventPhoto key={index} url={photo} onClick={() => updateEventPhotos([photo])} />
        ))}
      </S.EventPhotos>

      {!user && eventDetailsData && <InviteConfirm eventId={eventDetailsData?.id} />}
    </>
  );
};

export default Event;
