import React from "react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { DiscoThemeProvider, GlobalStyle } from "../src/themes";
import { CeramicProvider } from "../src/contexts";

export const decorators = [
  (Story) => (
    <DiscoThemeProvider>
      <CeramicProvider>
        <GlobalStyle />
        <div style={{ margin: "8px" }}>
          <Story />
        </div>
      </CeramicProvider>
    </DiscoThemeProvider>
  ),
];

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};
