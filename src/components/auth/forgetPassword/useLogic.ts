import { UseSendCode, UseSendEmail } from '@/service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { InferType } from 'yup';

const useLogic = () => {
  const [sendEmail, setSendEmail] = useState(false);
  const navigate = useNavigate();

  const formSchema = Yup.object().shape({
    code: Yup.string().required(' o código é obrigatório'),
    newPassword: Yup.string()
      .required(' a senha é obrigatória')
      .min(6, ' a senha deve ter no minimo 6 caracteres'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('newPassword'), undefined],
      ' as senhas não conferem',
    ),
    email: Yup.string().required(' o email é obrigatório').email(' o email deve ser válido'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
      code: '',
      newPassword: '',
      confirmPassword: '',
    },
    resolver: yupResolver(formSchema),
  });

  const { sendEmailMutate, sendEmailIsLoading } = UseSendEmail({
    onSuccess() {
      setSendEmail(true);
    },
  });

  const submitEmail = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const email = getValues('email');
    if (!email || email === '') return;
    sendEmailMutate({ email });
  };

  const { sendCodeMutate, sendCodeIsLoading } = UseSendCode({
    onSuccess() {
      navigate('/auth');
    },
  });

  const onSubmit = (data: InferType<typeof formSchema>) => {
    const { code, email, newPassword } = data;
    sendCodeMutate({
      code,
      email,
      newPassword,
    });
  };

  return {
    sendEmail,
    register,
    handleSubmit,
    errors,
    submitEmail,
    onSubmit,
  };
};
export default useLogic;
