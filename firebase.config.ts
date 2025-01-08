import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your firebase config - add to firebase project new WEB project and copy config here.
  // IMPORTANT - add this to .gitignore fileasdf
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
