import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { SIGN_IN, SIGN_UP, SIGN_OUT, GET_USER } from "../queries/index";

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
