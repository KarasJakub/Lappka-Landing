import * as S from "./OpinionCard.styled";
import QuotationMarkIcon from "assets/Opinions/Icons/QuotationMark.svg";
import BackSquare from "assets/Opinions/Photos/BackSquare.png";

interface CardProps {
  description: string;
  name: string;
  age: string;
}

const OpinionCard = ({ description, name, age }: CardProps) => {
  return (
    <S.CardRootWrapper>
      {/* <S.BackFirstSquare src={BackSquare} /> */}
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
