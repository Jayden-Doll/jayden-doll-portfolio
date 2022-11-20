import styled from "styled-components";

import { MdClose } from "react-icons/md";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 25%;
  display: flex;
  padding: 0 4%;
  z-index: 1;
  top: 0;
  border-bottom: 0.2rem solid var(--text-primary);
  transition: 0.2s ease;
  animation: open-menu 0.2s ease alternate forwards;
  background-color: #181818;

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
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  height: 100%;
  background-color: #181818;
  padding: 5% 6%;

  button {
    transition: border 0.2s ease;
    border: 0.2rem solid transparent;
    border-radius: 0.2rem;

    :hover {
      border: 0.2rem solid #fff;
      cursor: pointer;
    }
  }
`;

export const ThemeTitle = styled.p`
  font-size: var(--fontsize-title-theme);
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: left;
  margin: 0;
  width: 50%;

  ::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: #181818;
  }
`;

export const ThemeOptionsContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 2rem;
  padding-top: 1rem;
`;

export const ThemeOptionBlue = styled.button`
  background: -webkit-linear-gradient(-225deg, #4ae4a7 30%, #22e1ff 100%);
  width: 4rem;
  height: 2rem;
`;

export const ThemeOptionOrange = styled.button`
  background: -webkit-linear-gradient(-225deg, #ffed21 30%, #ff7a21 100%);
  width: 4rem;
  height: 2rem;
`;

export const ThemeOptionPurple = styled.button`
  background: -webkit-linear-gradient(-225deg, #ffadff 30%, #ab77ff 100%);
  width: 4rem;
  height: 2rem;
`;

export const ThemeOptionGreen = styled.button`
  background: -webkit-linear-gradient(-225deg, #eaff9e 30%, #7aff6b 100%);
  width: 4rem;
  height: 2rem;
`;

export const CloseButton = styled(MdClose)`
  width: 50px;
  height: 25px;
  color: var(--text-secondary);
  transition: 0.2s ease;

  :hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;
