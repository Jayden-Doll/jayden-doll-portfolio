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
        <Title>Hello There! I’m Jayden,</Title>
        <Subtitle>I create unique experiences on the web.</Subtitle>
        <Description>
          I’m a self-taught front-end developer with a drive for making fun,
          visually appealing and interactive web content.
        </Description>
        <CtaButtonContainer>
          <CtaButtonLink>
            <a href="">View My Projects</a>
          </CtaButtonLink>
        </CtaButtonContainer>
      </HeroContent>
    </Wrapper>
  );
};

export default HeroSection;
