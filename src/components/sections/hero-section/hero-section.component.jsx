import {
  Wrapper,
  Title,
  Subtitle,
  HeroContent,
  Description,
  CtaButtonContainer,
  CtaButtonLink,
} from "./hero-section.styles";

const HeroSection = () => {
  return (
    <Wrapper>
      <HeroContent>
        <Title
          initial={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          animate={{ opacity: 1 }}>
          Hello There! I’m Jayden,
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          animate={{ opacity: 1 }}>
          I create unique experiences on the web.
        </Subtitle>
        <Description
          initial={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          animate={{ opacity: 1 }}>
          I’m a self-taught front-end developer with a drive for making fun,
          visually appealing and interactive web content.
        </Description>
        <CtaButtonContainer
          initial={{ opacity: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          animate={{ opacity: 1 }}>
          <CtaButtonLink>
            <a href="#projects">View My Projects</a>
          </CtaButtonLink>
        </CtaButtonContainer>
      </HeroContent>
    </Wrapper>
  );
};

export default HeroSection;
