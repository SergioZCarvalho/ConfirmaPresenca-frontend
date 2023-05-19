import { device } from '@/utils/device';
import { Carousel } from 'react-bootstrap';
import { styled } from 'styled-components';

export const CarouselStyle = styled(Carousel)`
  border-radius: 25px;
  margin: 40px 0;
  background-color: #1a1a2e;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const CarouselCaption = styled(Carousel.Caption)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a1a2e;
  margin-left: 17rem;
  height: 100%;
  top: 0;
  left: 0;
  @media ${device.tablet} {
    margin-left: 26rem;
  }
`;

export const Title = styled.p`
  color: #07bc67;
  font-size: 1rem;
  text-align: justify;
  margin-bottom: 5px;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  color: #c0c0c0;
  font-size: 1rem;
  text-align: justify;
  margin-bottom: 0;
  @media ${device.tablet} {
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
