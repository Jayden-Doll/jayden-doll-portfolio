import styled from "styled-components";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export const Wrapper = styled.section`
  display: flex;
  min-height: auto;
  width: 100%;
  font-family: "JetBrains Mono";
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 9rem;
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 6rem;
  row-gap: 4rem;
  column-gap: 4rem;
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
  margin-top: 2rem;

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
    padding: 0.6rem 2rem;
    background: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-radius: 0.15rem;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;
  gap: 1.2rem;
`;

export const SocialLink = styled.a`
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

export const ContentDivider = styled.div`
  width: 10%;
  height: 0.1rem;
  background-color: var(--text-primary);
`;

export const LinkedinIcon = styled(FaLinkedin)`
  width: 35px;
  height: auto;
`;

export const GithubIcon = styled(FaGithub)`
  width: 35px;
  height: auto;
`;

export const TwitterIcon = styled(FaTwitter)`
  width: 35px;
  height: auto;
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 35px;
  height: auto;
`;
