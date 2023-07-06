import * as S from "./WhyUsCard.styled";

interface CardProps {
  description: string;
  icon: string;
  alt: string;
}

const WhyUsCard = ({ description, icon, alt }: CardProps) => {
  return (
    <S.CardWrapper>
      <S.Image src={icon} alt={alt} />
      <S.Description>{description}</S.Description>
    </S.CardWrapper>
  );
};

export default WhyUsCard;
