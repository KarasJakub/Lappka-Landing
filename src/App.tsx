import GlobalStyles from "./layout/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./layout/theme";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div>Hello World</div>
      </ThemeProvider>
    </>
  );
}

export default App;
