import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.p`
  font-size: 3rem;
  color: white;
  text-align: center;
`;

export const HeaderSubtitle = styled.p`
  display: flex;
  margin-top: 10px;
  color: #c0c0c0;
  text-align: left;
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.6rem;
`;
