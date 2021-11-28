import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Input = styled.input`
  height: 2rem;
  width: 40rem;
  margin-bottom: 1rem;
  padding: 1rem 0.75rem;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid #123;

  @media (max-width: 780px) {
    width: 20rem;
  }
`;

export const Button = styled.button`
  height: 3rem;
  width: 10rem;
  cursor: pointer;
  background-color: #123;
  border: 0;
  border-radius: 0.25rem;
  color: #fff;
  transition: filter 0.3s;

  &:hover {
    filter: opacity(0.9);
  }
`;

export const Label = styled.label`
  color: #000;
  align-self: flex-start;
  margin-bottom: 0.5rem;
`;
