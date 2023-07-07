import * as S from "./Footer.styled";
import { ReactComponent as CompanyLogo } from "assets/Footer/Logo.svg";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Paragraph>© 2021 All rights reserved.</S.Paragraph>
      <a href="/">
        <CompanyLogo />
      </a>
      <S.RightSectionWrapper>
        <a href="/" style={{ textDecoration: "none" }}>
          <S.Paragraph>Regulamin</S.Paragraph>
        </a>
        <a href="/" style={{ textDecoration: "none" }}>
          <S.Paragraph>Polityka Prywatności</S.Paragraph>
        </a>
      </S.RightSectionWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
