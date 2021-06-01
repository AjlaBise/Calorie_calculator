import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  GET_USER,
  GET_USER_BY_ID,
  GET_ALL_USERS,
  UPDATE_USER,
  DELETE_USER,
  GET_MEALS,
  GET_ALL_MEALS,
  CREATE_MEALS,
  GET_FOODS,
  CREATE_FOOD,
} from "../queries/index";

//Auth action start -------------------------

export const useSignUp = () =>
  useMutation(SIGN_UP, {
    update(cache, { data: { signIn: signedInUser } }) {
      cache.writeQuery({
        query: GET_USER,
        data: { user: signedInUser },
      });
    },
  });

export const useSignIn = () =>
  useMutation(SIGN_IN, {
    update(cache, { data: { signIn: signedInUser } }) {
      cache.writeQuery({
        query: GET_USER,
        data: { user: signedInUser },
      });
    },
  });

export const useSignOut = () => useMutation(SIGN_OUT);
export const useLazyGetUser = () => useLazyQuery(GET_USER);
export const useGetUser = () => useQuery(GET_USER);
export const useGetUserById = (options) => useQuery(GET_USER_BY_ID, options);
export const useGetAllUsers = () => useQuery(GET_ALL_USERS);
export const useUpdateUser = () => useMutation(UPDATE_USER);

export const useDeleteUser = () =>
  useMutation(DELETE_USER, {
    update(cache, { data: { deleteUser } }) {
      const { users } = cache.readQuery({
        query: GET_ALL_USERS,
      });

      const newUSers = users.filter((user) => user.id !== deleteUser);
      cache.writeQuery({
        query: GET_ALL_USERS,
        data: { users: newUSers },
      });
    },
  });

//Auth action END -------------------------

//FOOD START

export const useGetFoods = () => useQuery(GET_FOODS);

export const useCreateFood = () =>
  useMutation(CREATE_FOOD, {
    update(cache, { data: { createFood } }) {
      const { foods } = cache.readQuery({ query: GET_FOODS });
      cache.writeQuery({
        query: GET_FOODS,
        data: { foods: [...foods, createFood] },
      });
    },
  });

//FOOD END

//MEALS START---
export const useGetAllMeals = () => useQuery(GET_ALL_MEALS);
export const useGetMeals = (options) => useQuery(GET_MEALS, options);

export const useCreateMeals = () =>
  useMutation(CREATE_MEALS, {
    update(cache, { data: { createMeals } }) {
      const { meals } = cache.readQuery({ query: GET_MEALS });
      cache.writeQuery({
        query: CREATE_MEALS,
        data: { meals: [...meals, createMeals] },
      });
    },
  });

//MEALS END---
