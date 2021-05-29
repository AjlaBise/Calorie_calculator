import { Text, Div, Button } from "./UserCardStyle";
import { useDeleteUser } from "../../../apollo/actions";

function UserCard({ user }) {
  const [deleteUser] = useDeleteUser();
  return (
    <>
      <Text> 📧 {user.email}</Text>
      <Text> 💼 {user.role}</Text>
      <Div>
        <Button>✒️ Edit</Button>
        <Button onClick={() => deleteUser({ variables: { id: user.id } })}>
          ❌ Delete
        </Button>
      </Div>
    </>
  );
}

export default UserCard;
