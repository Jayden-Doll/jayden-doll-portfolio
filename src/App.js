import { Wrapper, Content } from "./App.styles.jsx";
import Navbar from "./components/main/navbar/navbar.component";
import HeroSection from "./components/sections/hero-section/hero-section.component";
import ProjectsSection from "./components/sections/projects-section/projects-section.component.jsx";
import SkillsSection from "./components/sections/skills-section/skills-section.component.jsx";
import AboutSection from "./components/sections/about-section/about-section.component.jsx";

function App() {
  const calculateTheme = () => {
    return "orange";
    //blue
    //orange
    //purple
    //green
  };

  return (
    <>
      <Wrapper data-theme={calculateTheme()}>
        <Navbar />
        <Content>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <AboutSection />
        </Content>
      </Wrapper>
    </>
  );
}

export default App;
