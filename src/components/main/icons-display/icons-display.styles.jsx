import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: auto;
  align-items: center;
  justify-content: flex-start;
  row-gap: 3rem;
  column-gap: 5.4rem;
  max-width: 75%;
  padding: 5rem 0;

  @media (max-width: 480px) {
    min-width: 100%;
    row-gap: 3rem;
    column-gap: 3rem;
  }

  @media (max-width: 375px) {
    min-width: 75%;
  }
`;

export const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 4.8rem;
  max-width: 4.8rem;
  transition: 0.2s ease;
  text-align: center;
  gap: 1rem;
  @media (max-width: 768px) {
    min-width: 4.8rem;
  }

  svg {
    transition: 0.2s ease;
  }

  :hover {
    svg {
      will-change: transform;
      transform: translateY(-0.25rem) scale(105%);
    }

    p {
      color: var(--text-primary);
      cursor: default;
    }
  }
`;

export const IconName = styled.p`
  font-family: "Fira Code";
  font-weight: 400;
  color: var(--text-secondary);
  font-size: 1.1rem;
  transition: 0.2s ease;
  text-align: center;
  padding: 0.1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
