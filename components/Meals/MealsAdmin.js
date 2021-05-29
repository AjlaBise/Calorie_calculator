import {
  MainWrapper,
  Wrapper,
  Circle1,
  Circle2,
  Button,
  Text,
} from "./MealsStyle";
import { useGetAllMeals } from "../../apollo/actions";
import { useState, useEffect } from "react";

const AllMeals = () => {
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
        <Text> ✎ Serving size: </Text>
        <Text>{data && data.mealsAll[current].serving_size}</Text>

        <Text>⋮⋮⋮  Calories : </Text>
        <Text>{data && data.mealsAll[current].calories}</Text>
      </Wrapper>
    </MainWrapper>
  );
};

export default AllMeals;
