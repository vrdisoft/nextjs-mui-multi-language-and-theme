import * as React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { useColorMode } from "../../context/colorContext";

function ThemeSwitch() {
  const { setColorModeContext, colorMode } = useColorMode();
  const initialDarkMode = colorMode === "dark" ? true : false;
  const [isDarkMode, setDarkMode] = React.useState(initialDarkMode);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    setColorModeContext(checked ? "dark" : "light");
  };

  return (
    <>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        sunColor="rgb(255, 168, 46)"
        size={28}
      />
    </>
  );
}

export default ThemeSwitch;
