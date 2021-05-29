import FoodForm from "../../components/Forms/FoodForm/foodForm";
import withApollo from "../../hoc/withApollo";
import { useCreateFood } from "../../apollo/actions";

const NewFood = () => {
  const [createFood, { error }] = useCreateFood();

  const errorMessage = (error) => {
    return (
      (error.graphQLErrors && error.graphQLErrors[0].message) ||
      "Ooooops something went wrong..."
    );
  };
  return (
    <>
      <FoodForm onSubmit={(data) => createFood({variables: data})} />
      {error && <div className="alert alert-danger">{errorMessage(error)}</div>}

    </>
  );
};

export default withApollo(NewFood);
