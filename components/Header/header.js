import {Div, Image} from './indexStyle';
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
  </Div>
  </>
};

export default Header