import CarouselComponent from '@/components/carousel';
import * as S from './styles';
import ButtonComponent from '@/components/button';
import StepsComponent from '@/components/steps';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>Crie seus eventos sem preocupação</S.HeaderTitle>
        <S.HeaderSubtitle>
          um site seguro que te ajuda a organizar seus eventos e também na confirmação dos seus
          convidados
        </S.HeaderSubtitle>
        <ButtonComponent
          onClick={() => {
            navigate('/auth/register');
          }}
          text="Criar sua conta"
        ></ButtonComponent>
      </S.Header>
      <CarouselComponent />
      <StepsComponent></StepsComponent>
    </S.Container>
  );
};

export default HomePage;
