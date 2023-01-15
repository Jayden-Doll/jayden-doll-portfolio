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
        <ImageContainer
          initial={{ opacity: 0 }}
          transition={{ delay: 0, duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          <ProjectDecoration>
            <ProjectDecorationContent />
          </ProjectDecoration>
          <ProjectImage
            alt={altText}
            src={imgSrc}
          />
        </ImageContainer>
        <ProjectTitle
          initial={{ opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          {title}
        </ProjectTitle>
        <ProjectTag
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          {tags}
        </ProjectTag>
        <ProjectDescription
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          {desc}
        </ProjectDescription>
        {desc2 && (
          <ProjectDescription
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}>
            {desc2}
          </ProjectDescription>
        )}
        <ProjectLinkContainer>
          <ProjectLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href={codeLink}
            target="_blank"
            aria-label="Project Code">
            <GithubIcon
              aria-label="Github Icon"
              title="Github Link"
            />
          </ProjectLink>
          <ProjectLink
            initial={{ opacity: 0 }}
            transition={{ delay: 0.45, duration: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href={liveLink}
            target="_blank"
            aria-label="Live Site">
            <LiveLinkIcon
              aria-label="Live Project Site Icon"
              title="Live Project Link"
            />
          </ProjectLink>
        </ProjectLinkContainer>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectTile;
