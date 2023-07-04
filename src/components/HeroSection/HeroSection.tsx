import * as S from "./HeroSection.styled";
import CompanyLogo from "assets/Hero/HeroIcons/LappkaLogo.svg";
import AppleLogo from "assets/Hero/HeroIcons/AppleIcon.svg";
import GoogleLogo from "assets/Hero/HeroIcons/GoogleIcon.svg";
import GreenSquare from "assets/Hero/HeroImages/GreenSquare.svg";
import DogImage from "assets/Hero/HeroImages/SmartphoneSecond.png";
import AppDashboradImage from "assets/Hero/HeroImages/SmartphoneFirst.png";
import AdoptImage from "assets/Hero/HeroImages/SmartphoneThird.png";
import Button from "./Button/Button";

const HeroSection = () => {
  return (
    <S.HeroWrapper>
      <S.HeroHeading>
        <S.HeadingCompanyImage src={CompanyLogo} alt="Łappka Logo" />
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
            <Button
              icon={AppleLogo}
              alt="Apple Logo"
              subtitle="Download on the"
              title="App Store"
            />
            <Button
              icon={GoogleLogo}
              alt="Google Logo"
              subtitle="Get it on"
              title="Google Play"
            />
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
