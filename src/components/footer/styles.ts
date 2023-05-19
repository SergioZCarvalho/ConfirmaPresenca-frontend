import { styled } from 'styled-components';

export const footerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 45px;
  padding-right: 20px;
`;
export const textContainer = styled.p`
  font-size: 0.5rem;
  color: #fff;
`;
export const linkContainer = styled.a`
  font-size: 0.5rem;
  color: #03be66;
  text-decoration: none;
  &:active {
    color: #0e6543;
  }
  &:hover {
    color: #0e6543;
    transition: 0.5s;
  }
`;
