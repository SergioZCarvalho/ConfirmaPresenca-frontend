import * as S from './styles';
import ButtonComponent from '@/components/button';
import useLogic from './useLogic';

const Register = () => {
  const { onSubmit, register, handleSubmit, errors } = useLogic();
  return (
    <S.RegisterContainer>
      <S.Header>
        <S.HeaderTitle>Crie sua conta</S.HeaderTitle>
        <S.HeaderSubtitle>E comece a criar seus eventos</S.HeaderSubtitle>
      </S.Header>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.Group controlId=" formBasicUsername">
          <S.Control type="text" placeholder="Digite seu nome" {...register('name')} />
          {errors.name && errors.name.message && <S.Error>{errors.name.message}</S.Error>}
        </S.Group>

        <S.Group controlId="formBasicEmail">
          <S.Control type="email" placeholder="Digite seu e-mail" {...register('email')} />
          {errors.email && errors.email.message && <S.Error>{errors.email.message}</S.Error>}
        </S.Group>

        <S.Group controlId="formBasicPassword">
          <S.Control type="password" placeholder="Digite sua senha" {...register('password')} />
          {errors.password && errors.password.message && (
            <S.Error>{errors.password.message}</S.Error>
          )}
        </S.Group>

        <S.Group controlId=" formBasicPasswordConfirm">
          <S.Control
            type="password"
            placeholder="Confirme sua senha"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && errors.confirmPassword.message && (
            <S.Error> {errors.confirmPassword.message}</S.Error>
          )}
        </S.Group>

        <ButtonComponent type="submit" text={'Entrar'}></ButtonComponent>

        <S.links>
          <S.linkText>se ja possui login </S.linkText>
          <S.linkRouter to="/auth">clique aqui</S.linkRouter>
        </S.links>
      </S.FormContainer>
    </S.RegisterContainer>
  );
};

export default Register;
