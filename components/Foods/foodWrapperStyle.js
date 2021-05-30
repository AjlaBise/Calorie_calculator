import styled from "styled-components";

export const WrapperMain = styled.div`
  display: "flex";
  align-items: "center";
  justify-content: "center";
  flex-direction: "column";
  box-sizing: "border-box";
  width: "150px";
  background: "#995fab";
  border-radius: "2rem";
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivLeft = styled.div`
  width: 50%;
  height: 350px;
  padding-top: 20px;
  padding-left: 20%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(
    to right top,
    rgb(236 236 236),
    rgb(194 188 195 / 30%)
  );
`;

export const DivRight = styled.div`
  width: 50%;
  height: 350px;
  padding-top: 20px;
  padding-left: 2%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: linear-gradient(
    to right top,
    rgb(236 236 236),
    rgb(194 188 195 / 30%)
  );
`;

export const Text = styled.p`
  color: #211e1e;
  font-family: "Courgette", cursive;
  font-size: 15px;
`;

export const Input = styled.input`
  height: 10px;
  border-radius: 2rem;
  padding: 10px;
  margin-top: 3%;
`;

export const ButtonAdd = styled.button`
  width: 100%;
  height: 30px;
  outline: none;
  border-radius: 2rem;
  border: none;
  background: #995fab;
  color: white;
  margin-top: 5vh;
`;

export const DivFood = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: linear-gradient(
    to right top,
    rgba(179, 101, 202, 1),
    rgba(179, 101, 202, 0.3)
  );
  border-radius: 2rem;
  padding: 10px;
  margin-top: 3%;

`;
