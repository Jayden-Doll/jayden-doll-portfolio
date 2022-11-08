import { TitleContainer, TitleUnderline, TitleText } from "./title.styles";

const Title = ({ text }) => {
  return (
    <TitleContainer>
      <TitleText>{text}</TitleText>
      <TitleUnderline />
    </TitleContainer>
  );
};

export default Title;
