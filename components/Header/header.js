import { useState, useEffect } from "react";
import { Div, Button, TextCountainer } from "./index";
import Image from "next/image";
import withApollo from "../../hoc/withApollo";
import { useLazyGetUser } from "../../apollo/actions";
import Link from "next/link";

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

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
    if (!hasResponse) {
      setHasResponse(true);
    }
  }
  return (
    <>
      <Div>
        <AppLink href="/">
          <img
            src="https://res.cloudinary.com/dioxrnste/image/upload/v1622144476/logo/logo_3_qfn2w0.png"
            alt="logo"
            style={{
              width: "150px",
              position: "absolute",
              left: "10%",
              top: "1%",
            }}
          />
        </AppLink>
        {hasResponse && (
          <TextCountainer>
            {user && (
              <>
                <span>Welcome {user.email}</span>
                <AppLink href="/login">Logout</AppLink>
              </>
            )}
            {(error || !user) && (
              <>
                <AppLink href="/login">
                  <Button>Sign in | </Button>
                </AppLink>
                <AppLink
                  href="/register"
                  className="navbar-brand mr-3 font-weight-bold"
                >
                  <Button>Create an account</Button>
                </AppLink>
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
