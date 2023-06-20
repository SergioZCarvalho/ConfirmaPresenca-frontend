import Navbar from 'react-bootstrap/Navbar';
import * as S from './styles';
import ButtonComponent from '../button';
import Auth from '../auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const { user, logout } = useAuthStore();

  useEffect(() => {
    setLoad(true);
  }, []);

  //criar funcao de handleLoginClick
  // se user ? ir pra login, senao fazer logout

  return (
    <>
      {load && (
        <Navbar>
          <S.NavCont fluid>
            <Navbar.Brand href="/">
              <S.NavImage width={500} height={145} src="/logo.png" alt="" />
            </Navbar.Brand>
            <Navbar.Text>
              <ButtonComponent
                text={user ? 'Sair' : 'Entrar'}
                onClick={() => {
                  //chamar funcao que foi criada aqui
                  navigate('/auth');
                }}
              ></ButtonComponent>
            </Navbar.Text>
          </S.NavCont>
        </Navbar>
      )}
      <Auth />
    </>
  );
};

export default NavbarComponent;
