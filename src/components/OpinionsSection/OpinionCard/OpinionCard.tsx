import * as S from "./OpinionCard.styled";
import QuotationMarkIcon from "assets/Opinions/Icons/QuotationMark.svg";

interface CardProps {
  description: string;
  name: string;
  age: string;
}

const OpinionCard = ({ description, name, age }: CardProps) => {
  return (
    <S.CardRootWrapper>
      <S.CardWrapper>
        <S.BackgroundImage src={QuotationMarkIcon} alt="Ikona apostrofu" />
        <S.Description>{description}</S.Description>
        <S.Name>{name}</S.Name>
        <S.AgeParagraph>{age}</S.AgeParagraph>
      </S.CardWrapper>
    </S.CardRootWrapper>
  );
};

export default OpinionCard;
