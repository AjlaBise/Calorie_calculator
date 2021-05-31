import { useState, useEffect } from "react";
import {
  Div,
  DropdownContent,
  UL,
  LI,
  Button,
  DivImg,
  DivBtn,
} from "./HeaderStyle";
import Image from "next/image";
import withApollo from "../../../hoc/withApollo";
import { useLazyGetUser } from "../../../apollo/actions";
import Link from "next/link";

const AppLink = ({ children, className, href, as }) => (
  <Link href={href} as={as}>
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
          <Image src="/logo.svg" alt="logo" width={185} height={120} />
        </AppLink>

        <DivImg>
          <Image
            onClick={handleDropdown}
            src="/hamburger.png"
            alt="hamburger"
            width={50}
            height={50}
          />
        </DivImg>

        {hasResponse && (
          <>
            {user && (
              <DivBtn>
                <AppLink href="/meals">
                  <Button>Meals</Button>
                </AppLink>

                <AppLink href="/food">
                  <Button>Food</Button>
                </AppLink>
              </DivBtn>
            )}
            {isActive && (
              <DropdownContent>
                {user && (
                  <UL>
                    <LI>
                      <AppLink href="/login">Log Out</AppLink>
                    </LI>
                    {user && user.role === "regular" && (
                      <LI>
                        <AppLink href="/[id]" as={`/${user.id}`}>
                          Edit accont
                        </AppLink>
                      </LI>
                    )}
                    {user && user.role === "admin" && (
                      <LI>
                        <AppLink href="/user">All users</AppLink>
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
