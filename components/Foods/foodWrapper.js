import withApollo from "../../hoc/withApollo";
import { WrapperMain } from "./foodWrapperStyle";
import { useGetFoods } from "../../apollo/actions";
import FoodCard from "./FoodCard/foodCard";
import Link from "next/link";

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

const FoodWrapper = () => {
  const { data } = useGetFoods();
  const foods = (data && data.food) || [];

  return (
    <WrapperMain>

      <AppLink href="/food/new">
        <button>Add new food</button>
      </AppLink>

      {foods.map((food) => {
        return (
          <div key={food._id}>
            <FoodCard food={food} />
          </div>
        );
      })}
      
    </WrapperMain>
  );
};

export default withApollo(FoodWrapper);
