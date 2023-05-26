import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const Event = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Cover>
        <S.Image url="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/09/alok-26-3-1.jpg" />
        <S.Content>
          <S.EventTitle>Alok</S.EventTitle>
          <S.EventDate>21 de outubro</S.EventDate>
          <S.EventEntranceFee>
            <S.EntranceFeeText>preço da entrada:</S.EntranceFeeText>
            <S.EntranceFeePrice>entrada gratuita</S.EntranceFeePrice>
          </S.EventEntranceFee>
        </S.Content>
      </S.Cover>
      <S.EventInformation>
        <S.EventInformationTitle>Endereço</S.EventInformationTitle>
        <S.EventInformationValue>Circo Aruja</S.EventInformationValue>
      </S.EventInformation>
      <S.EventInformation>
        <S.EventInformationTitle>Local</S.EventInformationTitle>
      </S.EventInformation>
      <S.EventInformation>
        <S.EventInformationTitle>Contato</S.EventInformationTitle>
        <S.Contact>
          <S.TypeOfContact>Telefone:</S.TypeOfContact>
          <S.ValueOfContact>(11) 99999-9999</S.ValueOfContact>
        </S.Contact>
      </S.EventInformation>
    </>
  );
};

export default Event;
