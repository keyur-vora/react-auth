import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import the CSS file
import { auth, googleAuthProvider } from '../Fribese';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            let data = await signInWithPopup(auth, googleAuthProvider);
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <div className="container">
            <div className="card">
                <h2>Sign in With Google</h2>
                <button onClick={handleSubmit}>Sign In now . . .</button>
            </div>
        </div>
    );
}

export default Login;
