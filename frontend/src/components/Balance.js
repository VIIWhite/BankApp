import React, { useState } from 'react';
import axios from 'axios';

const Balance = () => {
    const [username, setUsername] = useState('');
    const [balance, setBalance] = useState(null);

    const handleCheckBalance = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/balance?username=${username}`);
            setBalance(response.data);
        } catch (error) {
            alert('Failed to fetch balance');
        }
    };

    return (
        <div>
            <h2>Check Balance</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleCheckBalance}>Check Balance</button>
            {balance !== null && <p>Balance: {balance}</p>}
        </div>
    );
};

export default Balance;
