import { device } from '@/utils/device';
import { Carousel } from 'react-bootstrap';
import { styled } from 'styled-components';

export const CarouselStyle = styled(Carousel)`
  z-index: -1;
  border-radius: 25px;
  margin: 40px 0;
  background-color: #1a1a2e;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const CarouselCaption = styled(Carousel.Caption)`
  padding-top: 3rem;
  margin-left: 9.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a1a2e;
  height: 100%;

  @media ${device.tablet} {
    padding-top: 4rem;
    margin-left: 15rem;
  }
`;

export const Title = styled.p`
  color: #07bc67;
  text-align: left;
  margin-bottom: 5px;
  font-size: 0.7rem;

  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.laptopL} {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  color: #c0c0c0;

  text-align: left;
  margin-bottom: 0;
  font-size: 0.7rem;

  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.laptopL} {
    font-size: 1.5rem;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;

  @media ${device.laptop} {
    width: 80%;
  }
  @media ${device.laptopL} {
    width: 70%;
  }
`;
