import * as S from './styles';

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  color?: 'primary' | 'secondary' | 'danger';
}

const ButtonComponent = ({
  text,
  onClick,
  color = 'primary',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const colorObj = {
    primary: {
      colorText: '#060c21',
      colorButton: '#02BE67',
      colorAction: '#008B4B',
    },
    secondary: {
      colorText: '#060c21',
      colorButton: '#1182EB',
      colorAction: '#00598B',
    },
    danger: {
      colorText: '#060c21',
      colorButton: '#970101',
      colorAction: '#6a0000',
    },
  };
  return (
    <S.GenericButton
      {...props}
      {...colorObj[color]}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        onClick && onClick(e);
      }}
    >
      {text}
    </S.GenericButton>
  );
};

export default ButtonComponent;
