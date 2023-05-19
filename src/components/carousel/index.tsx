import { Carousel } from 'react-bootstrap';
import * as S from './styles';

const CarouselComponent = () => {
  const banners = [
    {
      title: 'GERENCIAMENTO SIMPLES',
      text: 'Gerencie suas informações de forma simples e fácil.',
      id: 1,
      image: '/carousel-1.svg',
    },
    // {
    //   title: 'COMPARTILHAMENTO FÁCIL',
    //   text: 'Compartilhe suas informações com seus amigos e familiares.',
    //   id: 2,
    //   image: '/carousel-2.svg',
    // },
    // {
    //   title: 'CONVITES PERSONALIZADOS',
    //   text: 'Crie convites virtuais personalizados e criativos para o seu evento.',
    //   id: 3,
    //   image: '/carousel-3.svg',
    // },
  ];
  return (
    <S.CarouselStyle fade={true} controls={false} indicators={false}>
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <S.BannerImage src={banner.image} alt="First slide" />
          <S.CarouselCaption>
            <S.Title>
              <strong>{banner.title}</strong>
            </S.Title>
            <S.Text>{banner.text}</S.Text>
          </S.CarouselCaption>
        </Carousel.Item>
      ))}
    </S.CarouselStyle>
  );
};

export default CarouselComponent;
