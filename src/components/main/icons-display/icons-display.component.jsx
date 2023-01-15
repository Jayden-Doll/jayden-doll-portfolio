import { Container, IconContainer, IconName } from "./icons-display.styles";

import HTMLIcon from "../../icons/html-icon/html-icon.component";
import CSSIcon from "../../icons/css-icon/css-icon.component";
import JSIcon from "../../icons/js-icon/js-icon.component";
import ReactIcon from "../../icons/react-icon/react-icon.component";
import NodeIcon from "../../icons/node-icon/node-icon.component";
import SassIcon from "../../icons/sass-icon/sass-icon.component";
import GitIcon from "../../icons/git-icon/git-icon.component";
import StyledIcon from "../../icons/styled-icon/styled-icon.component";
import FigmaIcon from "../../icons/figma-icon/figma-icon.component";

const IconsDisplay = () => {
  return (
    <Container>
      <IconContainer
        initial={{ opacity: 0 }}
        transition={{ delay: 0, duration: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <HTMLIcon aria-label="HTML Icon" />
        <IconName>HTML</IconName>
      </IconContainer>
      <IconContainer
        initial={{ opacity: 0 }}
        transition={{ delay: 0, duration: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <CSSIcon aria-label="CSS Icon" />
        <IconName>CSS</IconName>
      </IconContainer>
      <IconContainer
        initial={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <JSIcon aria-label="Javascript Icon" />
        <IconName>JavaScript</IconName>
      </IconContainer>
      <IconContainer
        initial={{ opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <ReactIcon aria-label="ReactJS Icon" />
        <IconName>ReactJS</IconName>
      </IconContainer>
      <IconContainer
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <NodeIcon aria-label="NodeJS Icon" />
        <IconName>NodeJS</IconName>
      </IconContainer>
      <IconContainer
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <GitIcon aria-label="Git Icon" />
        <IconName>Git</IconName>
      </IconContainer>
      <IconContainer
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <SassIcon aria-label="Sass Icon" />
        <IconName>Sass</IconName>
      </IconContainer>
      <IconContainer
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <StyledIcon aria-label="Styled Components Icon" />
        <IconName>Styled Components</IconName>
      </IconContainer>
      <IconContainer
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        <FigmaIcon aria-label="Figma Icon" />
        <IconName>Figma</IconName>
      </IconContainer>
    </Container>
  );
};

export default IconsDisplay;
