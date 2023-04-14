import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
`;

export const Search = styled.input`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  background-color: var(--gray-200);
  color: var(--white);
`;

export const User = styled.div`
  display: flex;
  background-color: var(--gray-200);
  padding: 1rem;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
`;

export const Avatar = styled.div`
  padding: 1rem;
  background-color: var(--orange);
  border-radius: 999px;
  color: var(--gray-300);
`;

export const ContainerRigth = styled.div`
  display: flex;
  gap: 0.5rem;
`;
