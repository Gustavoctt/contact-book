import styled from "styled-components";

export const HeaderForm = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  + div {
    margin-top: 2.5rem;
  }
`;

export const FormOneColum = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const FormTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const FormThreeColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 0.5rem;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;

  p {
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  input {
    width: inherit;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    background-color: var(--gray-200);
    color: var(--white);
  }
`;
