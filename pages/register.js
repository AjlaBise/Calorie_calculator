import { useSignUp } from "../apollo/actions";
import withApollo from "../hoc/withApollo";
import Redirect from "../components/shared/Redirect";
import RegisterForm from "../components/Forms/RegisterForm";

const register = () => {
  const [signUp, { data, loading, error }] = useSignUp();

  const handleSignUp = async (signUpData) => {
    try {
      await signUp({ variables: signUpData });
    } catch (error) {}
  };

  return (
    <>
      <div>
        <div>
          <h1>REGISTER HERE</h1>
          <RegisterForm onSubmit={handleSignUp} />
          <pre>
            {error &&
              error.graphQLErrors.map(({ message }, i) => (
                <h1 key={i}>{message}</h1>
              ))}
          </pre>
          {data && data.signUp && (
            <Redirect to="/login" query={{ message: "REGISTRED" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default withApollo(register);
