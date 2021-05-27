import styled from "styled-components";

const Button = styled.button`
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

const TextCountainer = styled.div`
  display: flex;
  width: 20%;
  position: absolute;
  right: 0;
  top: 7%;
`;
const Image = styled.img`
  display: flex;
  position: absolute;
  left: 7%;
  height: 110px;
`;

const ImageMenu = styled.img`
  display: flex;
  position: absolute;
  right: 5%;
  top: 5%;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color:#88808a2e;
  box-shadow: 5px 10px 12px #6e6c6f6b;
  border: none;
  display: block;
  white-space: none;
`;

export { Div, Image, ImageMenu, Button, TextCountainer };
