import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [initialBalance, setInitialBalance] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/register', {
                username,
                password,
                initialBalance: parseFloat(initialBalance)
            });
            alert('Registration successful');
        } catch (error) {
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="number" placeholder="Initial Balance" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
