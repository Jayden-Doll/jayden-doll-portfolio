import { Wrapper, Content } from "./App.styles.jsx";
import Navbar from "./components/main/navbar/navbar.component";
import HeroSection from "./components/sections/hero-section/hero-section.component";
import ProjectsSection from "./components/sections/projects-section/projects-section.component.jsx";
import SkillsSection from "./components/sections/skills-section/skills-section.component.jsx";
import AboutSection from "./components/sections/about-section/about-section.component.jsx";
import ContactSection from "./components/sections/contact-section/contact-section.component.jsx";
import FooterSection from "./components/main/footer/footer.component.jsx";

function App() {
  const calculateTheme = () => {
    return "blue";
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
          <ContactSection />
        </Content>
        <FooterSection />
      </Wrapper>
    </>
  );
}

export default App;
