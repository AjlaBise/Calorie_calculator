import styled from "styled-components";

const WrapperLogin = styled.div`
  width: 100%;
  min-height: 80vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(179, 101, 202);
  min-height: 80vh;
  width: 40%;
  background: linear-gradient(
    to right top,
    rgba(179, 101, 202, 1),
    rgba(179, 101, 202, 0.3)
  );
  border-radius: 2rem;
  z-index: 3;
  margin-top: 3%;
  margin-bottom: 3%;
`;

const Circle1 = styled.div`
  background: rgb(179, 101, 202);
  background: linear-gradient(
    to right top,
    rgba(179, 101, 202, 0.8),
    rgba(179, 101, 202, 0.3)
  );
  height: 12rem;
  width: 12rem;
  position: absolute;
  top: 23%;
  right: 20%;
  border-radius: 15rem;
`;

const Circle2 = styled.div`
  background: rgb(179, 101, 202);
  background: linear-gradient(
    to right top,
    rgba(179, 101, 202, 0.8),
    rgba(179, 101, 202, 0.3)
  );
  height: 15rem;
  width: 15rem;
  position: absolute;
  border-radius: 15rem;
  left: 15%;
  bottom: 0;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;
const Input = styled.input`
  border: none;
  border-radius: 2rem;
  width: 100%;
  height: 30px;
  margin: auto;
  margin-top: 2%;

  &:focus {
    border: none;
    outline: none;
  }
`;

const Bottom = styled.button`
  width: 100%;
  height: 30px;
  outline: none;
  border-radius: 2rem;
  border: none;
  background: #4c2a56;
  color: white;
  margin-top: 5vh;

  &:hover {
    border: none;
    outline: none;
    color:#4c2a56;
    background-color:white;
  }
`;
export { WrapperLogin, Form, Circle1, Circle2, Input, Div, Bottom };
