import styled from "styled-components";
import { motion } from "framer-motion";

import { FaPalette } from "react-icons/fa";

export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  padding-top: 2rem;
  margin-bottom: 5rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    display: none;
  }
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

export const NavLink = styled(motion.li)`
  /* padding-top: 0.5rem;
  padding-bottom: 0.5rem; */
  box-sizing: border-box;

  ::after {
    transform: translateX(100%);
  }

  @keyframes nav-hover {
    from {
      width: 25%;
      opacity: 0;
    }
    to {
      width: 50%;
      opacity: 1;
    }
  }

  :hover {
    cursor: pointer;
    margin-top: 1%;

    a {
      color: var(--text-primary);
    }
    ::after {
      animation: nav-hover 0.2s forwards ease;
      content: "";
      display: block;
      height: 0.1rem;
      margin-top: 0.2rem;
      background: var(--text-gradient);
    }
  }

  a {
    transition: 0.2s ease;
    color: var(--text-secondary);
    text-decoration: none;
  }
`;

export const ResumeLinkContainer = styled(motion.div)`
  width: auto;
  height: auto;
  background: var(--text-gradient);
  padding: 0.1rem;
  border-radius: 0.2rem;
  transition: 0.2s ease;

  :hover {
    -moz-box-shadow: 0px 0px 8px 2px var(--color-opaque),
      0px 0px 2px 0.3px var(--text-secondary);
    -webkit-box-shadow: 0px 0px 8px 2px var(--color-opaque),
      0px 0px 2px 0.3px var(--text-secondary);
    box-shadow: 0px 0px 8px 2px var(--color-opaque),
      0px 0px 2px 0.3px var(--text-secondary);
  }
`;

export const NavResumeLink = styled(motion.p)`
  margin: 0;
  padding: 0;
  background: #181818;
  padding: 0.35rem 0rem;
  border-radius: 0.15rem;

  :hover {
    cursor: pointer;
  }

  a {
    padding: 0.35rem 0.5rem;
    text-decoration: none;
    background: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-radius: 0.15rem;
  }
`;

export const NavLogo = styled(motion.p)`
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

export const ThemeIconContainer = styled(motion.div)`
  display: flex;

  width: auto;
  height: auto;
  transform: translateX(0.5rem);
`;

export const ThemeIcon = styled(FaPalette)`
  width: 35px;
  font-size: 2rem;
  padding: 0.5rem;

  color: var(--text-secondary);
  transition: 0.2s ease;
  display: flex;

  :hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;
