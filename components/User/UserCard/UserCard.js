import { Text, Div, Button } from "./UserCardStyle";
import { useDeleteUser, useUpdateUser } from "../../../apollo/actions";
import Redirect from "../../shared/Redirect";
import { useStyles } from "../../../styles/ModalStyles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useState } from "react";
import EditUser from "../formEdit/EditUser";

function UserCard({ user }) {
  const [deleteUser] = useDeleteUser();
  const [updateUser, { error }] = useUpdateUser();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    if (user._id) {
      console.log(user._id)
      try {
        if (data) {
          await updateUser({ variables: { id, ...data } });

          handleClose();
        }
      } catch {
        return;
      }
    }
  };

  const handleDeleteUser = () => {
    deleteUser({ variables: { id: user.id } });
  };
  return (
    <>
      <Text> 📧 {user.email}</Text>
      <Text> 💼 {user.role}</Text>

      <Div>
        <Button onClick={() => handleOpen()}>✒️ Edit</Button>
        <Button type="button" onClick={handleDeleteUser}> ❌ Delete </Button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <EditUser onSubmit={onSubmit} />

              <pre>
                {error &&
                  error.graphQLErrors.map(({ message }, i) => (
                    <Span key={i}>{message}</Span>
                  ))}
              </pre>
            </div>
          </Fade>
        </Modal>
      </Div>
    </>
  );
}

export default UserCard;
