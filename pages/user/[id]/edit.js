import withApollo from "../../../hoc/withApollo";
import withAuth from "../../../hoc/withAuth";
import useRouter from "next/router";

const EditUser = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetUserById({ variables: { id } });

  return (
    <>
      <h1>Edit page</h1>
    </>
  );
};

export default withApollo(withAuth(EditUser, "admin"));
