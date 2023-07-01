import { formatCurrency } from '@/utils/formatCurrency';
import * as S from './styles';
import useLogic from './useLogic';

const Event = () => {
  const { eventDetailsIsLoading, eventDetailsData, formattedStartDate, formattedEndDate } =
    useLogic();
  const coverUrl = eventDetailsData?.cover || '';

  return (
    <>
      <S.Cover>
        <S.Image url={coverUrl} />
        <S.Content>
          <S.EventTitle>{eventDetailsData?.name}</S.EventTitle>
          <S.EventDate>
            {formattedStartDate}
            {formattedEndDate && formattedEndDate !== formattedStartDate && (
              <> até {formattedEndDate}</>
            )}
          </S.EventDate>
          <S.EventEntranceFee>
            <S.EntranceFeeText>preço da entrada:</S.EntranceFeeText>
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
    </>
  );
};

export default Event;
