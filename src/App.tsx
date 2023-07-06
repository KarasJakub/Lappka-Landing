import GlobalStyles from "./layout/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import theme from "./layout/theme";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "components/AboutSection/AboutSection";
import WhyUsSection from "components/WhyUsSection/WhyUsSection";
import InfoSection from "components/InfoSection/InfoSection";
import OpinionsSection from "components/OpinionsSection/OpinionsSection";
import CTA from "components/CTA/CTA";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <InfoSection />
        <OpinionsSection />
        <CTA />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
