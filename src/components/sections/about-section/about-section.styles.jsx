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
  h1,
  h2,
  p {
    margin: 0;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 3rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding-top: 6rem;
  row-gap: 2rem;
  column-gap: 4rem;
  transform: translateX(2%);

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 3%;
  }
`;

export const ImageContainer = styled(motion.div)`
  max-width: 25%;
  height: 50%;
  position: relative;

  @media (max-width: 768px) {
    max-width: 75%;
  }
`;

export const ProjectDecoration = styled.div`
  display: flex;
  width: 95%;
  height: 100%;
  left: -7%;
  top: -7%;
  background: var(--text-gradient);
  position: absolute;
  z-index: -1;
  border-radius: 0.2rem;
`;

export const ProjectDecorationContent = styled.div`
  background: #181818;
  width: 100%;
  height: auto;
  margin: 0.075rem;
  border-radius: 0.2rem;
`;

export const ProjectImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
  border: 2px solid var(--text-secondary);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 55%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const AboutText = styled(motion.div)`
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  font-family: "Fira Code";
  text-align: left;
  line-height: 1.4rem;
`;
