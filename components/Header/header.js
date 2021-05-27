import { useState, useEffect } from "react";
import { Div, Button, TextCountainer } from "./index";
import { createGlobalStyle } from "styled-components";
import Image from "next/image";
import withApollo from "../../hoc/withApollo";
import { useLazyGetUser } from "../../apollo/actions";
import Link from "next/link";

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

const GlobalStyle = createGlobalStyle`
     body{
       min-height:100vh;
       margin:0;
       padding:0;
       font-family:'Kaushan Script'
     }
`;

const Header = () => {
  const [user, setUser] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, { data, error }] = useLazyGetUser();

  useEffect(() => {
    getUser();
  }, []);

  if (data) {
    if (data.user && !user) {
      setUser(data.user);
    }
    if (!data.user && user) {
      setUser(data.user);
    }
    if(!hasResponse) {
      setHasResponse(true);
    }
  }
  return (
    <>
      <Div>
        <GlobalStyle />
        <Image src="/public/logo.svg" alt="logo" width={191} height={136} />
        {/* <ImageMenu
          src="https://res.cloudinary.com/dioxrnste/image/upload/v1621786662/logo/hamburger/hamburger_gl8qxn.png"
          alt="menu"
        /> */}
        {hasResponse && (
          <TextCountainer>
            {user && (
              <>
                <span>Welcome {user.email}</span>
                <AppLink
                  href="/login"
                  className="navbar-brand mr-3 font-weight-bold"
                >
                  Logout
                </AppLink>
              </>
            )}
            {(error || !user) && (
              <>
                <Button>Prijavi se</Button>
                <Button>Registruj se</Button>
              </>
            )}
          </TextCountainer>
        )}

        {user && console.log(user)}
      </Div>
    </>
  );
};

export default withApollo(Header);
