const breakpoints = {
    tablet: 768,
    laptop: 1024,
    largeLaptop: 1280,
    desktop: 1536,
  }

  const theme = {
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extraBold: 800
    },
    color: {
      primary: "#4EBC84",
      textDark: "##1E2022",
      textGrey: "#77838F",
      white: "#FFFFFF",
    },
    font: {
      primary: '"Ubuntu", sans-serif',
      secondary: '"Nunito", sans-serif',
    },
    MQ: {
      tablet: `@media (min-width: ${breakpoints.tablet}px)`,
      laptop: `@media (min-width: ${breakpoints.laptop}px)`,
      largeLaptop: `@media (min-width: ${breakpoints.largeLaptop}px)`,
      desktop: `@media (min-width: ${breakpoints.desktop}px)`,
    }
  }

  export default theme