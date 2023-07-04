import GlobalStyles from "./layout/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./layout/theme";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroSection />
      </ThemeProvider>
    </>
  );
}

export default App;
