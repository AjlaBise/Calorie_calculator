import { useState, useEffect } from "react";
import {
  Div,
  Button,
  TextCountainer,
  DropdownContent,
  UL,
  LI,
} from "./HeaderStyle";
import Image from "next/image";
import withApollo from "../../../hoc/withApollo";
import { useLazyGetUser } from "../../../apollo/actions";
import Link from "next/link";

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

const Header = () => {
  const [user, setUser] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, { data, error }] = useLazyGetUser();

  const handleDropdown = () => {
    setIsActive(!isActive);
  };
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
          <Image src="/logo.svg" alt="logo" width={185} height={120}/>
        </AppLink>

        <img
          onClick={handleDropdown}
          src="https://res.cloudinary.com/dioxrnste/image/upload/v1622195447/logo/hamburger_felbpi.png"
          alt="hamburger"
          style={{
            width: "40px",
            display: "flex",
            position: "absolute",
            right: "5%",
            top: "5%",
          }}
        />
        {hasResponse && (
          <>
            {isActive && (
              <DropdownContent>
                {user && (
                  <UL>
                    <LI>
                      <AppLink href="/login">Log Out</AppLink>
                    </LI>
                    {user && user.role === "regular" && (
                      <LI>
                        <AppLink href="/">Edit accont</AppLink>
                      </LI>
                    )}
                  </UL>
                )}
                {(error || !user) && (
                  <>
                    <AppLink href="/login">
                      <LI>Prijavi se</LI>
                    </AppLink>
                    <AppLink href="/register">
                      <LI>Registruj se</LI>
                    </AppLink>
                  </>
                )}
              </DropdownContent>
            )}
          </>
        )}
      </Div>
    </>
  );
};

export default withApollo(Header);
