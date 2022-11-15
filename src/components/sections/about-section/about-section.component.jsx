import Title from "../../main/title/title.component";

import aboutPicture from "../../../images/about-pic.jpg";

import {
  Wrapper,
  SectionContent,
  ContentWrapper,
  ImageContainer,
  ProjectDecoration,
  ProjectDecorationContent,
  ProjectImage,
  AboutText,
} from "./about-section.styles";

const AboutSection = () => {
  return (
    <Wrapper>
      <SectionContent id="about">
        <Title text="About Me" />
        <ContentWrapper>
          <ImageContainer>
            <ProjectDecoration>
              <ProjectDecorationContent />
            </ProjectDecoration>
            <ProjectImage src={aboutPicture} />
          </ImageContainer>
          <AboutText>
            I am the about section. I am the about section. I am the about
            section.
          </AboutText>
        </ContentWrapper>
      </SectionContent>
    </Wrapper>
  );
};

export default AboutSection;
