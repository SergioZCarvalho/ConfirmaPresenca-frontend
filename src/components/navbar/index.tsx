import Navbar from 'react-bootstrap/Navbar';
import * as S from './styles';
import ButtonComponent from '../button';
import Auth from '../auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store';
import { deviceSize } from '@/utils/device';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const { user, logout } = useAuthStore();

  useEffect(() => {
    setLoad(true);
  }, []);

  const handleLoginClick = () => {
    if (user) {
      logout();
      return navigate('/');
    } else {
      return navigate('/auth');
    }
  };

  const shouldRenderNavLinks = user && window.innerWidth > deviceSize.tablet;

  return (
    <>
      {load && (
        <Navbar>
          <S.NavCont fluid>
            <S.Brand>
              <S.NavImage
                width={500}
                height={145}
                src="/logo.png"
                alt=""
                onClick={() => navigate('/')}
              />
              {shouldRenderNavLinks && (
                <S.NavbarButton>
                  <S.NavbarMyEvents onClick={() => navigate('/my-events')}>
                    meus eventos
                  </S.NavbarMyEvents>
                  <S.NavbarCreateEvents onClick={() => navigate('/create-event')}>
                    criar evento
                  </S.NavbarCreateEvents>
                </S.NavbarButton>
              )}
            </S.Brand>

            <Navbar.Text>
              <ButtonComponent text={user ? 'Sair' : 'Entrar'} onClick={handleLoginClick} />
            </Navbar.Text>
          </S.NavCont>
        </Navbar>
      )}
      <Auth />
    </>
  );
};

export default NavbarComponent;
