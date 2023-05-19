import * as S from './styles';

const StepsComponent = () => {
  const steps = [
    {
      steps: 'Passo 1',
      image: '/steps-1.svg',
      title: 'Faça o login',
      text: ' Caso não tenha uma conta, cadastre-se',
    },
    {
      steps: 'Passo 2',
      image: '/steps-2.svg',
      title: 'Crie seu convite',
      text: 'Clique no botão criar convite, e preencha todos os dados do seu evento',
    },
    {
      steps: 'Passo 3',
      image: '/steps-3.svg',
      title: 'Envie o link ',
      text: 'Pegue o link que foi gerado e envie para os convidados',
    },
  ];
  return (
    <div>
      <S.question>Como criar um convite?</S.question>
      <S.content>
        {steps.map((step) => (
          <S.Step key={step.steps}>
            <S.img width={40} height={40} src={step.image} alt={step.steps} />
            <S.post>
              <S.title>{step.title}</S.title>
              <S.text>{step.text}</S.text>
            </S.post>
          </S.Step>
        ))}
      </S.content>
    </div>
  );
};

export default StepsComponent;
