import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background-image: repeating-linear-gradient(
      90deg,
      rgba(239, 116, 37, 0.05) 0px,
      rgba(239, 116, 37, 0.05) 1px,
      transparent 1px,
      transparent 11px,
      rgba(239, 116, 37, 0.05) 11px,
      rgba(239, 116, 37, 0.05) 12px,
      transparent 12px,
      transparent 32px
    ),
    repeating-linear-gradient(
      135deg,
      rgba(239, 116, 37, 0.05) 0px,
      rgba(239, 116, 37, 0.05) 1px,
      transparent 1px,
      transparent 11px,
      rgba(239, 116, 37, 0.05) 11px,
      rgba(239, 116, 37, 0.05) 12px,
      transparent 12px,
      transparent 32px
    ),
    repeating-linear-gradient(
      45deg,
      rgba(239, 116, 37, 0.05) 0px,
      rgba(239, 116, 37, 0.05) 1px,
      transparent 1px,
      transparent 11px,
      rgba(239, 116, 37, 0.05) 11px,
      rgba(239, 116, 37, 0.05) 12px,
      transparent 12px,
      transparent 32px
    ),
    repeating-linear-gradient(
      180deg,
      rgba(239, 116, 37, 0.05) 0px,
      rgba(239, 116, 37, 0.05) 1px,
      transparent 1px,
      transparent 11px,
      rgba(239, 116, 37, 0.05) 11px,
      rgba(239, 116, 37, 0.05) 12px,
      transparent 12px,
      transparent 32px
    ),
    linear-gradient(135deg, rgba(220, 93, 42, 0.13), rgba(220, 93, 42, 0.61));
  padding: 5rem;
  box-sizing: border-box;
  overflow: hidden;
`;
