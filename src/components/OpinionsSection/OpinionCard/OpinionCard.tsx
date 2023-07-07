import * as S from "./OpinionCard.styled";
import QuotationMarkIcon from "assets/Opinions/Icons/QuotationMark.svg";

interface CardProps {
  description: string;
  name: string;
  age: string;
}

const OpinionCard = ({ description, name, age }: CardProps) => {
  return (
    <S.CardWrapper>
      <S.BackgroundImage src={QuotationMarkIcon} alt="Ikona apostrofu" />
      <S.Description>{description}</S.Description>
      <S.IdentityWrapper>
        <S.Name>{name}</S.Name>
        <S.AgeParagraph>{age}</S.AgeParagraph>
      </S.IdentityWrapper>
    </S.CardWrapper>
  );
};

export default OpinionCard;
