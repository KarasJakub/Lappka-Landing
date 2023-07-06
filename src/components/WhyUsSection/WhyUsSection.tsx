import * as S from "./WhyUsSection.styled";
import WhyUsCard from "./WhyUsCard/WhyUsCard";
import { ReactComponent as GlassIcon } from "assets/WhyUsIcons/Glass.svg";
import { ReactComponent as WindowIcon } from "assets/WhyUsIcons/Window.svg";
import { ReactComponent as CircleIcon } from "assets/WhyUsIcons/Circle.svg";
import { ReactComponent as LocationIcon } from "assets/WhyUsIcons/Location.svg";
import { ReactComponent as HomeIcon } from "assets/WhyUsIcons/Home.svg";
import { ReactComponent as HeartIcon } from "assets/WhyUsIcons/Heart.svg";
import { ReactComponent as EyeIcon } from "assets/WhyUsIcons/Eye.svg";
import { ReactComponent as EmptyHeartIcon } from "assets/WhyUsIcons/EmptyHeart.svg";

const CardsContent = [
  {
    description:
      "Wyszukiwanie zwierzaków w oparciu o Twoje preferencje co do ich typów (pies, kot, świnka morska itd.) oraz w wybranej lokalizacji (położenie schroniska względem Ciebie itp.)",
    icon: <GlassIcon />,
  },
  {
    description:
      "Podstawowe informacje na jego temat wszystkich zwierzaków, jak np.: odległość do schroniska, w którym przebywa, gatunek, maść, wiek, płeć, status sterylizacji oraz informacje o usposobieniu zwierzęcia)",
    icon: <HomeIcon />,
  },
  {
    description:
      "Możliwość udostępniania profili zwierzaków w mediach społecznościowych",
    icon: <WindowIcon />,
  },
  {
    description:
      "Cyfrowa książeczka zdrowia pupila, w której możesz aktywnie śledzić stan szczepień, wizyt u weterynarza, przepisywanych lekarstw, odbytych operacji oraz innych kwestii związanych ze zdrowiem pupila",
    icon: <HeartIcon />,
  },
  {
    description:
      "Możliwość wyboru różnych wariantów wolontariatu, związanego z pomocą dla schronisk i zwierzaków",
    icon: <CircleIcon />,
  },
  {
    description:
      "Zgłaszanie zaginionych pupili, z możliwością korespondowania między członkami społeczności oraz możliwością udostępniania lokalizacji",
    icon: <EyeIcon />,
  },
  {
    description:
      "Raportowanie błąkających się zwierząt wraz z możliwością udostępniania ich lokalizacji w aplikacji (informowanie schronisk i służb zajmujących się opuszczonymi zwierzętami)",
    icon: <LocationIcon />,
  },
  {
    description:
      "Możliwość zapisywania przeglądanych profili w kategorii „Ulubione”, tak aby w wygodny sposób przeglądać je później",
    icon: <EmptyHeartIcon />,
  },
];

const WhyUsSection = () => {
  return (
    <S.WhyUsWrapper>
      <S.Title>
        Dlaczego Ł<strong>app</strong>ka?
      </S.Title>
      <S.ContentWrapper>
        {CardsContent.map((card, index) => (
          <WhyUsCard
            description={card.description}
            icon={card.icon}
            key={`card_${index}`}
          />
        ))}
      </S.ContentWrapper>
    </S.WhyUsWrapper>
  );
};

export default WhyUsSection;
