import { useContext } from "react";
import GlobalContext from "../../../context/GlobalContext";

import {
  NavWrapper,
  NavContent,
  NavLogo,
  MenuIcon,
} from "./navbar-mobile.styles";

import NavbarMobileMenu from "../navbar-mobile-menu/navbar-mobile-menu.component";

const NavbarMobile = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, setBlur, blur } =
    useContext(GlobalContext);

  const onClickHandler = () => {
    setBlur(!blur);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavWrapper>
      <NavbarMobileMenu show={isMobileMenuOpen} />
      <NavContent>
        <NavLogo>
          <a href="/">JD</a>
        </NavLogo>
        <MenuIcon onClick={onClickHandler} />
      </NavContent>
    </NavWrapper>
  );
};

export default NavbarMobile;
