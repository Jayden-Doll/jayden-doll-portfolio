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
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setBlur(!blur);
  };

  return (
    <NavWrapper>
      {isMobileMenuOpen && <NavbarMobileMenu />}
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
