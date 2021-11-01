import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


firebaseAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [errorReg, setErrorReg] = useState('')
    const [errorLogin, setErrorLogin] = useState('')
    const [errorForPass, setErrorForPass] = useState('')
    const [email, setEmail] = useState('')
    const [disName, setDisName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    // google loign function 
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    // get email and password 
    const getEmail = event => {
        setEmail(event.target.value);
    }
    const getPassword = event => {
        setPassword(event.target.value);
    }
    const getDisName = event => {
        setDisName(event.target.value);
    }

    // custom email and password loging system 
    const manualLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // create accoutn with email and password 
    const ManualRegister = () => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateProfileName = () => {
        updateProfile(auth.currentUser, {
            displayName: disName,
        })
    }

    // get the current sign in user and toogle login register button 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)

            } else {
                setUser('')
            }
            setIsLoading(false);
        });
    }, []);

    // forgate password 
    const forgatePass = () => {
        return sendPasswordResetEmail(auth, email)
    }

    // log out account 
    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false));
    }



    return {
        auth,
        user,
        disName,
        errorReg,
        errorLogin,
        errorForPass,
        isLoading,
        setIsLoading,
        setUser,
        setErrorReg,
        setErrorLogin,
        setErrorForPass,
        getEmail,
        manualLogin,
        getPassword,
        getDisName,
        googleLogin,
        ManualRegister,
        logOut,
        forgatePass,
        updateProfileName,
    }
}
export default useFirebase;