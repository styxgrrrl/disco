import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStyles, { GlobalStylesProps } from "@mui/material/GlobalStyles";

const globalStyles: GlobalStylesProps["styles"] = {
  html: {
    boxSizing: "border-box",
  },
  body: {
    backgroundColor: "#333",
    color: "#fff",
    fontFamily: "Work Sans",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    margin: 0,
  },
  "*": {
    boxSizing: "inherit",
  },
  ":after": {
    boxSizing: "inherit",
  },
  ":before": {
    boxSizing: "inherit",
  },
};

export const GlobalStyle = () => <GlobalStyles styles={globalStyles} />;

const discoTheme = createTheme({
  typography: {
    fontFamily: "Work Sans, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: 96,
      fontWeight: 300,
      letterSpacing: "-5px",
    },
    h2: {
      fontSize: 60,
      fontWeight: 600,
      letterSpacing: "-3px",
    },
    h3: {
      fontSize: 48,
      fontWeight: 600,
      letterSpacing: "-2.8px",
    },
    h4: {
      fontSize: 34,
      fontWeight: 600,
      letterSpacing: "-1px",
    },
    h5: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: "-1px",
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: "-1px",
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: "-0.5px",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "-0.2px",
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: "-0.5px",
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: "-0.2px",
    },
    /** AKA "Helper Text" */
    caption: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: "0",
    },
    /** AKA "Badge Label" */
    overline: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.4px",
      textTransform: "uppercase",
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      textTransform: "none",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#F6C6FF",
      main: "#C295F3",
      dark: "#9066C0",
      contrastText: "#000",
    },
    secondary: {
      light: "#63F4FF",
      main: "#01C0D6",
      dark: "#0090A5",
      contrastText: "#000",
    },
  },
});

export interface DiscoThemeProviderProps {
  theme?: any;
}

export const DiscoThemeProvider: React.FunctionComponent<DiscoThemeProviderProps> = (props) => {
  return <ThemeProvider theme={{ ...discoTheme, ...props.theme }}>{props.children}</ThemeProvider>;
};
