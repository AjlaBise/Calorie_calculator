import FoodForm from "../../components/Forms/FoodForm/foodForm";
import withApollo from "../../hoc/withApollo";
import { useCreateFood } from "../../apollo/actions";
import Redirect from "../../components/shared/Redirect";

const NewFood = () => {
  const [createFood, { data, error }] = useCreateFood();

  const errorMessage = (error) => {
    return (
      (error.graphQLErrors && error.graphQLErrors[0].message) ||
      "Ooooops something went wrong..."
    );
  };
  return (
    <>
      <FoodForm onSubmit={(data) => createFood({ variables: data })} />
      {data && data.createFood && <Redirect to="/food" />}
      {error && <div className="alert alert-danger">{errorMessage(error)}</div>}
    </>
  );
};

export default withApollo(NewFood);
