import LoginForm from "../components/Forms/Login/LoginForm";
import withApollo from "../hoc/withApollo";
import { useSignIn } from "../apollo/actions";
import Redirect from "../components/shared/Redirect";

const Login = () => {
  const [signIn, { data, error }] = useSignIn();
  const errorMessage = (error) => {
    return (
      (error.graphQLErrors && error.graphQLErrors[0].message) ||
      "Ooooops something went wrong..."
    );
  };

  return (
    <>
      <LoginForm onSubmit={(signInData) => signIn({ variables: signInData })} />
      {data && data.signIn && <Redirect to="/" />}
      {error && <div className="alert alert-danger">{errorMessage(error)}</div>}
    </>
  );
};

export default withApollo(Login);
