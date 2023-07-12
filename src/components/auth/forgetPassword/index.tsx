import * as S from './styles';
import ButtonComponent from '@/components/button';
import useLogic from './useLogic';

const ForgetPassword = () => {
  const { sendEmail, register, handleSubmit, errors, onSubmit, submitEmail } = useLogic();
  return (
    <S.RegisterContainer>
      <S.Header>
        <S.HeaderTitle>Esqueceu a Senha?</S.HeaderTitle>
        <S.HeaderSubtitle>para alterar a senha siga os campos abaixo</S.HeaderSubtitle>
      </S.Header>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        {!sendEmail ? (
          <>
            <S.Group controlId="formBasicUsername">
              <S.Control type="email" placeholder="insira seu email" {...register('email')} />
              {errors.email && errors.email.message && <S.Error>{errors.email.message}</S.Error>}
            </S.Group>
            <ButtonComponent type="submit" text={'Enviar'} onClick={submitEmail} />
          </>
        ) : (
          <>
            <S.Group controlId="formBasicCode">
              <S.Control
                type="text"
                placeholder="digite o código enviado no email"
                {...register('code')}
              />
              {errors.code && errors.code.message && <S.Error>{errors.code.message}</S.Error>}
            </S.Group>
            <S.Group controlId="formBasicNewPassword">
              <S.Control
                type="password"
                placeholder="insira sua nova senha"
                {...register('newPassword')}
              />
              {errors.newPassword && errors.newPassword.message && (
                <S.Error>{errors.newPassword.message}</S.Error>
              )}
            </S.Group>
            <S.Group controlId="formBasicConfirmPassword">
              <S.Control
                type="password"
                placeholder="confirme sua senha"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && errors.confirmPassword.message && (
                <S.Error>{errors.confirmPassword.message}</S.Error>
              )}
            </S.Group>
            <ButtonComponent type="submit" text={'Enviar'} />
          </>
        )}
        <S.links>
          <S.linkText>se já possui login</S.linkText>
          <S.linkRouter to="/auth">clique aqui</S.linkRouter>
        </S.links>
      </S.FormContainer>
    </S.RegisterContainer>
  );
};

export default ForgetPassword;
