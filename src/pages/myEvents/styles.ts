import { Offcanvas } from 'react-bootstrap';
import { Menu } from 'react-contexify';
import { FiMoreHorizontal } from 'react-icons/fi';
import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: #1a1a2e;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin: 10px 10px;
  padding: 10px;
  border-radius: 15px;
  gap: 8px;
`;
export const Image = styled.div<{ url: string }>`
  background: url(${(props) => props.url}) no-repeat center;

  background-size: cover;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  align-self: center;
`;
export const Content = styled.div`
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
export const MenuClosed = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  color: #fff;
  justify-content: flex-end;
`;
export const Title = styled.div`
  color: #fff;
  font-size: 1.5rem;
  padding-bottom: 10px;
`;
export const information = styled.div`
  color: #c0c0c0;
  font-size: 1.5rem;
  padding-bottom: 10px;
`;
export const confirmed = styled(Offcanvas)`
  background-color: #424263;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;
export const TitleConfirmed = styled(Offcanvas.Title)`
  color: #02be67;
  font-size: 1.5rem;
`;
export const BodyConfirmed = styled(Offcanvas.Body)`
  color: #fff;
  font-size: 1rem;
`;
export const MenuIcon = styled(FiMoreHorizontal)`
  width: 2rem;
  height: 2rem;
`;
export const MenuOpen = styled(Menu)`
  --contexify-menu-bgColor: #424263;
  --contexify-item-color: #ffffff;
  --contexify-activeItem-color: #ffffff;
  --contexify-activeItem-bgColor: #02be67;
`;
