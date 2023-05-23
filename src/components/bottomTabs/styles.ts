import { styled } from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
`;
export const Tabs = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #424263;
  color: #fff;
  font-size: 1rem;
  &:active {
    background-color: #2c2c41;
  }
  & svg {
    width: 100%;
    height: 2rem;
    padding: 3px;
  }
`;
