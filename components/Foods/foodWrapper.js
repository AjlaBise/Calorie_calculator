import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { WrapperMain, ButtonAdd, DivFood } from "./foodWrapperStyle";
import { useGetFoods } from "../../apollo/actions";
import FoodCard from "./FoodCard/foodCard";
import Link from "next/link";

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

const FoodWrapper = (props) => {
  const { data } = useGetFoods();
  const foods = (data && data.food) || [];

  return (
    <WrapperMain>
      <AppLink href="/food/new">
        <ButtonAdd>Add new food</ButtonAdd>
      </AppLink>
      <DivFood>
        {foods.map((food) => {
          return <FoodCard food={food} setMeal={props.setMeal} />;
        })}
      </DivFood>
    </WrapperMain>
  );
};

export default withApollo(withAuth(FoodWrapper, ["admin", "regular"]));
