import GlobalStyles from "./layout/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./layout/theme";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "components/AboutSection/AboutSection";
import WhyUsSection from "components/WhyUsSection/WhyUsSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroSection />
        <AboutSection />
        <WhyUsSection />
      </ThemeProvider>
    </>
  );
}

export default App;
