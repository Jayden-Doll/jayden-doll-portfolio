import { TitleContainer, TitleUnderline, TitleText } from "./title.styles";

const Title = (props) => {
  return (
    <TitleContainer>
      <TitleText>{props.text}</TitleText>
      <TitleUnderline />
    </TitleContainer>
  );
};

export default Title;
