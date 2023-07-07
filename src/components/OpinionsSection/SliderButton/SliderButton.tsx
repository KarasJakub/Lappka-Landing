import * as S from "./SliderButton.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
