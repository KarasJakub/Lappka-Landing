import GlobalStyles from "./layout/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./layout/theme";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "components/AboutSection/AboutSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroSection />
        <AboutSection />
      </ThemeProvider>
    </>
  );
}

export default App;
