import { Text, Div, Button } from "./UserCardStyle";
import { useDeleteUser } from "../../../apollo/actions";
import Redirect from "../../shared/Redirect";

function UserCard({ user }) {
  const [deleteUser] = useDeleteUser({ variables: { id: user.id } });
  return (
    <>
      <Text> 📧 {user.email}</Text>
      <Text> 💼 {user.role}</Text>

      <Div>
        <Button>✒️ Edit</Button>

        <Button onClick={() => deleteUser({ variables: { id: user.id } })}>
          ❌ Delete
        </Button>
        <Redirect to="/user" />
      </Div>
    </>
  );
}

export default UserCard;
