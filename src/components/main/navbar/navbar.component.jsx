import { useState } from "react";

import ThemeSelector from "../theme-selector/theme-selector.component";

import {
  NavWrapper,
  NavContent,
  NavLogo,
  NavLinks,
  NavLink,
  ResumeLinkContainer,
  NavResumeLink,
  ThemeIcon,
  ThemeIconContainer,
} from "./navbar.styles";

import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

const Navbar = () => {
  const { blur, setBlur, isThemeMenuOpen, setIsThemeMenuOpen } =
    useContext(GlobalContext);

  const onclickHandler = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
    setBlur(!blur);
  };

  return (
    <NavWrapper>
      {isThemeMenuOpen && <ThemeSelector />}
      <NavContent>
        <NavLogo>
          <a href="/">JD</a>
        </NavLogo>
        <NavLinks>
          <ThemeIconContainer as="li">
            <ThemeIcon onClick={onclickHandler} />
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

export default Navbar;
