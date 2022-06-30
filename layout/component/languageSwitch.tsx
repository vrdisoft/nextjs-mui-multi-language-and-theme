import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function LanguageSwitch() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
      }}
    >
      <Button
        variant="text"
        color="warning"
        sx={{
          transition: "all 0.5s ease 0s",
        }}
      >
        English
      </Button>
      <Button
        variant="text"
        color="warning"
        sx={{
          transition: "all 0.5s ease 0s",
        }}
      >
        فارسی
      </Button>
    </Box>
  );
}

export default LanguageSwitch;
