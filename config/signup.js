import {db, auth} from '../config/firebase'
import {doc, setDoc} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from "firebase/auth";

const signup = async (email, password){
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
        email: user.email,
        uid: user.uid,
    });
    return user;
    
}