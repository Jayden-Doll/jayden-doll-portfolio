import styled from "styled-components";

import { MdClose } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaPalette } from "react-icons/fa";

export const NavWrapper = styled.div`
  position: fixed;
  display: ${(props) => (props.show === true ? `flex` : `none`)};
  z-index: 1;
  top: 0;
  width: 50%;
  height: 100%;
  color: var(--text-primary);
  background-color: #181818;
  border-left: 0.1rem solid var(--text-primary);
  border-bottom-left-radius: 0.2rem;
  animation: 0.2s menu-slide both alternate;

  @keyframes menu-slide {
    0% {
      right: -100%;
    }
    100% {
      right: 0;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavContent = styled.nav`
  padding: 0 4%;
  width: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  padding-top: 1.5rem;
  flex-direction: column;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 1rem;
  padding-left: 0;
  flex-direction: column;
  gap: 3rem;
`;

export const NavLink = styled.li`
  /* padding-top: 0.5rem;
  padding-bottom: 0.5rem; */
  box-sizing: border-box;

  a {
    transition: 0.2s ease;
    color: var(--text-secondary);
    text-decoration: none;

    :hover {
      cursor: pointer;
      color: var(--text-primary);
    }
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
    -moz-box-shadow: 0px 0px 8px 2px var(--color-opaque),
      0px 0px 2px 0.3px var(--text-secondary);
    -webkit-box-shadow: 0px 0px 8px 2px var(--color-opaque),
      0px 0px 2px 0.3px var(--text-secondary);
    box-shadow: 0px 0px 8px 2px var(--color-opaque),
      0px 0px 2px 0.3px var(--text-secondary);
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

export const ThemeIconContainer = styled.div`
  display: flex;

  width: auto;
  height: auto;
  transform: translateX(0.5rem);
`;

export const ThemeIcon = styled(FaPalette)`
  width: 35px;
  height: auto;
  padding: 0.3rem;
  font-size: 2rem;

  color: var(--text-secondary);
  transition: 0.2s ease;
  display: flex;
  transform: translateX(-0.5rem) translateY(0.5rem);

  :hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;

export const CloseButton = styled(BiMenuAltLeft)`
  width: 50px;
  padding: 0.5rem;
  transform: translateY(-0.5rem);
  height: auto;
  color: var(--text-primary);
  margin-bottom: 1rem;

  :hover {
    cursor: pointer;
  }
`;
