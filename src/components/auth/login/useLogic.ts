import { useLoginUser } from '@/service';
import { useAuthStore } from '@/store';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogic = () => {
  const emailInput = useRef<HTMLInputElement>();
  const passwordInput = useRef<HTMLInputElement>();

  const navigate = useNavigate();

  const { setUser, setToken } = useAuthStore();

  const { loginUserMutate, loginUserIsLoading } = useLoginUser({
    onSuccess(data) {
      const { access_token, user } = data;
      setUser(user);
      setToken(access_token);
      navigate('/my-events', { replace: true });
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailInput.current || !passwordInput.current) return;
    loginUserMutate({
      email: emailInput.current.value,
      password: passwordInput.current.value,
    });
  };

  return {
    emailInput,
    passwordInput,
    onSubmit,
  };
};
export default useLogic;
