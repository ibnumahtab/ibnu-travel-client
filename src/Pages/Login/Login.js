import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

// login page

const Login = () => {
    const { setUser, setErrorLogin, setIsLoading, googleLogin } = useAuth();

    // redirect location after login
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    // google login
    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
                history.push(redirect_url);
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorLogin(errorMessage);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div>
            <div className="border shadow rounded w-3/5 my-24 p-10 mx-auto">
                <button
                    onClick={handelGoogleLogin}
                    className="bg-indigo-700 hover:bg-indigo-800 text-white w-full py-16 px-3 shadow text-5xl font-medium uppercase"
                >
                    Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
