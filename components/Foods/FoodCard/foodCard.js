import { Wrapper } from "./foodCardStyle";

function FoodCard({ food }) {
  const onClickButton = () => {
    console.log(food.proteins);
  };
  return (
    <Wrapper>
      <button onClick={onClickButton}>{food.name}</button>
    </Wrapper>
  );
}

export default FoodCard;
