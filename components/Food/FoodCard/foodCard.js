import { Wrapper, Button } from "./foodCardStyle";

function FoodCard({ food, setMeal }) {
  return (
    <Wrapper>
      <Button onClick={() => setMeal(food)}>🥣 {food.name}</Button>
    </Wrapper>
  );
}

export default FoodCard;
