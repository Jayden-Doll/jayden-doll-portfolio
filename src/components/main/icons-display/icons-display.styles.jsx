import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: auto;
  align-items: center;
  justify-content: flex-start;
  row-gap: 3rem;
  column-gap: 5rem;
  max-width: 75%;
  padding: 5rem 0;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 4rem;
  transition: 0.2s ease;

  svg {
    transition: 0.2s ease;
  }

  :hover {
    svg {
      will-change: transform;
      transform: translateY(-0.25rem) scale(105%);
    }

    p {
      will-change: font-weight;
      color: var(--text-primary);
      font-weight: 500;
      cursor: default;
    }
  }
`;

export const IconName = styled.p`
  font-family: "Fira Code";
  font-weight: 400;
  color: var(--text-secondary);
  font-size: 1.1rem;
  transition: 0.2s ease;
  text-align: center;
  padding-bottom: 0.1rem;
`;
