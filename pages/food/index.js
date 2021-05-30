import withApollo from "../../hoc/withApollo";
import FoodWrapper from "../../components/Foods/foodWrapper";
import FoodForm from "../../components/Foods/foodForm";
import { useState } from "react";
import { useCreateMeals } from "../../apollo/actions";

const Food = () => {
  const [createMeals, { data, error }] = useCreateMeals();
  const [meal, setMeal] = useState();

  return (
    <div>
      <FoodWrapper setMeal={setMeal} />
      <FoodForm
        meal={meal}
        onSubmit={(data) => createMeals({ variables: data })}
      />
      {data && data.createFood && <Redirect to="/food" />}
    </div>
  );
};

export default withApollo(Food);
