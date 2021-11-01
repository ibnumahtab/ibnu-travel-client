import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default firebaseAuthentication;