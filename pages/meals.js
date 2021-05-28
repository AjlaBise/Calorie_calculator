import withApollo from "../hoc/withApollo";
import withAuth from "../hoc/withAuth";

const meals = withAuth(() => {
  return (
    <div>
      <h1>MEALS PAGE</h1>
    </div>
  );
}, ["admin", "regular"]);

export default withApollo(meals);
