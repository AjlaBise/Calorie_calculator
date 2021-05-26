import { gql } from "apollo-boost";

//Auth queries start ----
export const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!) {
    signUp(input: { email: $email, password: $password })
  }
`;
export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      id
      email
      password
      role
    }
  }
`;

//Auth queries end ----

//USER--------
export const GET_USER = gql`
  query User {
    user {
      id
      email
      role
    }
  }
`;
