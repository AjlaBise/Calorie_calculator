import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { useRouter } from "next/router";

const EditUser = () => {

  return (
    <>
      <h1>Admin edit page</h1>
    </>
  );
};

export default withApollo(withAuth(EditUser, "admin"));
