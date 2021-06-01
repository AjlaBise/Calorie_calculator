import {
  MainWrapper,
  Wrapper,
  Circle1,
  Circle2,
  Button,
  Text,
  DIV,
} from "./MealsStyle";
import { useGetMeals } from "../../apollo/actions";
import { useState, useEffect } from "react";

const MealsWrapper = ({ user }) => {
  const { data } = useGetMeals({ variables: { id: user._id } });
  const [current, setCurrent] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrevious, setDisabledPrevious] = useState(true);

  const handlePrevious = () => {
    if (current >= 1) {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current < data.meals.length - 1) {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    current === 0 ? setDisabledPrevious(true) : setDisabledPrevious(false);
    current === (data && data.meals.length)
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
          <Text> 📧 {user.email} 📧 </Text>
          <Text>
            🍱 Serving size: {data && data.meals[current].serving_size}
          </Text>
          <Text>⚖️ Calories : {data && data.meals[current].calories}</Text>
        </DIV>
      </Wrapper>
    </MainWrapper>
  );
};

export default MealsWrapper;
