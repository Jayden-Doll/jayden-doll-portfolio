import { Wrapper, Content } from "./App.styles.jsx";
import Navbar from "./components/main/navbar/navbar.component";
import HeroSection from "./components/sections/hero-section/hero-section.component";
import SkillsSection from "./components/sections/skills-section/skills-section.component.jsx";

function App() {
  const calculateTheme = () => {
    return "blue";
  };

  return (
    <Wrapper data-theme={calculateTheme()}>
      <Navbar />
      <Content>
        <HeroSection />
        <SkillsSection />
      </Content>
    </Wrapper>
  );
}

export default App;
