import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = { username, password };

        try {
            // Simulate an API call
            const response = await axios.post('http://localhost:8080/api/login', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem('username', username);
            login(username); // Pass the username to the login function

            navigate(`/account/${username}`); // Redirect to account page with username
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert("Invalid username or password. Please try again.");
                } else {
                    alert(`Login failed. Server responded with status code ${error.response.status}.`);
                }
            }
        }
    };

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
