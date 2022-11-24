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

const ProjectTile = ({
  imgSrc,
  title,
  desc,
  desc2,
  tags,
  altText,
  codeLink,
  liveLink,
}) => {
  return (
    <ProjectContainer>
      <ProjectContent>
        <ImageContainer>
          <ProjectDecoration>
            <ProjectDecorationContent />
          </ProjectDecoration>
          <ProjectImage
            alt={altText}
            src={imgSrc}
          />
        </ImageContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectTag>{tags}</ProjectTag>
        <ProjectDescription>{desc}</ProjectDescription>
        {desc2 && <ProjectDescription>{desc2}</ProjectDescription>}
        <ProjectLinkContainer>
          <ProjectLink
            href={codeLink}
            target="_blank"
            aria-label="Project Code">
            <GithubIcon />
          </ProjectLink>
          <ProjectLink
            href={liveLink}
            target="_blank"
            aria-label="Live Site">
            <LiveLinkIcon />
          </ProjectLink>
        </ProjectLinkContainer>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectTile;
