import {
  ProjectContainer,
  ProjectContent,
  ImageContainer,
  ProjectDecoration,
  ProjectDecorationContent,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectTag,
  ProjectLinkContainer,
  ProjectLink,
  GithubIcon,
  LiveLinkIcon,
} from "./project-title.styles";

const ProjectTile = ({ imgSrc, title, desc, tags, codeLink, liveLink }) => {
  return (
    <ProjectContainer>
      <ProjectContent>
        <ImageContainer>
          <ProjectDecoration>
            <ProjectDecorationContent />
          </ProjectDecoration>
          <ProjectImage src={imgSrc} />
        </ImageContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectTag>{tags}</ProjectTag>
        <ProjectDescription>{desc}</ProjectDescription>
        <ProjectLinkContainer>
          <ProjectLink
            href={codeLink}
            target="_blank">
            <GithubIcon />
          </ProjectLink>
          <ProjectLink
            href={liveLink}
            target="_blank">
            <LiveLinkIcon />
          </ProjectLink>
        </ProjectLinkContainer>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectTile;
