import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRouter, NextRouter } from "next/router";

type LanguageSwitchProps = {
  locale: string;
}

function LanguageSwitch({ locale }: LanguageSwitchProps) {
  const router: NextRouter = useRouter();
  const { pathname, asPath, query } = router;
  const changeLocale = (nextLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        height: "57px",
      }}
    >
      <Button
        variant="text"
        color="warning"
        sx={{
          transition: "all 0.5s ease 0s",
          color: locale === "en" ? "" : "rgb(121, 131, 142)",
        }}
        onClick={() => { changeLocale("en") }}
      >
        English
      </Button>
      <Button
        variant="text"
        color="warning"
        sx={{
          transition: "all 0.5s ease 0s",
          color: locale === "fa" ? "" : "rgb(121, 131, 142)",
        }}
        onClick={() => { changeLocale("fa") }}
      >
        فارسی
      </Button>
    </Box>
  );
}

export default LanguageSwitch;
