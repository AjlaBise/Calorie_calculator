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
          <img
            src="https://res.cloudinary.com/dioxrnste/image/upload/v1621784958/logo/logo_j3jpik.png"
            alt="logo"
            style={{
              width: "150px",
              position: "absolute",
              left: "10%",
              top: "1%",
            }}
          />
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
        {isActive && (
          <DropdownContent>
            <UL>
              <LI>Edit Accout</LI>
              <LI>
                <AppLink href="/logout">Log Out</AppLink>
              </LI>
              {user && user.role === "regular" && (
                <LI>
                  <AppLink href="/">Edit accont</AppLink>
                </LI>
              )}
            </UL>
          </DropdownContent>
        )}
      </Div>
    </>
  );
};

export default withApollo(Header);
