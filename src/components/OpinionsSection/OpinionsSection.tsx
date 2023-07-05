import * as S from "./OpinionsSection.styled";
import OpinionsSlider from "./OpinionsSlider/OpinionsSlider";
import FirstWomenImage from "assets/Opinions/Photos/FirstWomen.png";
import SecondWomenImage from "assets/Opinions/Photos/SecondWomen.png";
import FirstManImage from "assets/Opinions/Photos/FirstMan.png";
import SecondManImage from "assets/Opinions/Photos/SecondMan.png";

const OpinionsSection = () => {
  return (
    <S.OpinionsWrapper>
      <S.OpinionsInnerWrapper>
        <S.Title>Opinie</S.Title>
        <OpinionsSlider />
        <S.FirstWomenImage src={FirstWomenImage} alt="Kobieta" />
        <S.SecondWomenImage src={SecondWomenImage} alt="Kobieta" />
        <S.FirstManImage src={FirstManImage} alt="Mężczyzna" />
        <S.SecondManImage src={SecondManImage} alt="Mężczyzna" />
      </S.OpinionsInnerWrapper>
    </S.OpinionsWrapper>
  );
};

export default OpinionsSection;
