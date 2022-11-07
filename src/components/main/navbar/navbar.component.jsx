import {
  NavWrapper,
  NavContent,
  NavLogo,
  NavLinks,
  NavLink,
  ResumeLinkContainer,
  NavResumeLink,
  ThemeIcon,
} from "./navbar.styles";

const Navbar = () => {
  return (
    <NavWrapper>
      <NavContent>
        <NavLogo>
          <a href="/">JD</a>
        </NavLogo>
        <NavLinks>
          <ThemeIcon />
          <NavLink>
            <a href="/">Projects</a>
          </NavLink>
          <NavLink>
            <a href="">About</a>
          </NavLink>
          <NavLink>
            <a href="">Contact</a>
          </NavLink>
          <ResumeLinkContainer>
            <NavResumeLink>
              <a href="">Resume</a>
            </NavResumeLink>
          </ResumeLinkContainer>
        </NavLinks>
      </NavContent>
    </NavWrapper>
  );
};

export default Navbar;
