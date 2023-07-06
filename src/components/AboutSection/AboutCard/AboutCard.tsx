import * as S from "./AboutCard.styled";

interface CardProps {
  title: string;
  description: string;
}

const AboutCard = ({ title, description }: CardProps) => {
  return (
    <S.CardWrapper>
      <S.IconImage />
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Paragraph>{description}</S.Paragraph>
      </S.TextWrapper>
    </S.CardWrapper>
  );
};

export default AboutCard;
