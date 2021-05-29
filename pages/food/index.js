import withApollo from "../../hoc/withApollo";
import FoodWrapper from "../../components/Foods/foodWrapper";

const Food = () => {
  return (
    <div>
      <FoodWrapper />
    </div>
  );
};

export default withApollo(Food);
