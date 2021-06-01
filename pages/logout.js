import { useEffect } from "react";
import { useRouter } from "next/router";
import withApollo from "../hoc/withApollo";
import { useSignOut } from "../apollo/actions";

const LogOut = ({ apollo }) => {
  const [signOut] = useSignOut();
  const router = useRouter();

  useEffect(() => {
    signOut().then(() => {
      apollo.resetStore().then(() => router.push("/login"));
    });
  }, []);

  return (
    <>
      <h1>LogOut</h1>
    </>
  );
};

export default withApollo(LogOut);
