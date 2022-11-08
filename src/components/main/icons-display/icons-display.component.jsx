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
      <IconContainer>
        <HTMLIcon />
        <IconName>HTML</IconName>
      </IconContainer>
      <IconContainer>
        <CSSIcon />
        <IconName>CSS</IconName>
      </IconContainer>
      <IconContainer>
        <JSIcon />
        <IconName>Javascript</IconName>
      </IconContainer>
      <IconContainer>
        <ReactIcon />
        <IconName>ReactJS</IconName>
      </IconContainer>
      <IconContainer>
        <NodeIcon />
        <IconName>NodeJS</IconName>
      </IconContainer>
      <IconContainer>
        <GitIcon />
        <IconName>Git</IconName>
      </IconContainer>
      <IconContainer>
        <SassIcon />
        <IconName>Sass</IconName>
      </IconContainer>
      <IconContainer>
        <StyledIcon />
        <IconName>Styled Components</IconName>
      </IconContainer>
      <IconContainer>
        <FigmaIcon />
        <IconName>Figma</IconName>
      </IconContainer>
    </Container>
  );
};

export default IconsDisplay;
