import styled from "styled-components";

export const Button = styled.button`
  color: white;
  font-size: 18px;
  padding-right: 8px;
  font-family: "Courgette", cursive;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding-left: 15px;
  &:hover {
    color: black;
  }
`;
export const DivImg = styled.div`
  border: 0;
  color: #333;
  cursor: pointer;
  outline: 0;
  font-size: 40px;
  position: absolute;
  top: 40px;
  right: 40px;
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color: #88808a6e;
  box-shadow: 5px 10px 12px #6e6c6f4d;
  border: none;
  display: block;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  width: 300px;
  z-index: 999;
  box-shadow: 0 16px 24px 2px rgb(179, 101, 202);
  background: rgb(180, 101, 204);
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
  padding: 15px 12px;
  z-index: 999;
  font-family: "Courgette", cursive;
  &:hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
`;

export const DivBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20%;
  position:absolute;
  top:7%;
`;
