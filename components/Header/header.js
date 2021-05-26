import { Div, Button, TextCountainer } from "./index";
import { createGlobalStyle } from "styled-components";
import Image from 'next/image';

const GlobalStyle = createGlobalStyle`
     body{
       min-height:100vh;
       margin:0;
       padding:0;
       font-family:'Kaushan Script'
     }
`;

const Header = () => {
  return (
    <>
      <Div>
        <GlobalStyle />
        <Image
          src="/public/logo.svg"
          alt="logo"
          width={191}
          height={136}
        />
        {/* <ImageMenu
          src="https://res.cloudinary.com/dioxrnste/image/upload/v1621786662/logo/hamburger/hamburger_gl8qxn.png"
          alt="menu"
        /> */}
        <TextCountainer>
          <Button>Prijavi se</Button>
          <Button>Registruj se</Button>
        </TextCountainer>
      </Div>
    </>
  );
};

export default Header;
