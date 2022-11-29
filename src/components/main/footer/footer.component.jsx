import { Wrapper, SectionContent, FooterText } from "./footer.styles";

const FooterSection = () => {
  return (
    <Wrapper>
      <SectionContent>
        <FooterText
          initial={{ opacity: 0 }}
          transition={{ delay: 0, duration: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          Created by Jayden Doll
        </FooterText>
      </SectionContent>
    </Wrapper>
  );
};

export default FooterSection;
