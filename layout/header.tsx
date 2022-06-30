import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter, NextRouter } from "next/router";

import ThemeSwitch from "./component/themeSwitch";
import LanguageSwitch from "./component/languageSwitch";
import localeFile from "../locale/index.json";

function Header() {
  const router: NextRouter = useRouter();
  const { locale } = router;
  const currentLocale = locale ?? "fa";

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          margin: "0px 0px 8px",
          fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
          fontWeight: "500",
          fontSize: "1.07143rem",
          lineHeight: "1.6",
        }}
      >
        {/* @ts-ignore: Unreachable code error*/}
        {localeFile[currentLocale].userSettings}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <LanguageSwitch locale={currentLocale} />
        <ThemeSwitch />
      </Box>
    </Box>
  );
}

export default Header;
