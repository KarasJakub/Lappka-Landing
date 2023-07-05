import GlobalStyles from "./layout/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./layout/theme";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "components/AboutSection/AboutSection";
import WhyUsSection from "components/WhyUsSection/WhyUsSection";
import InfoSection from "components/InfoSection/InfoSection";
import OpinionsSection from "components/OpinionsSection/OpinionsSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
        <InfoSection />
        <OpinionsSection />
      </ThemeProvider>
    </>
  );
}

export default App;
