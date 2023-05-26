import * as S from './styles';

const InviteConfirm = () => {
  return (
    <>
      <S.Container>
        <S.Text>Confirme sua presença no evento</S.Text>
        <S.FormContainer>
          <S.Group controlId="formGridName">
            <S.Label>Insira seu nome</S.Label>
            <S.Control type="text" placeholder="Insira seu nome" />
          </S.Group>
          <S.Group controlId="formGridEmail">
            <S.Label>Insira seu email</S.Label>
            <S.Control type="email" placeholder="Insira seu email" />
          </S.Group>
        </S.FormContainer>
        <S.Buttons>
          <S.LeftButton>
            <S.TextButton>Recusar</S.TextButton>
          </S.LeftButton>
          <S.RightButton>
            <S.TextButton>Confirmar</S.TextButton>
          </S.RightButton>
        </S.Buttons>
      </S.Container>
    </>
  );
};

export default InviteConfirm;
