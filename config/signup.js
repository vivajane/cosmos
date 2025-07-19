import { auth, db } from "../config/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const signUp = async (email, password, fullname) => {
  try {
    // Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data in Firestore under 'users' collection
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { email, fullname }); // await is important here

    return user;
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error; // rethrow if needed in UI
  }
};

export default signUp;
