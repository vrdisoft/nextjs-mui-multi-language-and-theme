import React, { useEffect, useReducer } from "react";
import { useRouter, NextRouter } from "next/router";
import type { AppProps } from 'next/app';

import Layout from '../layout';
import { StyledEngineProvider } from "@mui/material/styles";
import { ColorModeProvider } from "../context/colorContext";
import { reducer, INIT_STATE } from "../stateManager/reducer";
import { ProviderDispatchSocial  } from "../context/socialDispatcherContext";
import { ProviderStateSocial } from "../context/socialStateContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const router: NextRouter = useRouter();
  const { locale } = router;

  useEffect(() => {
    const direction = locale === "fa" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
  }, [locale]);

  return (
    <ColorModeProvider>
      <ProviderDispatchSocial dispatch={dispatch}>
        <ProviderStateSocial state={state}>
          <StyledEngineProvider injectFirst>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StyledEngineProvider>
        </ProviderStateSocial>
      </ProviderDispatchSocial>
    </ColorModeProvider>
  )
}

export default MyApp
