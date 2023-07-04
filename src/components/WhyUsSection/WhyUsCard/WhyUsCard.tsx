import * as S from "./WhyUsCard.styled";

interface CardProps {
  description: string;
  icon: string;
}

const WhyUsCard = ({ description, icon }: CardProps) => {
  return (
    <S.CardWrapper>
      <S.Image src={icon} alt="" />
      <S.Description>{description}</S.Description>
    </S.CardWrapper>
  );
};

export default WhyUsCard;
