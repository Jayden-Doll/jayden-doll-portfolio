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

const Navbar = () => {
  return (
    <NavWrapper>
      <NavContent>
        <NavLogo>
          <a href="/">JD</a>
        </NavLogo>
        <NavLinks>
          <ThemeIconContainer as="li">
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

export default Navbar;
