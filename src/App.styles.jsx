import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.main`
  display: flex;
  height: auto;
  width: 100%;
  padding: 0 9%;
  flex-direction: column;
  filter: ${(props) => (props.blur ? `blur(0.2rem) grayscale(0.5)` : `none`)};
  pointer-events: ${(props) => (props.blur ? `none` : `default`)};
  user-select: ${(props) => (props.blur ? `none` : `default`)};
  transition: 0.4s ease;

  @media (max-width: 768px) {
    padding-top: 7rem;
  }

  @media (max-width: 375px) {
    padding-left: 6%;
    padding-right: 6%;
  }
`;
