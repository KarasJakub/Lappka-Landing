import React from "react";
import Slider from "react-slick";
import "styles/slick.css";
import OpinionCard from "../OpinionCard/OpinionCard";
import * as S from "./OpinionsSlider.styled";
import Button from "../SliderButton/SliderButton";
import { ReactComponent as ArrowIcon } from "assets/Slider/Icons/Arrow.svg";

const OpinionsContent = [
  {
    description:
      "Dzięki Łappce bardzo szybko odnalazłam moją ukochaną Calineczkę. Uciekła mi z domu nad ranem i nie mogłam jej dogonić. Zrozpaczona szybko udostępniłam wiadomość o tym w Łappce. Już wieczorem odezwał się do mnie inny użytkownik, mówiąc, że Calineczka jest u niego w ogrodzie. Jakieś 15 minut później już jechałyśmy razem do domu. Cudowna aplikacja!",
    name: "Malwina",
    age: "32 lata",
  },
  {
    description:
      "Już do jakiegoś czasu myślałam o adopcji pieska. Niestety nigdy nie miałam czasu, żeby pojechać do schroniska i znaleźć mojego nowego ukochanego 😊 dzięki Łappce wybrałam Diego, który znajdował się w schronisku blisko mnie. Wystarczyło założenie konta i kilka kliknięć. Teraz jesteśmy z Diegiem w domu i za nic nie zrozumiem dlaczego ten slodziak był w schronisku. Jeśli ktoś myśli o adopcji gorąco polecam Łappkę!",
    name: "Kunegunda",
    age: "19 lata",
  },
];

const OpinionsSlider = () => {
  const slider = React.useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const sliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    initial: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
    variableWidth: false,
  };

  const handlePrevClick = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  const handleAfterChange = (current: number) => {
    setCurrentSlide(current);
  };

  const isPrevDisabled = React.useMemo(
    () => currentSlide === 0,
    [currentSlide]
  );
  const isNextDisabled = React.useMemo(
    () => currentSlide === 1,
    [currentSlide]
  );

  return (
    <S.SliderWrapperOuter>
      <S.SliderWrapperInner>
        <Slider
          ref={slider}
          {...sliderSettings}
          afterChange={handleAfterChange}
        >
          {OpinionsContent.map((opinion, index) => (
            <OpinionCard
              description={opinion.description}
              name={opinion.name}
              age={opinion.age}
              key={`key: ${index}`}
            />
          ))}
        </Slider>
        <S.ButtonsWrapper>
          <Button onClick={handlePrevClick}>
            <ArrowIcon fill={isPrevDisabled ? "#000000" : "#4EBC84"} />
          </Button>
          <Button onClick={handleNextClick}>
            <ArrowIcon
              style={{ transform: "rotate(180deg)" }}
              fill={isNextDisabled ? "#000000" : "#4EBC84"}
            />
          </Button>
        </S.ButtonsWrapper>
      </S.SliderWrapperInner>
    </S.SliderWrapperOuter>
  );
};

export default OpinionsSlider;
