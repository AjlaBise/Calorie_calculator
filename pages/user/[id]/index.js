import withApollo from '../../../hoc/withApollo';
import withAuth from '../../../hoc/withAuth';
import {useGetUserById} from '../../../apollo/queries';

const UserDetail = ({query}) =>{
    const {data} = useGetUserById({variables: {id: query.id}})
    const user = data && data.userById || {};

    return (<>
    <h1>{user.email}</h1>
    <h1>{user.role}</h1>
    
    </>)
}

export default withApollo(withAuth(UserDetail,"admin"));