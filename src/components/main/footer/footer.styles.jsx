import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.section`
  display: flex;
  min-height: auto;
  width: 100%;
  font-family: "JetBrains Mono";
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 11rem;
  padding-bottom: 3rem;
  h1,
  h2,
  p {
    margin: 0;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 3rem;
`;

export const FooterText = styled(motion.p)`
  color: var(--text-secondary);
  font-weight: 500;
  font-family: "Fira Code";
`;
