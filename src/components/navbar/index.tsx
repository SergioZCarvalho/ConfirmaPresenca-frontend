import Navbar from 'react-bootstrap/Navbar';
import * as S from './styles';
import ButtonComponent from '../button';
import Auth from '../auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

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
                text="Entrar"
                onClick={() => {
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
