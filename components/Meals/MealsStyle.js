import styled from "styled-components";

export const MainWrapper = styled.div`
  background-image: url("https://res.cloudinary.com/dioxrnste/image/upload/o_34/v1622129724/logo/pexels-polina-tankilevitch-4443487_teolnw.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 50%;
  height: 400px;
  background: rgb(179, 101, 202);
  background: linear-gradient(
    to right top,
    rgba(179, 101, 202, 0.8),
    rgba(179, 101, 202, 0.3)
  );
  display: flex;
  align-items: center;
  justify-content:center;
  margin-top: 10%;
  margin-bottom: 10%;
  border-radius: 20rem;
`;
export const DIV = styled.div`
  width: 50%;
  height: 400px;
  margin-top: 10%;
  margin-bottom: 10%;
  border-radius: 20rem;
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
  top: 60%;
  right: 15%;
  border-radius: 15rem;
`;

export const Circle2 = styled.div`
  background: rgb(179, 101, 202);
  background: linear-gradient(
    to right top,
    rgba(179, 101, 202, 0.8),
    rgba(179, 101, 202, 0.3)
  );
  height: 12rem;
  width: 12rem;
  position: absolute;
  border-radius: 15rem;
  left: 15%;
`;

export const Button = styled.button`
  background: linear-gradient(
    to right top,
    #060606,
    rgba(179, 101, 202, 0.3)
  );
  height: 5rem;
  width: 5rem;
  position: absolute;
  border-radius: 5rem;
  left: 15%;
  color:white;
`;

export const Text = styled.p`
  font-size:25px;
  color:white;
  padding-right:10px;

`;