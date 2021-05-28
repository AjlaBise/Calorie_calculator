import styled from "styled-components";

export const Button = styled.button`
  color: #7f229a;
  font-size: 18px;
  padding-right: 8px;
  font-family: "Courgette", cursive;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const TextCountainer = styled.div`
  display: flex;
  width: 20%;
  position: absolute;
  right: 0;
  top: 7%;
`;
export const Image = styled.img`
  display: flex;
  position: absolute;
  left: 7%;
  height: 110px;
`;

export const ImageMenu = styled.img`
  display: flex;
  position: absolute;
  right: 5%;
  top: 5%;
`;
export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color: #88808a2e;
  box-shadow: 5px 10px 12px #6e6c6f6b;
  border: none;
  display: block;
  white-space: none;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 300px;
  z-index: 999;
  box-shadow: 0 16px 24px 2px rgb(179, 101, 202);
  background: rgb(179, 101, 202);
  background: linear-gradient(
    to right top,
    rgba(255, 255, 255, 1),
    rgba(179, 101, 202, 0.5)
  );
`;

export const UL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 999;
`;
export const LI = styled.li`
  padding: 8px 12px;
  z-index:999;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
`;