import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { useRouter, NextRouter } from "next/router";

import Header from "./header";
import { useColorMode, ColorModeProvider } from "../context/colorContext";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

function Layout({ children }: { children: any }) {
  const { colorMode } = useColorMode();
  const router: NextRouter = useRouter();
  const { locale } = router;

  const theme = React.useMemo(() => {
    let currentTheme = colorMode === "light" ? lightTheme : darkTheme;
    const direction = locale === "en" ? "ltr" : "rtl";
    currentTheme = { ...currentTheme, direction };
    return createTheme(currentTheme);
  }, [colorMode, locale]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "300px",
          ["@media (min-width: 900px)"]: {
            maxWidth: "900px",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            marginTop: "32px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Header />
          </Box>
          <Box>{children}</Box>
        </Box>
      </Container>
    </ThemeProvider>

  );
}

export default Layout;
