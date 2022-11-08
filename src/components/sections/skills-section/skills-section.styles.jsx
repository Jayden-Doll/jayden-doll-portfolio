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
  padding-top: 14rem;
  margin-bottom: 6rem;
  h1,
  h2,
  p {
    margin: 0;
  }
`;

export const SkillsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: auto;
  height: 100%;
`;
