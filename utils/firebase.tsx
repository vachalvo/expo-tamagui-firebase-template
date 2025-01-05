import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  deleteUser,
} from "firebase/auth";
import { auth } from "../firebase.config";

export const Firebase = {
  signUp: async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  },
  signIn: async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password);
  },
  logOut: async () => {
    return await auth.signOut();
  },
  updatePassword: async (password: string) => {
    const currentUser = auth.currentUser;

    if (currentUser === null) {
      throw new Error("No user is signed in");
    }

    return await updatePassword(currentUser, password);
  },
  deleteUser: async () => {
    const currentUser = auth.currentUser;

    if (currentUser === null) {
      throw new Error("No user is signed in");
    }

    return await deleteUser(currentUser);
  },
  getCurrentUser: () => {
    return auth.currentUser;
  },
};

export default Firebase;
