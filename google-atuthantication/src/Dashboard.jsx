import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import the CSS file
import { auth } from '../Fribese';

const Dashboard = () => {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await signOut(auth);
            alert('Logged out successfully');
            navigate('/');
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <div className="container">
            <div className="card">
                <h2>Dashboard</h2>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default Dashboard;
