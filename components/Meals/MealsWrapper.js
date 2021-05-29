import { MainWrapper, Wrapper, Circle1, Circle2 } from "./MealsStyle";
import { useGetMeals } from "../../apollo/actions";
import { useState, useEffect } from "react";

const MealsWrapper = () => {
  const { data } = useGetMeals();
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
      <Circle1 />
      <Circle2 />
      <Wrapper>
        <p>{data && data.meals[current].id}</p>
        <p>{data && data.meals[current].calories}</p>
        <button onClick={handlePrevious} disabled={disabledPrevious}>
          lijevo
        </button>

        <button onClick={handleNext} disabled={disabledNext}>
          desno
        </button>
      </Wrapper>
    </MainWrapper>
  );
};

export default MealsWrapper;
