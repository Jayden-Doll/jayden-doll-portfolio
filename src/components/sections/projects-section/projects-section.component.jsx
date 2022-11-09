import Title from "../../main/title/title.component";

import gsmini from "../../../images/project-images/gsmini.png";

import {
  Wrapper,
  SectionContent,
  ProjectsWrapper,
  ProjectContainer,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectContent,
  ProjectDecoration,
  ImageContainer,
  ProjectDecorationContent,
} from "./projects-section.styles";

const ProjectsSection = () => {
  return (
    <Wrapper>
      <SectionContent>
        <Title text="Projects" />
        <ProjectsWrapper>
          <ProjectContainer>
            <ProjectContent>
              <ImageContainer>
                <ProjectDecoration>
                  <ProjectDecorationContent />
                </ProjectDecoration>
                <ProjectImage
                  src={gsmini}
                  alt="Taylor GS Mini Mock Product Page Site"
                />
              </ImageContainer>
              <ProjectTitle>GS Mini Product Site</ProjectTitle>
              <ProjectDescription>This is the description.</ProjectDescription>
            </ProjectContent>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectContent>
              <ImageContainer>
                <ProjectDecoration>
                  <ProjectDecorationContent />
                </ProjectDecoration>
                <ProjectImage
                  src={gsmini}
                  alt="Taylor GS Mini Mock Product Page Site"
                />
              </ImageContainer>
              <ProjectTitle>GS Mini Product Site</ProjectTitle>
              <ProjectDescription>This is the description.</ProjectDescription>
            </ProjectContent>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectContent>
              <ImageContainer>
                <ProjectDecoration>
                  <ProjectDecorationContent />
                </ProjectDecoration>
                <ProjectImage
                  src={gsmini}
                  alt="Taylor GS Mini Mock Product Page Site"
                />
              </ImageContainer>
              <ProjectTitle>GS Mini Product Site</ProjectTitle>
              <ProjectDescription>This is the description.</ProjectDescription>
            </ProjectContent>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectContent>
              <ImageContainer>
                <ProjectDecoration>
                  <ProjectDecorationContent />
                </ProjectDecoration>
                <ProjectImage
                  src={gsmini}
                  alt="Taylor GS Mini Mock Product Page Site"
                />
              </ImageContainer>
              <ProjectTitle>GS Mini Product Site</ProjectTitle>
              <ProjectDescription>This is the description.</ProjectDescription>
            </ProjectContent>
          </ProjectContainer>
        </ProjectsWrapper>
      </SectionContent>
    </Wrapper>
  );
};

export default ProjectsSection;
