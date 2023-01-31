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
            initial={{ opacity: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={onThemeMenuClickHandler}>
            <ThemeIcon />
          </ThemeIconContainer>
          <NavLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <a href="#projects">Projects</a>
          </NavLink>
          <NavLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <a href="#about">About</a>
          </NavLink>
          <NavLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <a href="#contact">Contact</a>
          </NavLink>
          <ResumeLinkContainer
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <NavResumeLink>
              <a
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

export default NavbarMobileMenu;
