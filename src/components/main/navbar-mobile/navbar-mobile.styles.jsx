import styled from "styled-components";
import { motion } from "framer-motion";

import { BiMenuAltRight } from "react-icons/bi";

export const NavWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  background-color: #181818;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 4rem;
  margin-bottom: 2.5rem;
  padding-top: 2.5rem;
  color: var(--text-primary);
  box-shadow: 0 0 30px 10px #181818;

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 375px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
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

export const MenuIcon = styled(BiMenuAltRight)`
  color: var(--text-primary);
  padding: 0.5rem;
  width: 50px;
  height: auto;
  transform: translateX(0.5rem);

  :hover {
    cursor: pointer;
  }
`;
