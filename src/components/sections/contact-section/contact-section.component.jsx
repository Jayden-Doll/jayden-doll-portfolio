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
          <Title
            element="h6"
            text="Let's Connect!"
          />
          <CtaButtonContainer
            initial={{ opacity: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            <CtaButtonLink>
              <a
                href="mailto:jayjdoll002@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Jayden Doll Email Link">
                Email Me
              </a>
            </CtaButtonLink>
          </CtaButtonContainer>
          <ContentDivider
            initial={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
          <SocialIconsContainer>
            <SocialLink
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              rel="noreferrer"
              href="https://www.linkedin.com/in/jayden-doll/"
              target="_blank"
              aria-label="Linkedin"
              title="Linkedin">
              <LinkedinIcon aria-label="Linkedin Icon" />
            </SocialLink>
            <SocialLink
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              rel="noreferrer"
              href="https://github.com/Jayden-Doll"
              target="_blank"
              aria-label="Github"
              title="Github">
              <GithubIcon aria-label="Github Icon" />
            </SocialLink>
            <SocialLink
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              rel="noreferrer"
              href="https://twitter.com/Jayden_Doll"
              target="_blank"
              aria-label="Twitter"
              title="Twitter">
              <TwitterIcon aria-label="Github Icon" />
            </SocialLink>
            <SocialLink
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              rel="noreferrer"
              href="https://www.instagram.com/jaydoll_codes/"
              target="_blank"
              aria-label="Instagram"
              title="Instagram">
              <InstagramIcon aria-label="Instagram Icon" />
            </SocialLink>
          </SocialIconsContainer>
        </ContentWrapper>
      </SectionContent>
    </Wrapper>
  );
};

export default ContactSection;
