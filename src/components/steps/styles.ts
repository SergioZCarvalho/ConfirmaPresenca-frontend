import { device } from '@/utils/device';
import { styled } from 'styled-components';

export const Step = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const question = styled.p`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
`;

export const content = styled.div`
  @media ${device.tablet} {
    display: flex;
  }
`;

export const img = styled.img`
  width: 5rem;
`;

export const post = styled.div`
  width: 60%;
  margin: 25px 0;
`;
export const title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 5px;
  color: #fff;
`;
export const text = styled.div`
  text-align: center;
  font-size: 1rem;
  padding-bottom: 25px;
  color: #fff;
`;
