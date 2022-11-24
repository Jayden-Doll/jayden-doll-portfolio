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
  TextContainer,
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
            <ProjectImage
              alt="Jayden Doll"
              src={aboutPicture}
            />
          </ImageContainer>
          <TextContainer>
            <AboutText>
              Hello, my name is Jayden Doll and I enjoy creating on the
              front-end side of the internet. Though I've been fully invested in
              web development for a while now, my journey actually started in
              2016, when I started inspecting the devtools and editing HTML and
              CSS on various websites.
            </AboutText>
            <AboutText>
              Now I'm committed to creating the highest quality content that I
              can on the internet. I'm thrilled to be learning something new
              every day and having a blast while doing it!
            </AboutText>
            <AboutText>
              When I'm not developing new and exciting things, you can find me
              playing guitar or playing a video game or two!
            </AboutText>
          </TextContainer>
        </ContentWrapper>
      </SectionContent>
    </Wrapper>
  );
};

export default AboutSection;
