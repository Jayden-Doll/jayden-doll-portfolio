import { Wrapper, SkillsContent } from "./skills-section.styles";

import IconsDisplay from "../../main/icons-display/icons-display.component";
import Title from "../../main/title/title.component";

const SkillsSection = () => {
  return (
    <Wrapper>
      <SkillsContent>
        <Title
          element="h3"
          text="My Skills"
        />
        <IconsDisplay />
      </SkillsContent>
    </Wrapper>
  );
};

export default SkillsSection;
