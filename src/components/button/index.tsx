import * as S from './styles';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ButtonComponent = (props: ButtonProps) => {
  return (
    <S.GenericButton onClick={props.onClick} variant="primary">
      {props.text}
    </S.GenericButton>
  );
};

export default ButtonComponent;
