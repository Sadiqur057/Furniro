"use client";

import React, { FC, ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Poppins } from "next/font/google";

const poppins = Poppins(
  {
    weight: ['400','500','600','700'],
    subsets: ['latin'],
  }
);


const theme = createTheme({
  palette: {
    primary: {
      main: "#B88E2F"
      
    },
    secondary: {
      main: "#F9F1E7",
    },
    text:{
      secondary:'rgb(159, 159, 159)'
    }
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

interface TProps {
  children: ReactNode;
}

const ThemeWrapper: FC<TProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;