import * as S from "./AboutSection.styled";
import AboutCard from "./AboutCard/AboutCard";

const CardsData = [
  {
    title: "ZAADOPTUJ IDEALNEGO ZWIERZAKA",
    description:
      "Dzięki Łappce dużo łatwiej zaadaptujesz samotne zwierzaki. Znalezienie i wybranie Twojego nowego pupila są teraz jeszcze łatwiejsze – możesz to zrobić nie wychodząc z domu!",
  },
  {
    title: "WYBIERZ IDEALNY WOLONTARIAT",
    description:
      "Korzystając z Łappki wejdziesz do społeczności osób, którym nie jest obojętny los zwierzaków. Razem możemy pomóc jeszcze większej ilości opuszczonych zwierzaków.",
  },
  {
    title: "ZADBAJ O SWOJEGO PUPILA",
    description:
      "Oprócz adoptowania samotnych zwierząt, możesz również w niej prowadzić dokumentację medyczną swojego pupila i kontaktować się z innymi użytkownikami.",
  },
  {
    title: "ODNAJDŹ UKOCHANĄ ZBUGĘ",
    description:
      "Czy zdarzyło ci się kiedyś, że Twój ukochany pies albo kot uciekł lub zniknął? Niestety zdarza się to dość często. Dlatego postanowiliśmy wykorzystać działanie Łappki oraz życzliwość społeczności, do wspólnego rozwiązywania takich problemów!",
  },
];

const AboutSection = () => {
  return (
    <S.AboutWrapper>
      <S.Title>O naszej aplikacji</S.Title>
      <S.ContentWrapper>
        {CardsData.map((card, index) => (
          <AboutCard
            title={card.title}
            description={card.description}
            key={`key: ${index}`}
          />
        ))}
      </S.ContentWrapper>
    </S.AboutWrapper>
  );
};

export default AboutSection;
