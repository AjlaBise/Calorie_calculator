import styled from "styled-components";

const Image = styled.img`
  display: flex;
  position:absolute;
  left: 5%;
`;

const ImageMenu = styled.img`
  display: flex;
  position:absolute;
  right: 5%;
  top:5%;
`;
const Div = styled.div`
display:flex;
  width: 100%;
  height: 150px;
  background-color: #d6cbd3;
  box-shadow: 10px 10px 30px #b2b2b2;
  border: none;
  display: block;
  white-space: none;
`;

export { Div, Image, ImageMenu};
