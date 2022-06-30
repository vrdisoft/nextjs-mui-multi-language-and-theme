import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";

type ColorModeType = {
  colorMode: string;
  setColorModeContext: (colorMode: string) => void;
};
const ColorContext = createContext({});

const useColorMode = () => {
  const appColorMode = useContext(ColorContext) as ColorModeType;
  return appColorMode;
};

const retrieveStoredColorMode = () => {
  const storedColorMode = localStorage.getItem("colorMode");
  return {
    storedColorMode,
  };
};

const ColorModeProvider = ({ ...rest }) => {
  const initialColorMode = "dark";

  const [colorMode, setColorMode] = useState(initialColorMode);
  useEffect(() => {
    const colorModeData = retrieveStoredColorMode().storedColorMode ?? "dark";
    setColorMode(colorModeData);
  }, []);

  useEffect(() => {
      localStorage.setItem("colorMode", colorMode);
  }, [colorMode]);


  const setColorModeHandler = useCallback((currentColorMode: string) => {
    setColorMode(currentColorMode);
  }, []);

  const contextValue = useMemo(() => {
    return {
      colorMode: colorMode,
      setColorModeContext: setColorModeHandler,
    };
  }, [colorMode, setColorModeHandler]);
  return <ColorContext.Provider value={contextValue} {...rest} />;
};

export { ColorModeProvider, useColorMode };
