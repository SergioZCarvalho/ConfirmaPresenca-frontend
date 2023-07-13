import { Container, Navbar } from 'react-bootstrap';
import styled, { css } from 'styled-components';

export const NavImage = styled.img`
  width: 75%;
  height: 100%;
`;

export const NavCont = styled(Container)`
  border-bottom: 1px solid #07bc67;
  padding: 0px 2rem;
`;

export const NavbarButton = styled.div`
  display: flex;
`;

export const Brand = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
`;

const sharedButtonStyles = css`
  cursor: pointer;
  color: #02be67;

  &:hover {
    color: #008b4b;
  }
`;

export const NavbarMyEvents = styled.div<{ clicked?: boolean }>`
  padding-left: 1rem;
  ${({ clicked }) =>
    clicked &&
    css`
      color: #008b4b;
    `}
  ${sharedButtonStyles}
`;

export const NavbarCreateEvents = styled.div<{ clicked?: boolean }>`
  padding-left: 1rem;
  ${({ clicked }) =>
    clicked &&
    css`
      color: #008b4b;
    `}
  ${sharedButtonStyles}
`;
