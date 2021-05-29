import { Text, Div, Button } from "./UserCardStyle";

function UserCard({ user }) {
  return (
    <>
      <Text> 📧 {user.email}</Text>
      <Text> 💼 {user.role}</Text>
      <Div>
        <Button>✒️  Edit</Button>
        <Button>❌  Delete</Button>
      </Div>
    </>
  );
}

export default UserCard;
