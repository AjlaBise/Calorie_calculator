import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { useGetAllUsers } from "../../apollo/actions";
import UserCard from "./UserCard/UserCard";
import { Wrapper, Card } from "./UserWrapperStyle";

function AllUsers() {
  const { data } = useGetAllUsers();
  const users = (data && data.users) || [];

  return (
    <Wrapper>
      {users.map((user) => {
        return (
          <Card key={user._id}>
            <UserCard user={user} />
          </Card>
        );
      })}
    </Wrapper>
  );
}

export default withApollo(withAuth(AllUsers, "admin"));
