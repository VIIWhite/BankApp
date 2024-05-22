import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = { username, password };

        try {
            const response = await axios.post('http://localhost:8080/api/login', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Login successful!');
            console.log(response.data);
            localStorage.setItem('username', username); // 保存用户名到本地存储
            login(); // 更新登录状态
            setError('');
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                setError('Invalid username or password');
                alert('Login failed: Invalid username or password');
            } else if (error.request) {
                console.error('Error request:', error.request);
                setError('No response received from server.');
                alert('Login failed: No response received from server.');
            } else {
                console.error('Error', error.message);
                setError('Error: ' + error.message);
                alert('Login failed: ' + error.message);
            }
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
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Login;
