import React from "react";
import * as S from "./ButtonComponent.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <S.Button {...props} className={`${variant}`}>
      {children}
    </S.Button>
  );
};

export default Button;
