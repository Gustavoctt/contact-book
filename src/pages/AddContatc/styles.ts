import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
`;

export const FormUser = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HeaderForm = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const FormThreeColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 0.5rem;
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

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;
