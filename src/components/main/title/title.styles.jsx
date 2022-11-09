import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const TitleUnderline = styled.div`
  border-radius: 0.2rem;
  background: var(--text-primary);
  height: 0.2rem;
  width: 50%;
  align-self: flex-end;
`;

export const TitleText = styled.p`
  font-size: var(--fontsize-title);
  background: var(--text-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  text-align: left;
  margin-bottom: 0;

  ::selection {
    -webkit-background-clip: none;
    -webkit-text-fill-color: #181818;
  }
`;
