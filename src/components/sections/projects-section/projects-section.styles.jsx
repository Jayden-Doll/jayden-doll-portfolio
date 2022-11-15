import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  min-height: auto;
  width: 100%;
  font-family: "JetBrains Mono";
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 6rem;
  h1,
  h2,
  p {
    margin: 0;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 3rem;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  height: auto;
  padding-top: 6rem;
  row-gap: 8rem;
`;
