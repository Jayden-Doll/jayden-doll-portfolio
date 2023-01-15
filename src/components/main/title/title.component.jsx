import { TitleContainer, TitleUnderline, TitleText } from "./title.styles";

const Title = ({ text, element }) => {
  return (
    <TitleContainer
      initial={{ opacity: 0 }}
      transition={{ delay: 0, duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
      <TitleText as={element}>{text}</TitleText>
      <TitleUnderline alt="" />
    </TitleContainer>
  );
};

export default Title;
