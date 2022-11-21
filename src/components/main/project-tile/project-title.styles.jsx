import styled from "styled-components";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectContainer = styled.div`
  display: flex;
  min-width: 50%;
  max-width: 50%;
  width: auto;
  height: auto;
  flex-direction: column;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    min-width: 55%;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  max-width: 50%;
  transform: translateX(7%);
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

export const ProjectDecoration = styled.div`
  display: flex;
  width: 150%;
  height: 100%;
  left: -6.5%;
  top: -8%;
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
  width: 150%;
  height: 50%;
  border-radius: 0.2rem;
  border: 2px solid var(--text-secondary);
`;

export const ProjectTitle = styled.header`
  padding: 1.5rem 0.3rem;
  font-size: var(--fontsize-title-project);
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-right: 0.1px solid #181818;
  border-left: 0.1px solid #181818;
  font-weight: 800;
  transform: translateX(-0.3rem);
  text-align: left;
  margin-bottom: 0;

  ::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: #181818;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

export const ProjectDescription = styled.p`
  color: var(--text-primary);
  font-size: 1rem;
  font-family: "Fira Code";
  font-weight: 500;
  min-width: 150%;
  padding-bottom: 1rem;
  line-height: 1.4rem;
`;

export const ProjectTag = styled.span`
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-family: "Fira Code";
  font-weight: 500;
  padding-bottom: 0.5rem;
  line-height: 1.5rem;
  min-width: 125%;
`;

export const ProjectLinkContainer = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  transform: translateX(-0.5rem);
`;

export const ProjectLink = styled.a`
  color: var(--text-secondary);
  transition: 0.2s ease;
  padding: 0.5rem;

  :hover {
    color: var(--text-primary);
    transform: translateY(-0.1rem);
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export const GithubIcon = styled(FaGithub)`
  width: 20px;
  height: auto;
`;

export const LiveLinkIcon = styled(FaExternalLinkAlt)`
  width: 20px;
  height: auto;
`;
