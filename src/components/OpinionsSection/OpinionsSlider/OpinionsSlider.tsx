import React from "react";
import Slider from "react-slick";
import "styles/slick.css";
import OpinionCard from "../OpinionCard/OpinionCard";
import * as S from "./OpinionsSlider.styled";
import Button from "../SliderButton/SliderButton";
import Arrow from "assets/Slider/Icons/Arrow.svg";

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

  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide === 1;

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
              key={index}
            />
          ))}
        </Slider>
        <S.ButtonsWrapper>
          <Button onClick={handlePrevClick} image={Arrow}>
            <svg
              width="32"
              height="17"
              viewBox="0 0 32 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.08726 0.916142C8.2203 0.971349 8.34115 1.05226 8.44287 1.15424C8.54485 1.25597 8.62576 1.37681 8.68097 1.50985C8.73618 1.64289 8.76459 1.78552 8.76459 1.92956C8.76459 2.0736 8.73618 2.21623 8.68097 2.34927C8.62576 2.48231 8.54485 2.60316 8.44287 2.70488L3.74102 7.40496H30.6348C30.9252 7.40496 31.2037 7.52033 31.4091 7.7257C31.6145 7.93107 31.7299 8.20961 31.7299 8.50004C31.7299 8.79048 31.6145 9.06902 31.4091 9.27438C31.2037 9.47975 30.9252 9.59513 30.6348 9.59513H3.74096L8.44287 14.2953C8.6485 14.5009 8.76402 14.7798 8.76402 15.0706C8.76402 15.3614 8.6485 15.6403 8.44287 15.8459C8.23724 16.0515 7.95835 16.1671 7.66755 16.1671C7.37675 16.1671 7.09786 16.0515 6.89223 15.8459L0.321716 9.2754C0.219736 9.17367 0.138824 9.05283 0.0836182 8.91978C0.0284119 8.78674 -5.72205e-06 8.64412 -5.72205e-06 8.50008C-5.72205e-06 8.35603 0.0284119 8.21341 0.0836182 8.08036C0.138824 7.94732 0.219736 7.82648 0.321716 7.72475L6.89223 1.15424C6.99395 1.05226 7.1148 0.971349 7.24784 0.916142C7.38088 0.860936 7.52351 0.83252 7.66755 0.83252C7.81159 0.83252 7.95422 0.860936 8.08726 0.916142Z"
                fill={isPrevDisabled ? "black" : "#4EBC84"}
              />
            </svg>
          </Button>
          <Button onClick={handleNextClick} image={Arrow}>
            <svg
              width="32"
              height="17"
              viewBox="0 0 32 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                opacity="0.3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.08726 0.916142C8.2203 0.971349 8.34115 1.05226 8.44287 1.15424C8.54485 1.25597 8.62576 1.37681 8.68097 1.50985C8.73618 1.64289 8.76459 1.78552 8.76459 1.92956C8.76459 2.0736 8.73618 2.21623 8.68097 2.34927C8.62576 2.48231 8.54485 2.60316 8.44287 2.70488L3.74102 7.40496H30.6348C30.9252 7.40496 31.2037 7.52033 31.4091 7.7257C31.6145 7.93107 31.7299 8.20961 31.7299 8.50004C31.7299 8.79048 31.6145 9.06902 31.4091 9.27438C31.2037 9.47975 30.9252 9.59513 30.6348 9.59513H3.74096L8.44287 14.2953C8.6485 14.5009 8.76402 14.7798 8.76402 15.0706C8.76402 15.3614 8.6485 15.6403 8.44287 15.8459C8.23724 16.0515 7.95835 16.1671 7.66755 16.1671C7.37675 16.1671 7.09786 16.0515 6.89223 15.8459L0.321716 9.2754C0.219736 9.17367 0.138824 9.05283 0.0836182 8.91978C0.0284119 8.78674 -5.72205e-06 8.64412 -5.72205e-06 8.50008C-5.72205e-06 8.35603 0.0284119 8.21341 0.0836182 8.08036C0.138824 7.94732 0.219736 7.82648 0.321716 7.72475L6.89223 1.15424C6.99395 1.05226 7.1148 0.971349 7.24784 0.916142C7.38088 0.860936 7.52351 0.83252 7.66755 0.83252C7.81159 0.83252 7.95422 0.860936 8.08726 0.916142Z"
                fill={isNextDisabled ? "black" : "#4EBC84"}
              />
            </svg>
          </Button>
        </S.ButtonsWrapper>
      </S.SliderWrapperInner>
    </S.SliderWrapperOuter>
  );
};

export default OpinionsSlider;
