import * as S from './styles';
import ButtonComponent from '@/components/button';
import useLogic from './useLogic';

const Login = () => {
  const { emailInput, passwordInput, onSubmit } = useLogic();
  return (
    <S.LoginContainer>
      <S.Header>
        <S.HeaderTitle>Entre com sua conta</S.HeaderTitle>
        <S.HeaderSubtitle>E comece a criar seus eventos</S.HeaderSubtitle>
      </S.Header>
      <S.FormContainer onSubmit={(e) => onSubmit(e)}>
        <S.Group controlId="formBasicEmail">
          <S.Control type="email" placeholder="Digite seu e-mail" ref={emailInput} />
        </S.Group>

        <S.Group controlId="formBasicPassword">
          <S.Control type="password" placeholder="Digite sua senha" ref={passwordInput} />
        </S.Group>

        <S.links>
          <S.linkText>se esqueceu sua senha</S.linkText>
          <S.linkRouter to="/auth/register">clique aqui</S.linkRouter>
        </S.links>

        <ButtonComponent type="submit" text={'Entrar'}></ButtonComponent>

        <S.links>
          <S.linkText>caso não possua login </S.linkText>
          <S.linkRouter to="/auth/register">clique aqui</S.linkRouter>
        </S.links>
      </S.FormContainer>
    </S.LoginContainer>
  );
};

export default Login;
