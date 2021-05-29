import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";
import { useGetAllUsers } from "../../apollo/actions";
import { useState, useEffect } from "react";
import UserWrapper from "../../components/User/UserWrapper";

function AllUsers() {
    return (
        <div>
           <UserWrapper/>
        </div>
    )
}

export default withApollo(withAuth(AllUsers,"admin"));