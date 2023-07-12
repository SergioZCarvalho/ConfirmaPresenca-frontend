import { CloseButton } from 'react-bootstrap';
import Login from './login';
import * as S from './styles';
import Register from './register';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import ForgetPassword from './forgetPassword';

const Auth = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isForget, setIsForget] = useState(false);
  const [isVisible, setIsVisible] = useState(0);

  useEffect(() => {
    setIsLogin(pathname === '/auth');
    setIsRegister(pathname === '/auth/register');
    setIsForget(pathname === '/auth/forget-password');
    setIsVisible(1);
  }, [pathname]);

  return isLogin || isRegister || isForget ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible }}
      transition={{ duration: 0.5 }}
    >
      <S.AuthContainer>
        <S.Header>
          <S.ImageStyle src="/logo.png" alt="Confirma Presença" />
          <CloseButton
            onClick={() => {
              setIsVisible(0);
              setTimeout(() => {
                navigate('/');
              }, 600);
            }}
            variant="white"
          />
        </S.Header>
        {isLogin && <Login />}
        {isRegister && <Register />}
        {isForget && <ForgetPassword />}
      </S.AuthContainer>
    </motion.div>
  ) : (
    <></>
  );
};

export default Auth;
