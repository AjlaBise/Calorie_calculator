import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
  Div,
  DivRight,
  DivLeft,
  Text,
  Input,
  ButtonAdd,
} from "./foodWrapperStyle";
import { useCreateMeals } from "../../apollo/actions";

function FoodForm(props) {
  const [createMeal, { data, error }] = useCreateMeals();

  const { register} = useForm();

  const [serving_size, setServing_size] = useState(0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    setCalories(parseInt((props.meal && props.meal.calories) * serving_size));
  }, [props, serving_size]);

  return (
    <div>
      <form onSubmit={(data) => createMeal({ variables: data })}>
        <Div>
          <DivLeft>
            <Text>Name: {props.meal && props.meal.name}</Text>
            <Text>
              Serving size : {props.meal && props.meal.serving_size} gr
            </Text>
            <Text>Calories: {props.meal && props.meal.calories}</Text>
            <Text>Proteins: {props.meal && props.meal.proteins}</Text>
            <Text>Carbs: {props.meal && props.meal.carbs}</Text>
            <Text>Fat: {props.meal && props.meal.fat}</Text>
          </DivLeft>
          <DivRight>
            <label>Serving size</label>
            <Input
              {...register("serving_size")}
              type="number"
              placeholder="serving_size"
              id="serving_size"
              value={serving_size}
              onChange={(e) => setServing_size(e.target.value)}
            />
            <Text>Calories: {calories}</Text>

            <ButtonAdd type="submit">Save</ButtonAdd>
          </DivRight>
        </Div>
      </form>
    </div>
  );
}

export default FoodForm;
