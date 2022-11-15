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
`;

export const ProjectContent = styled.div`
  display: flex;
  max-width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  max-width: 50%;
  transform: translateX(7%);
  text-align: left;
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
  left: -7%;
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
  margin: 0.15rem;
  border-radius: 0.1rem;
`;

export const ProjectImage = styled.img`
  display: block;
  width: 150%;
  height: 50%;
  border-radius: 0.2rem;
  border: 2px solid var(--text-secondary);
`;

export const ProjectTitle = styled.header`
  padding: 1.5rem 0;
  font-size: var(--fontsize-title-project);
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  text-align: left;
  margin-bottom: 0;

  ::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: #181818;
  }
`;

export const ProjectDescription = styled.p`
  color: var(--text-primary);
  font-size: 1.1rem;
  font-family: "Fira Code";
  font-weight: 500;
  min-width: 120%;
  padding-bottom: 1rem;
`;

export const ProjectTag = styled.span`
  color: var(--text-secondary);
  font-size: 1rem;
  font-family: "Fira Code";
  font-weight: 500;
  padding-bottom: 1.5rem;
`;

export const ProjectLinkContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const ProjectLink = styled.a`
  color: var(--text-secondary);
  cursor: pointer;
  transition: 0.2s ease;

  :hover {
    color: var(--text-primary);
  }
`;

export const GithubIcon = styled(FaGithub)`
  width: 25px;
  height: auto;
`;

export const LiveLinkIcon = styled(FaExternalLinkAlt)`
  width: 25px;
  height: auto;
`;