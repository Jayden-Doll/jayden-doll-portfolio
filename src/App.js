import { Wrapper, Content } from "./App.styles.jsx";
import Navbar from "./components/main/navbar/navbar.component";
import HeroSection from "./components/sections/hero-section/hero-section.component";
import ProjectsSection from "./components/sections/projects-section/projects-section.component.jsx";
import SkillsSection from "./components/sections/skills-section/skills-section.component.jsx";
import AboutSection from "./components/sections/about-section/about-section.component.jsx";
import ContactSection from "./components/sections/contact-section/contact-section.component.jsx";
import FooterSection from "./components/main/footer/footer.component.jsx";

import { useContext, useEffect } from "react";
import GlobalContext from "./context/GlobalContext.js";

function App() {
  const { blur, theme, setTheme } = useContext(GlobalContext);

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (!window.localStorage.getItem("colortheme")) {
      window.localStorage.setItem("colortheme", "blue");
      setTheme("blue");
    } else {
      const storedTheme = window.localStorage.getItem("colortheme");
      setTheme(storedTheme);
    }
  }, []);

  return (
    <>
      <Wrapper data-theme={theme}>
        <Navbar />
        <Content blur={blur}>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
          <FooterSection />
        </Content>
      </Wrapper>
    </>
  );
}

export default App;
