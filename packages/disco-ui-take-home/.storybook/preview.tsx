import React from "react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { DiscoThemeProvider, GlobalStyle } from "../src/themes";

export const decorators = [
  (Story) => (
    <DiscoThemeProvider>
      <GlobalStyle />
      <div style={{ margin: "8px" }}>
        <Story />
      </div>
    </DiscoThemeProvider>
  ),
];

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};
