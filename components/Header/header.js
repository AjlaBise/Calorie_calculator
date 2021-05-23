import {Div, Image, ImageMenu} from './indexStyle';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     body{
       min-height:100vh;
       margin:0;
       padding:0;
       font-family:'Kaushan Script'
     }
`;

const Header = () => {
  return <>
  <Div>
    <GlobalStyle/>
    <Image src="https://res.cloudinary.com/dioxrnste/image/upload/v1621784958/logo/logo_j3jpik.png" alt="logo"/>
    <ImageMenu src="https://res.cloudinary.com/dioxrnste/image/upload/v1621786662/logo/hamburger/hamburger_gl8qxn.png" alt="menu"/>
  </Div>
  </>
};

export default Header