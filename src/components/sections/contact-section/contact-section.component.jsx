import {
  Wrapper,
  SectionContent,
  ContentWrapper,
  CtaButtonContainer,
  CtaButtonLink,
  ContentDivider,
  SocialIconsContainer,
  SocialLink,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
} from "./contact-section.styles";

import Title from "../../main/title/title.component";

const ContactSection = () => {
  return (
    <Wrapper>
      <SectionContent id="contact">
        <ContentWrapper>
          <Title text="Let's Connect!" />
          <CtaButtonContainer>
            <CtaButtonLink>
              <a
                href="mailto:jayjdoll002@gmail.com"
                target="_blank"
                rel="noreferrer">
                Email Me
              </a>
            </CtaButtonLink>
          </CtaButtonContainer>
          <ContentDivider />
          <SocialIconsContainer>
            <SocialLink
              rel="noreferrer"
              href="https://www.linkedin.com/in/jayden-doll/"
              target="_blank">
              <LinkedinIcon />
            </SocialLink>
            <SocialLink
              rel="noreferrer"
              href="https://github.com/Jayden-Doll"
              target="_blank">
              <GithubIcon />
            </SocialLink>
            <SocialLink
              rel="noreferrer"
              href="https://twitter.com/Jayden_Doll"
              target="_blank">
              <TwitterIcon />
            </SocialLink>
            <SocialLink
              rel="noreferrer"
              href="https://www.instagram.com/jaydoll_codes/"
              target="_blank">
              <InstagramIcon />
            </SocialLink>
          </SocialIconsContainer>
        </ContentWrapper>
      </SectionContent>
    </Wrapper>
  );
};

export default ContactSection;
