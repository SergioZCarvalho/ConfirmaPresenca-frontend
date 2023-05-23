import * as S from './styles';
import ButtonComponent from '@/components/button';

const Login = () => {
  return (
    <S.LoginContainer>
      <S.Header>
        <S.HeaderTitle>Entre com sua conta</S.HeaderTitle>
        <S.HeaderSubtitle>E comece a criar seus eventos</S.HeaderSubtitle>
      </S.Header>
      <S.FormContainer>
        <S.Group controlId="formBasicEmail">
          <S.Control type="email" placeholder="Digite seu e-mail" />
        </S.Group>

        <S.Group controlId="formBasicPassword">
          <S.Control type="password" placeholder="Digite sua senha" />
        </S.Group>

        <S.links>
          <S.linkText>se esqueceu sua senha</S.linkText>
          <S.linkRouter to="/auth/register">clique aqui</S.linkRouter>
        </S.links>

        <ButtonComponent text={'Entrar'}></ButtonComponent>

        <S.links>
          <S.linkText>caso não possua login </S.linkText>
          <S.linkRouter to="/auth/register">clique aqui</S.linkRouter>
        </S.links>
      </S.FormContainer>
    </S.LoginContainer>
  );
};

export default Login;
