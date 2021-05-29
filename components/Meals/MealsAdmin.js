import { MainWrapper, Wrapper, Circle1, Circle2 } from "./MealsStyle";
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
      <Circle1 />
      <Circle2 />
      <Wrapper>
        <p>{data && data.mealsAll[current].id}</p>
        <p>{data && data.mealsAll[current].calories}</p>
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

export default AllMeals;
