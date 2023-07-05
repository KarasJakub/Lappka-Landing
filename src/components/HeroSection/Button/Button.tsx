import React from "react";
import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  alt: string;
  subtitle: string;
  title: string;
}

const Button = ({ icon, alt, title, subtitle, ...props }: ButtonProps) => {
  return (
    <S.Button {...props}>
      <img src={icon} alt={alt} />
      <S.RightContainter>
        <S.ParagraphTop>{subtitle}</S.ParagraphTop>
        <S.ParagraphBottom>{title}</S.ParagraphBottom>
      </S.RightContainter>
    </S.Button>
  );
};

export default Button;
