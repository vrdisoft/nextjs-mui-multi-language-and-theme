import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ThemeSwitch from "./component/themeSwitch";
import LanguageSwitch from "./component/languageSwitch";
import { getRoute } from "../route/routes";
import { getTitle } from "../helper/getTitle";
import { getLocaleAndPath } from "../helper/getLocaleAndPath";

function Header() {
  const { locale, pathname } = getLocaleAndPath();
  const currentRoute = getRoute(pathname);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        height: "57px",
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
        {getTitle(currentRoute.title)}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <LanguageSwitch locale={locale} />
        <ThemeSwitch />
      </Box>
    </Box>
  );
}

export default Header;
