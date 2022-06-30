import React, { useEffect } from "react";
import { useRouter, NextRouter } from "next/router";
import type { AppProps } from 'next/app';

import Layout from '../layout';
import { StyledEngineProvider } from "@mui/material/styles";
import { ColorModeProvider } from "../context/colorContext";

function MyApp({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();
  const { locale } = router;

  useEffect(() => {
    const direction = locale === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
  }, [locale]);

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
