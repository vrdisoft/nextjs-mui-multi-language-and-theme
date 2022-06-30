import React, { useEffect } from "react";

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout';
import { StyledEngineProvider } from "@mui/material/styles";
import { ColorModeProvider } from "../context/colorContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <StyledEngineProvider injectFirst>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledEngineProvider>
    </ColorModeProvider>
  )
}

export default MyApp
