import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import MealsWrapper from "../../components/Meals/MealsWrapper";
import MealsAdmin from "../../components/Meals/MealsAdmin";
import { useLazyGetUser } from "../../apollo/actions";
import { useState, useEffect } from "react";

const meals = withAuth(() => {
  const [user, setUser] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, { data, error }] = useLazyGetUser();

  useEffect(() => {
    getUser();
  }, []);

  if (data) {
    if (data.user && !user) {
      setUser(data.user);
    }
    if (!data.user && user) {
      setUser(data.user);
    }
    if (!hasResponse) {
      setHasResponse(true);
    }
  }
  return (
    <div>
      {hasResponse && (
        <>
          {user && (
            <div>
              {user && user.role === "admin" && <MealsAdmin />}
              {user && user.role === "regular" && <MealsWrapper user={user} />}
            </div>
          )}
        </>
      )}
    </div>
  );
}, ["admin", "regular"]);

export default withApollo(meals);
