import { Offcanvas } from 'react-bootstrap';
import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: #1a1a2e;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 10px;
  padding: 10px;
  border-radius: 15px;
`;
export const Image = styled.div<{ url: string }>`
  background: url(${(props) => props.url}) no-repeat center;
  background-size: cover;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`;
export const Content = styled.div`
  padding: 0px 10px;

  display: flex;
  flex-direction: column;
`;
export const Menu = styled.div``;
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
