import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate(); // Use the useNavigate hook here

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = { username, password };

        try {
            // Assuming axios.post(`http://localhost:8080/api/login`, user) is your login API call
            const response = await axios.post('http://localhost:8080/api/login', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // If login is successful, set the local storage and update login status
            localStorage.setItem('username', username);
            login();
            // Redirect to the account page upon successful login
            navigate('/account'); // This line redirects the user
        } catch (error) {
            // Handle your login errors appropriately here
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;