import { styled } from 'styled-components';

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #070d21;
  z-index: 5;
`;
export const Header = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;
export const ImageStyle = styled.img`
  max-width: 450px;
  width: 75%;
  height: 100%;
`;
