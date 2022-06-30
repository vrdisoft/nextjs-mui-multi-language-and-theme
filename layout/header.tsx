import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { useColorMode } from "../context/colorContext";
import ThemeSwitch from "./component/themeSwitch";
import LanguageSwitch from "./component/languageSwitch";

function Header() {
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
        User settings
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <LanguageSwitch />
        <ThemeSwitch />
      </Box>
    </Box>
  );
}

export default Header;
