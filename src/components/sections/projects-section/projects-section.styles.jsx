import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  min-height: auto;
  width: 100%;
  font-family: "JetBrains Mono";
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 14rem;
  padding-bottom: 15%;
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
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 5rem 0;
  row-gap: 8rem;
`;

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
  margin: 0.175rem;
  border-radius: 0.1rem;
`;

export const ProjectImage = styled.img`
  display: block;
  width: 150%;
  height: 50%;
  border-radius: 0.2rem;
  transition: transform 0.2s ease;
  will-change: transform;

  :hover {
    transform: translateX(-4.5%) translateY(-8%) scale(101%);
  }
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
`;
