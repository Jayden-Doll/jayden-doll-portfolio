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
        <ThemeTitle
          initial={{ opacity: 0 }}
          transition={{ delay: 0, duration: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          Theme Select
        </ThemeTitle>
        <ThemeOptionsContainer>
          <CloseButton onClick={onClickHandler} />
          <ThemeOptionBlue
            initial={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={blueHandler}></ThemeOptionBlue>
          <ThemeOptionOrange
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={orangeHandler}></ThemeOptionOrange>
          <ThemeOptionPurple
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={purpleHandler}></ThemeOptionPurple>
          <ThemeOptionGreen
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={greenHandler}></ThemeOptionGreen>
        </ThemeOptionsContainer>
      </ThemeContent>
    </Wrapper>
  );
};

export default ThemeSelector;
