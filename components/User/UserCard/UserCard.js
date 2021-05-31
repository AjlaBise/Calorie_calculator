import { Text, Div, Button } from "./UserCardStyle";
import { useDeleteUser } from "../../../apollo/actions";
import Redirect from '../../shared/Redirect';
import Link from 'next/link';

const AppLink = ({ children, className, href }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
);

function UserCard({ user }) {
  const [deleteUser] = useDeleteUser();
  return (
    <>
      <Text> 📧 {user.email}</Text>
      <Text> 💼 {user.role}</Text>
      <Div>
        <AppLink href={`/user/[id]/edit`}
        as={`/user/${user.id}/edit`}>
        <Button>✒️ Edit</Button>
        </AppLink>
        <Button onClick={() => deleteUser({ variables: { id: user.id } })}>
          ❌ Delete
        </Button>
        <Redirect to="/user"/>
      </Div>
    </>
  );
}

export default UserCard;
