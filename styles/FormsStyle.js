import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Form = styled.form`
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

export const Circle1 = styled.div`
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

export const Circle2 = styled.div`
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

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const Input = styled.input`
  border: none;
  border-radius: 2rem;
  width: 100%;
  height: 30px;
  margin: auto;
  margin-top: 2%;
  padding-left:25px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  outline: none;
  border-radius: 2rem;
  border: none;
  background: #4c2a56;
  color: white;
  margin-top: 5vh;
  cursor: pointer;

  &:hover {
    border: none;
    outline: none;
    color:#4c2a56;
    background-color:white;
  }
`;
