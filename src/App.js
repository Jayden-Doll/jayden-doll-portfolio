import { Wrapper } from "./App.styles.jsx";
import Navbar from "./components/main/navbar/navbar.component";
import HeroSection from "./components/sections/hero-section/hero-section.component";

function App() {
  const calculateTheme = () => {
    return "green";
  };

  return (
    <Wrapper data-theme={calculateTheme()}>
      <Navbar />
      <HeroSection />
    </Wrapper>
  );
}

export default App;
