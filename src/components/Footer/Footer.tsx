import * as S from "./Footer.styled";
import { ReactComponent as CompanyLogo } from "assets/Footer/Logo.svg";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Paragraph>© 2021 All rights reserved.</S.Paragraph>
      <CompanyLogo />
      <S.RightSectionWrapper>
        <S.Paragraph>Regulamin</S.Paragraph>
        <S.Paragraph>Polityka Prywatności</S.Paragraph>
      </S.RightSectionWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
