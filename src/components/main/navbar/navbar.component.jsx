import { useState } from "react";
import { motion } from "framer-motion";

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
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            animate={{ opacity: 1 }}
            href="/">
            JD
          </motion.a>
        </NavLogo>
        <NavLinks>
          <ThemeIconContainer
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            animate={{ opacity: 1 }}>
            <ThemeIcon onClick={onclickHandler} />
          </ThemeIconContainer>
          <NavLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            animate={{ opacity: 1 }}>
            <a href="#projects">Projects</a>
          </NavLink>
          <NavLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            animate={{ opacity: 1 }}>
            <a href="#about">About</a>
          </NavLink>
          <NavLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            animate={{ opacity: 1 }}>
            <a href="#contact">Contact</a>
          </NavLink>
          <ResumeLinkContainer
            initial={{ opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            animate={{ opacity: 1 }}>
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
