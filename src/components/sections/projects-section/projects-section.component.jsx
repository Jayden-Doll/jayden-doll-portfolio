import Title from "../../main/title/title.component";
import ProjectTile from "../../main/project-tile/project-tile.component";

import gsmini from "../../../images/project-images/gsmini.webp";
import matchem from "../../../images/project-images/matchem.webp";
import planetviewer from "../../../images/project-images/planets.webp";
import yogadays from "../../../images/project-images/yogadays.webp";

import {
  Wrapper,
  SectionContent,
  ProjectsWrapper,
} from "./projects-section.styles";

const ProjectsSection = () => {
  return (
    <Wrapper>
      <SectionContent id="projects">
        <Title
          element="h4"
          text="Projects"
        />
        <ProjectsWrapper>
          <ProjectTile
            imgSrc={gsmini}
            altText="GS Mini Product Page"
            title="GS Mini Product Page"
            desc="An organized product page showcasing a guitar, with a breathable design and smooth animations."
            desc2="Features a playable guitar element with sounds recorded directly from the real guitar."
            tags="HTML SASS JAVASCRIPT FIGMA"
            codeLink="https://github.com/Jayden-Doll/GuitarSite-Redesign"
            liveLink="https://taylor-mini-mahogany.netlify.app/"
          />
          <ProjectTile
            imgSrc={yogadays}
            altText="YogaDays Yoga Calendar Homepage"
            title="YogaDays Yoga Calendar"
            desc="A simple web app for keeping track of yoga progress. Click on a day to watch a randomly picked yoga routine video."
            desc2="Utilizes the localStorage API and React state to store information for each day."
            tags="REACT STYLED-COMPONENTS CSS FIGMA"
            codeLink="https://github.com/Jayden-Doll/YogaDays-Yoga-Tracker"
            liveLink="https://yogadays.netlify.app/"
          />
          <ProjectTile
            imgSrc={matchem}
            altText="Match 'Em Homepage"
            title="Match 'Em"
            desc="A memory matching game built for kids. Features an interactive and enjoyable interface with a menu screen and fun animations."
            desc2="Includes options to select the amount of cards and theme of the game."
            tags="HTML CSS JAVASCRIPT"
            codeLink="https://github.com/Jayden-Doll/Matchem-Game"
            liveLink="https://matchemupgame.com/"
          />
          <ProjectTile
            imgSrc={planetviewer}
            altText="Planetviewer Homepage"
            title="PlanetViewer"
            desc="A site featuring a rotating solar system, seamless page transitions, and 3D models of the planets rendered with Spline."
            desc2="Planet data is presented in a structured way and utilizes a custom serverless API that feeds data for each planet on page render."
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
