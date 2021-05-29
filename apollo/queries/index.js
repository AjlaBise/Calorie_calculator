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
      id
      food_id
      user_id
      serving_size
      calories
    }
  }
`;

export const CREATE_MEALS = gql`
  mutation CreateMeals(
    $serving_size: String
    $calories: String
    $user_id: User
    $food_id: Food
  ) {
    createMeals(
      input: {
        serving_size: $serving_size
        calories: $calories
        user_id: $user_id
        food_id: $food_id
      }
    ) {
      serving_size
      calories
      user_id
      food_id
    }
  }
`;

//FOOD------

export const GET_FOODS = gql`
  query Food {
    food {
      id
      name
      image
      serving_size
      calories
      proteins
      carbs
      fat
    }
  }
`;

export const CREATE_FOOD = gql`
  mutation CreateFood(
    $name: String
    $image: String
    $serving_size: String
    $calories: String
    $proteins: String
    $carbs: String
    $fat: String
  ) {
    createFood(
      input: {
        name: $name
        image: $image
        serving_size: $serving_size
        calories: $calories
        proteins: $proteins
        carbs: $carbs
        fat: $fat
      }
    ) {
      name
      serving_size
      calories
      proteins
      carbs
      fat
    }
  }
`;
