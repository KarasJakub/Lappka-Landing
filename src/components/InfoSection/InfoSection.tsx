import * as S from "./InfoSection.styled";
import AppVizualizationImage from "assets/Info/AppVizualization.png";

const InfoSection = () => {
  return (
    <S.InfoWrapper>
      <S.TextSection>
        <S.Title>Podaj swoją łapkę zwierzakom!</S.Title>
        <S.Paragraph>
          Misja, która przyświeca Łappce, związana jest z chęcią niesienia
          pomocy zwierzakom oraz całej społeczności, dla której losy bezbronnych
          zwierząt nie są obojętne. Osób chcących pomagać jest wiele. Czasami
          jednak warunki oraz indywidualne możliwości utrudniają adoptowanie
          pupili. Postanowiliśmy wyjść naprzeciw tym potrzebom oraz znacznie
          usprawnić całość procesu. Dzięki Łappce przygarnianie samotnych psów,
          kotów i innych zwierząt domowych będzie tak proste, jak kilka kliknięć
          w telefonie. Aplikacja ułatwi także znajdowanie zaginionych pupili,
          dzięki wymianie informacji pomiędzy członkami społeczności. Dodatkowo,
          każdy użytkownik będzie mógł w niej prowadzić kartę zdrowia swojego
          ukochanego zwierzaka.
        </S.Paragraph>
        <S.SubParagraph>
          Razem możemy pomóc jeszcze większej ilości zwierząt w potrzebie!
        </S.SubParagraph>
      </S.TextSection>
      <S.Image
        src={AppVizualizationImage}
        alt="Wizualizacja aplikacji na telefonie"
      />
    </S.InfoWrapper>
  );
};

export default InfoSection;
