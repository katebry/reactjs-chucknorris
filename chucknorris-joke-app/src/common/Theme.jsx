import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkBlue: "#002663",
    lighterBlue: "#046ab8",
    lightestBlue: "#bce3f2",
    grey: "#666"
  },
  padding: {
    standard: "20px"
  }
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
