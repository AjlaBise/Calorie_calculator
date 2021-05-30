import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px;
`;

export const Button = styled.button`
  background: none;
  color: white;
  font-size: 15px;
  border:none;
  outline:none;
  font-family: "Courgette", cursive;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`;
