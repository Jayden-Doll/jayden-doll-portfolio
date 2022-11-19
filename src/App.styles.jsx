import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.main`
  transition: 0.4s ease;
  display: flex;
  height: auto;
  width: 100%;
  padding: 0 9%;
  flex-direction: column;
  filter: ${(props) =>
    props.blur ? `blur(0.4rem) grayscale(0.4)` : `blur(0)`};
  pointer-events: ${(props) => (props.blur ? `none` : `default`)};
  user-select: ${(props) => (props.blur ? `none` : `default`)};
`;
