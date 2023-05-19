import * as S from './styles';
import ButtonComponent from '@/components/button';

const Register = () => {
  return (
    <S.RegisterContainer>
      <S.Header>
        <S.HeaderTitle>Crie sua conta</S.HeaderTitle>
        <S.HeaderSubtitle>E comece a criar seus eventos</S.HeaderSubtitle>
      </S.Header>
      <S.FormContainer>
        <S.Group controlId=" formBasicUsername">
          <S.Control type="username" placeholder="Digite seu nome" />
        </S.Group>

        <S.Group controlId="formBasicEmail">
          <S.Control type="email" placeholder="Digite seu e-mail" />
        </S.Group>

        <S.Group controlId="formBasicPassword">
          <S.Control type="password" placeholder="Digite sua senha" />
        </S.Group>

        <S.Group controlId=" formBasicPasswordConfirm">
          <S.Control type="password" placeholder="Confirme sua senha" />
        </S.Group>

        <ButtonComponent text={'Entrar'}></ButtonComponent>

        <S.links>
          <S.linkText>se ja possui login </S.linkText>
          <S.linkRouter>clique aqui</S.linkRouter>
        </S.links>
      </S.FormContainer>
    </S.RegisterContainer>
  );
};

export default Register;
