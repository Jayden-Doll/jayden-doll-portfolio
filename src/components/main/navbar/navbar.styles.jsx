import styled from "styled-components";

import { FaPalette } from "react-icons/fa";

export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  margin-bottom: 5rem;
  color: var(--text-primary);
`;

export const NavContent = styled.nav`
  padding: 0 4%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 1rem;
  padding-left: 0;
  gap: 3rem;
`;

export const NavLink = styled.li`
  /* padding-top: 0.5rem;
  padding-bottom: 0.5rem; */
  box-sizing: border-box;

  @keyframes nav-hover {
    from {
      width: 0;
    }
    to {
      width: 50%;
    }
  }

  :hover {
    cursor: pointer;
    margin-top: 1%;

    a {
      color: var(--text-secondary);
    }
    ::after {
      animation: nav-hover 0.2s forwards alternate ease;
      content: "";
      display: block;
      height: 0.1rem;
      margin-top: 0.2rem;
      background: var(--text-gradient);
    }
  }

  a {
    transition: 0.2s ease;
    color: var(--text-primary);
    text-decoration: none;
  }
`;

export const ResumeLinkContainer = styled.div`
  width: auto;
  height: auto;
  background: var(--text-gradient);
  padding: 0.1rem;
  border-radius: 0.2rem;
  transition: 0.2s ease;

  :hover {
    -webkit-box-shadow: 0px 0px 9px 3px var(--color-opaque);
    -moz-box-shadow: 0px 0px 9px 3px var(--color-opaque);
    box-shadow: 0px 0px 9px 3px var(--color-opaque);
  }
`;

export const NavResumeLink = styled.li`
  background: #181818;
  padding: 0.3rem 0.15rem;
  border-radius: 0.15rem;

  :hover {
    cursor: pointer;
  }

  a {
    padding: 0.3rem 0.5rem;
    text-decoration: none;
    background: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-radius: 0.15rem;
  }
`;

export const NavLogo = styled.p`
  a {
    text-decoration: none;
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 500;

    :hover {
      cursor: pointer;
    }
  }
`;

export const ThemeIcon = styled(FaPalette)`
  font-size: 2rem;
  padding: 0.5rem;
  color: var(--text-primary);
  transition: 0.2s ease;

  :hover {
    cursor: pointer;
    color: var(--text-secondary);
  }
`;
