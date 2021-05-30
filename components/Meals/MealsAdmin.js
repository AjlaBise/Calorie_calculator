import {
  MainWrapper,
  Wrapper,
  Circle1,
  Circle2,
  Button,
  Text,
  DIV
} from "./MealsStyle";
import { useGetAllMeals } from "../../apollo/actions";
import { useState, useEffect } from "react";

const AllMeals = ({user}) => {
  const { data } = useGetAllMeals();
  {
    console.log(data);
  }

  const [current, setCurrent] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrevious, setDisabledPrevious] = useState(true);

  const handlePrevious = () => {
    if (current >= 1) {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current < data.mealsAll.length - 1) {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    current === 0 ? setDisabledPrevious(true) : setDisabledPrevious(false);
    current === (data && data.mealsAll.length)
      ? setDisabledNext(true)
      : setDisabledNext(false);
  }, [current]);

  return (
    <MainWrapper>
      <Circle1>
        <Button onClick={handleNext} disabled={disabledNext}>
          Next ↪
        </Button>
      </Circle1>
      <Circle2>
        <Button onClick={handlePrevious} disabled={disabledPrevious}>
          Previous ↩
        </Button>
      </Circle2>
      <Wrapper>
        <DIV>
        <Text>🍱 Serving size: {data && data.mealsAll[current].serving_size}</Text>

        <Text>⚖️ Calories : {data && data.mealsAll[current].calories}</Text>
        <Text>👤 User :  {data && data.mealsAll[current].user_id}</Text>
        </DIV>
      </Wrapper>
    </MainWrapper>
  );
};

export default AllMeals;
