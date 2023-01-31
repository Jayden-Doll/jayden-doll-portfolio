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
            href="/"
            title="To Homepage"
            aria-label="Jayden Doll Homepage Logo">
            JD
          </motion.a>
        </NavLogo>
        <NavLinks>
          <ThemeIconContainer
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            animate={{ opacity: 1 }}>
            <ThemeIcon
              title="Theme Select"
              onClick={onclickHandler}
            />
          </ThemeIconContainer>
          <NavLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            animate={{ opacity: 1 }}>
            <a
              aria-label="Jump To Jayden's Projects"
              href="#projects">
              Projects
            </a>
          </NavLink>
          <NavLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            animate={{ opacity: 1 }}>
            <a
              aria-label="Jump To Jayden's About Section"
              href="#about">
              About
            </a>
          </NavLink>
          <NavLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            animate={{ opacity: 1 }}>
            <a
              aria-label="Jump To Jayden's Contact Information"
              href="#contact">
              Contact
            </a>
          </NavLink>
          <ResumeLinkContainer
            initial={{ opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            animate={{ opacity: 1 }}>
            <NavResumeLink>
              <a
                aria-label="Jayden Doll's Resume Link"
                href="https://drive.google.com/file/d/1XTuIO2EjWYxDd91Qc_vTcrMWkECBlcWz/view"
                rel="noopener noreferrer"
                target="_blank">
                Resume
              </a>
            </NavResumeLink>
          </ResumeLinkContainer>
        </NavLinks>
      </NavContent>
    </NavWrapper>
  );
};

export default Navbar;
