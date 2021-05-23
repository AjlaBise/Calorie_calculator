import styled from "styled-components";

const Button = styled.button`
  color: white;
  font-size: 18px;
  padding-right: 15px;
  font-family: "Courgette", cursive;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #7e229b;
  }
`;

const TextCountainer = styled.div`
  display: flex;
  width: 20%;
  position: absolute;
  right: 0;
  top: 4%;
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
  height: 140px;
  background-color: #082435;
  box-shadow: 10px 10px 30px #041623;
  border: none;
  display: block;
  white-space: none;
`;

export { Div, Image, ImageMenu, Button, TextCountainer };
