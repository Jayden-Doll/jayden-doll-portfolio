import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  min-height: calc(100vh - 20rem);
  width: 100%;
  font-family: "JetBrains Mono";
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  h1,
  h2,
  p {
    margin: 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: auto;
  height: 100%;
  gap: 0.8rem;
`;

export const Title = styled.h1`
  font-size: var(--fontsize-title-hero);
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  text-align: left;

  ::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: #181818;
  }
`;

export const Subtitle = styled.h2`
  color: var(--text-primary);
  text-align: left;
  font-weight: 700;
  font-size: var(--fontsize-subtitle-hero);
  padding-right: 20%;
`;

export const Description = styled.p`
  text-align: left;
  color: var(--text-secondary);
  font-size: var(--fontsize-description-hero);
  font-weight: 500;
  font-family: "Fira Code";
  padding-right: 30%;
  padding-bottom: 1.5rem;
`;

export const CtaButtonContainer = styled.div`
  font-family: "Fira Code";
  width: auto;
  height: auto;
  background: var(--text-gradient);
  padding: 0.1rem;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
  transition: 0.2s ease;
  user-select: none;

  :hover {
    -webkit-box-shadow: 0px 0px 12px 3px var(--color-opaque);
    -moz-box-shadow: 0px 0px 12px 3px var(--color-opaque);
    box-shadow: 0px 0px 10px 2px var(--color-opaque),
      0px 0px 4px 0.3px var(--text-secondary);
  }
`;

export const CtaButtonLink = styled.p`
  background: #181818;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 0.15rem;

  :hover {
    cursor: pointer;
  }

  a {
    padding: 0.6rem 0.7rem;
    background: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-radius: 0.15rem;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
