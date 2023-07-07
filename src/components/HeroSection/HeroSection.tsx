import * as S from "./HeroSection.styled";
import { ReactComponent as CompanyLogo } from "assets/Hero/HeroIcons/LappkaLogo.svg";
import { ReactComponent as AppleLogo } from "assets/Hero/HeroIcons/AppleIcon.svg";
import { ReactComponent as GoogleLogo } from "assets/Hero/HeroIcons/GoogleIcon.svg";
import GreenSquare from "assets/Hero/HeroImages/GreenSquare.svg";
import DogImage from "assets/Hero/HeroImages/SmartphoneSecond.png";
import AppDashboradImage from "assets/Hero/HeroImages/SmartphoneFirst.png";
import AdoptImage from "assets/Hero/HeroImages/SmartphoneThird.png";
import ButtonComponent from "components/shared/ButtonComponent/ButtonComponent";

const HeroSection = () => {
  return (
    <S.HeroWrapper>
      <S.HeroHeading>
        <CompanyLogo />
        <S.TextWrapper>
          <S.Title>
            Ł<strong>app</strong>ka – pomóż zwierzakom za pomocą jednego
            kliknięcia!
          </S.Title>
          <S.Paragraph>
            Odpowiadamy na potrzeby bezbronnych zwierząt, ułatwiając ich adopcje
            oraz opiekowanie się nimi.
          </S.Paragraph>
          <S.ButtonsWrapper>
            <ButtonComponent variant="primary">
              <AppleLogo />
              <S.ButtonRightContainter>
                <S.ButtonParagraphTop>Download on the</S.ButtonParagraphTop>
                <S.ButtonParagraphBottom>App Store</S.ButtonParagraphBottom>
              </S.ButtonRightContainter>
            </ButtonComponent>
            <ButtonComponent variant="primary">
              <GoogleLogo />
              <S.ButtonRightContainter>
                <S.ButtonParagraphTop>Get it on</S.ButtonParagraphTop>
                <S.ButtonParagraphBottom>Google Play</S.ButtonParagraphBottom>
              </S.ButtonRightContainter>
            </ButtonComponent>
          </S.ButtonsWrapper>
        </S.TextWrapper>
      </S.HeroHeading>
      <S.ImagesSection>
        <S.ImageBackground src={GreenSquare} alt="Zielone tło" />
        <S.DesktopDashbordImage
          src={AppDashboradImage}
          alt="Zdjęcie panelu zarządzania aplikacji Łappka"
        />
        <S.DesktopAdoptImage src={AdoptImage} alt="Aplikacja - zaadoptuj" />
        <S.DesktopDogImage src={DogImage} alt="Pies" />
        <S.MobileImagesSection>
          <S.MobileFirstImage src={DogImage} alt="Pies" />
          <S.MobileSecondImage
            src={AppDashboradImage}
            alt="Zdjęcie panelu zarządzania aplikacji Łappka"
          />
        </S.MobileImagesSection>
      </S.ImagesSection>
    </S.HeroWrapper>
  );
};

export default HeroSection;
