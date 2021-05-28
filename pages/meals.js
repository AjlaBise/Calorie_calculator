import withApollo from "../hoc/withApollo";
import withAuth from "../hoc/withAuth";
import MealsWrapper from '../components/Meals/MealsWrapper';

const meals = withAuth(() => {
  return (
    <div>
     <MealsWrapper/>
    </div>
  );
}, ["admin", "regular"]);

export default withApollo(meals);
