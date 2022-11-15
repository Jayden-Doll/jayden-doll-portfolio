import Title from "../../main/title/title.component";
import ProjectTile from "../../main/project-tile/project-tile.component";

import gsmini from "../../../images/project-images/gsmini.png";
import matchem from "../../../images/project-images/matchem.png";
import planetviewer from "../../../images/project-images/planets.png";
import yogadays from "../../../images/project-images/yogadays.png";

import {
  Wrapper,
  SectionContent,
  ProjectsWrapper,
} from "./projects-section.styles";

const ProjectsSection = () => {
  return (
    <Wrapper>
      <SectionContent id="projects">
        <Title text="Projects" />
        <ProjectsWrapper>
          <ProjectTile
            imgSrc={gsmini}
            altText=""
            title="GS Mini Product Page"
            desc="This is the description."
            tags="HTML SASS JAVASCRIPT FIGMA"
            codeLink="https://github.com/Jayden-Doll/GuitarSite-Redesign"
            liveLink="https://taylor-mini-mahogany.netlify.app/"
          />
          <ProjectTile
            imgSrc={yogadays}
            title="YogaDays Yoga Tracker"
            desc="This is the description."
            tags="REACT STYLED-COMPONENTS CSS FIGMA"
            codeLink="https://github.com/Jayden-Doll/YogaDays-Yoga-Tracker"
            liveLink="https://yogadays.netlify.app/"
          />
          <ProjectTile
            imgSrc={matchem}
            title="Match 'Em"
            desc="This is the description."
            tags="HTML CSS JAVASCRIPT"
            codeLink="https://github.com/Jayden-Doll/Matchem-Game"
            liveLink="https://matchemupgame.com/"
          />
          <ProjectTile
            imgSrc={planetviewer}
            title="PlanetViewer"
            desc="This is the description."
            tags="REACT STYLED-COMPONENTS FRAMER-MOTION FIGMA SPLINE"
            codeLink="https://github.com/Jayden-Doll/PlanetViewer"
            liveLink="https://planet-viewer3d.netlify.app/"
          />
        </ProjectsWrapper>
      </SectionContent>
    </Wrapper>
  );
};

export default ProjectsSection;
