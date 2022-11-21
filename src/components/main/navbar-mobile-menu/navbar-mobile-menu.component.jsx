import ThemeSelector from "../theme-selector/theme-selector.component";

import { motion } from "framer-motion";

import {
  NavWrapper,
  NavContent,
  CloseButton,
  NavLinks,
  NavLink,
  ResumeLinkContainer,
  NavResumeLink,
  ThemeIcon,
  ThemeIconContainer,
} from "./navbar-mobile-menu.styles";

import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

const NavbarMobileMenu = () => {
  const {
    blur,
    setBlur,
    isThemeMenuOpen,
    setIsThemeMenuOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  } = useContext(GlobalContext);

  const onMenuClickHandler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setBlur(!blur);
  };

  const onThemeMenuClickHandler = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
    setBlur(!blur);

    if (blur) {
      setBlur(true);
    }
  };

  return (
    <NavWrapper show={isMobileMenuOpen}>
      {isThemeMenuOpen && <ThemeSelector />}
      <NavContent>
        <CloseButton onClick={onMenuClickHandler} />
        <NavLinks>
          <ThemeIconContainer
            as="li"
            onClick={onThemeMenuClickHandler}>
            <ThemeIcon />
          </ThemeIconContainer>
          <NavLink>
            <a href="#projects">Projects</a>
          </NavLink>
          <NavLink>
            <a href="#about">About</a>
          </NavLink>
          <NavLink>
            <a href="#contact">Contact</a>
          </NavLink>
          <ResumeLinkContainer as="li">
            <NavResumeLink>
              <a href="/">Resume</a>
            </NavResumeLink>
          </ResumeLinkContainer>
        </NavLinks>
      </NavContent>
    </NavWrapper>
  );
};

export default NavbarMobileMenu;
