import styled from "styled-components";

export const Snackbar = styled.div`
  left: 50%;
  top: 1.5rem;
  width: 100%;
  z-index: 1000;
  cursor: pointer;
  position: fixed;
  overflow: hidden;
  max-width: 390px;
  padding: 0 1.25rem;
  animation: slide 0.2s ease;
  transform: translateX(-50%);

  @keyframes slide {
    from {
      margin-top: -120px;
    }
    to {
      margin-top: 0px;
    }
  }
`;

type ContainerProps = {
  backgroundColor: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  border-radius: 0px 12px 12px 12px;
  padding: 1rem 1.25rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
