import ThemeSelector from "../theme-selector/theme-selector.component";

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
    if (blur) {
      setBlur(true);
      setIsThemeMenuOpen(!isThemeMenuOpen);
    } else {
      setBlur(!blur);
    }
  };

  return (
    <NavWrapper>
      {isThemeMenuOpen && <ThemeSelector />}
      <NavContent>
        <CloseButton onClick={onMenuClickHandler} />
        <NavLinks>
          <NavLink>
            <a href="#projects">Projects</a>
          </NavLink>
          <NavLink>
            <a href="#about">About</a>
          </NavLink>
          <NavLink>
            <a href="#contact">Contact</a>
          </NavLink>
          <ThemeIconContainer as="li">
            <ThemeIcon onClick={onThemeMenuClickHandler} />
          </ThemeIconContainer>
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
