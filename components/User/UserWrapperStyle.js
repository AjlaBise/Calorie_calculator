import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  background-image:linear-gradient( to top right, #ffffff, rgb(91 28 156 / 32%) );
  color: white;
  padding-top:50px;
`;

export const Card = styled.div`
  width: 80%;
  height: 250px;
  background: linear-gradient(
    to right top,
    rgba(179, 101, 202, 1),
    rgba(179, 101, 202, 0.4)
  );
  margin-bottom: 50px;
  margin-left: 15%;
  margin-top: 5%;
  color:black;
  border-radius:2rem;
  box-shadow: 15px 10px 15px #6e6c6f4d;

  &:hover{
    transform: scale(1.1);
  }

`;
