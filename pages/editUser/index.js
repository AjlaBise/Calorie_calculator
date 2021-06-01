import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { useGetAllUsers } from "../../apollo/actions";
import UserCard from "../../components/User/UserCard/UserCard";
import { Wrapper, Card } from "../../styles/UserWrapperStyle";

const AllUsers = () => {
  const { data } = useGetAllUsers();
  const users = (data && data.users) || [];

  return (
    <div>
      <Wrapper>
        {users.map((user) => {
          return (
            <Card>
              <UserCard key={user._id} id={user._id}
              email={user.email}
              role={user.role} />
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default withApollo(withAuth(AllUsers, ["admin"]));
