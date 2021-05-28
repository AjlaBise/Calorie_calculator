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

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut
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

//MEALS -----

export const GET_MEALS = gql`
  query Meals {
    meals {
      id,
      food_id,
      user_id,
      serving_size,
      calories,
    }
  }
`;
