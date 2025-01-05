import { useCallback } from "react";
import Firebase from "../utils/firebase";

const useAuth = () => {
  const signUp = useCallback(async (email: string, password: string) => {
    const user = await Firebase.signUp(email, password);
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const user = await Firebase.signIn(email, password);
  }, []);

  return { signUp, signIn };
};

export default useAuth;
