import styled from "styled-components";
import { motion } from "framer-motion";

import { MdClose } from "react-icons/md";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: flex-end;
  padding: 0 4%;
  z-index: 2;
  top: 0;
  border-bottom: 0.2rem solid var(--text-primary);
  transition: 0.2s ease;
  animation: open-menu 0.2s ease alternate forwards;
  background-color: #181818;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0;
    height: 100%;
    width: 100%;
    border-left: 0rem solid var(--text-primary);
    border-bottom: 0;
    padding-left: 4%;
  }

  @keyframes open-menu {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const ThemeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: auto;
  flex-direction: column;
  height: 100%;
  background-color: #181818;
  padding: 5% 6.5%;

  button {
    transition: border 0.2s ease;
    border: 0.2rem solid transparent;
    border-radius: 0.2rem;

    :hover {
      border: 0.2rem solid #fff;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const ThemeTitle = styled(motion.p)`
  font-size: var(--fontsize-title-theme);
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: right;
  margin: 0;
  width: 100%;

  ::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: #181818;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    width: 50%;
    text-align: left;
  }
`;

export const ThemeOptionsContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 2rem;
  padding-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ThemeOptionBlue = styled(motion.button)`
  background: -webkit-linear-gradient(-225deg, #4ae4a7 30%, #22e1ff 100%);
  width: 4rem;
  height: 2rem;
`;

export const ThemeOptionOrange = styled(motion.button)`
  background: -webkit-linear-gradient(-225deg, #ffed21 30%, #ff7a21 100%);
  width: 4rem;
  height: 2rem;
`;

export const ThemeOptionPurple = styled(motion.button)`
  background: -webkit-linear-gradient(-225deg, #ffadff 30%, #ab77ff 100%);
  width: 4rem;
  height: 2rem;
`;

export const ThemeOptionGreen = styled(motion.button)`
  background: -webkit-linear-gradient(-225deg, #eaff9e 30%, #7aff6b 100%);
  width: 4rem;
  height: 2rem;
`;

export const CloseButton = styled(MdClose)`
  width: 30px;
  height: auto;
  color: var(--text-secondary);
  transition: 0.2s ease;

  :hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;
