import { useRegisterUser } from '@/service';
import { useAuthStore } from '@/store';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType } from 'yup';

const UseLogic = () => {
  const navigate = useNavigate();

  const { setUser, setToken } = useAuthStore();

  const formSchema = Yup.object().shape({
    name: Yup.string().required(' o user usuario é obrigatório'),
    password: Yup.string()
      .required(' a senha é obrigatória')
      .min(6, ' a senha deve ter no minimo 6 caracteres'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), undefined],
      ' as senhas não conferem',
    ),
    email: Yup.string().required(' o email é obrigatório').email(' o email deve ser válido'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      password: '',
      email: '',
    },
    resolver: yupResolver(formSchema),
  });

  const { registerUserIsLoading, registerUserMutate } = useRegisterUser({
    onSuccess(data) {
      const { access_token, user } = data;
      setUser(user);
      setToken(access_token);
      navigate('/my-events', { replace: true });
    },
  });

  const onSubmit = (data: InferType<typeof formSchema>) => {
    registerUserMutate({
      ...data,
    });
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
export default UseLogic;
