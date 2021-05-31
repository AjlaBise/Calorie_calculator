import React from "react";
import EditAccount from "../../components/User/EditAccount";
import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { useLazyGetUser, useUpdateUser } from "../../apollo/actions";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const editAccount = () => {
  const router = useRouter();
  const id = router.query.id;
  const [updateUser, { error: updateUserError }] = useUpdateUser();
  const [user, setUser] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, { data, error: getUserError }] = useLazyGetUser();

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

  const onSubmit = async (data) => {
    console.log("id", id);
    if (id) {
      console.log("id", id);
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
  return (
    <div>
      {hasResponse && (
        <>{user && <EditAccount user={user} onSubmit={onSubmit} />}</>
      )}
    </div>
  );
};

export default withApollo(withAuth(editAccount, "regular"));
