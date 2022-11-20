import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [blur, setBlur] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("");

  const values = {
    blur,
    setBlur,
    isThemeMenuOpen,
    setIsThemeMenuOpen,
    theme,
    setTheme,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
