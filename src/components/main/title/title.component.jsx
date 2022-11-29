import { TitleContainer, TitleUnderline, TitleText } from "./title.styles";

const Title = ({ text }) => {
  return (
    <TitleContainer
      initial={{ opacity: 0 }}
      transition={{ delay: 0, duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
      <TitleText>{text}</TitleText>
      <TitleUnderline />
    </TitleContainer>
  );
};

export default Title;
