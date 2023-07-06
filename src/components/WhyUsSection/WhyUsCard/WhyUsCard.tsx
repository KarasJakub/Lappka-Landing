import React from "react";
import * as S from "./WhyUsCard.styled";

interface CardProps {
  description: string;
  icon: JSX.Element;
}

const WhyUsCard = ({ description, icon }: CardProps) => {
  return (
    <S.CardWrapper>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <S.Description>{description}</S.Description>
    </S.CardWrapper>
  );
};

export default WhyUsCard;
