import {
  Wrapper,
  ThemeContent,
  ThemeTitle,
  ThemeOptionsContainer,
  ThemeOptionBlue,
  ThemeOptionOrange,
  ThemeOptionPurple,
  ThemeOptionGreen,
  CloseButton,
} from "./theme-selector.styles";

import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

const ThemeSelector = () => {
  const {
    blur,
    setBlur,
    isThemeMenuOpen,
    setIsThemeMenuOpen,
    isMobileMenuOpen,
    theme,
    setTheme,
  } = useContext(GlobalContext);

  const onClickHandler = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
    if (blur && isMobileMenuOpen) {
      setBlur(blur);
    } else setBlur(false);
  };

  const blueHandler = () => {
    setTheme("blue");
    window.localStorage.setItem("colortheme", "blue");
  };
  const orangeHandler = () => {
    setTheme("orange");
    window.localStorage.setItem("colortheme", "orange");
  };
  const purpleHandler = () => {
    setTheme("purple");
    window.localStorage.setItem("colortheme", "purple");
  };
  const greenHandler = () => {
    setTheme("green");
    window.localStorage.setItem("colortheme", "green");
  };

  return (
    <Wrapper>
      <ThemeContent>
        <ThemeTitle>Theme Select</ThemeTitle>
        <ThemeOptionsContainer>
          <CloseButton onClick={onClickHandler} />
          <ThemeOptionBlue onClick={blueHandler}></ThemeOptionBlue>
          <ThemeOptionOrange onClick={orangeHandler}></ThemeOptionOrange>
          <ThemeOptionPurple onClick={purpleHandler}></ThemeOptionPurple>
          <ThemeOptionGreen onClick={greenHandler}></ThemeOptionGreen>
        </ThemeOptionsContainer>
      </ThemeContent>
    </Wrapper>
  );
};

export default ThemeSelector;
