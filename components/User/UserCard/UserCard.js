import { Text, Div, Button } from "./UserCardStyle";
import { useDeleteUser, useUpdateUser } from "../../../apollo/actions";
import Redirect from "../../shared/Redirect";
import { useStyles } from "../../../styles/ModalStyles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useState } from "react";
import EditUser from "../EditAccount/index";

function UserCard({ id,email, role }) {
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
    console.log("id", id);
    if (id) {
      console.log("id",id);
      try {
        if (data) {
          await updateUser({ variables: { id, ...data } });
          toast.success("User has been updated", { autoClose: 2000 });
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
      <Text> 📧 {email}</Text>
      <Text> 💼 {role}</Text>

      <Div>
        <Button onClick={() => handleOpen()}>✒️ Edit</Button>
        <Button type="button" onClick={handleDeleteUser}>❌ Delete</Button>

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
              <EditUser onSubmit={onSubmit} />
          </Fade>
        </Modal>
      </Div>
    </>
  );
}

export default UserCard;
