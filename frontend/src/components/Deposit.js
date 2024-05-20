import React, { useState } from 'react';
import axios from 'axios';

const Deposit = () => {
    const [username, setUsername] = useState('');
    const [amount, setAmount] = useState('');

    const handleDeposit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/deposit', {
                username,
                amount: parseFloat(amount)
            });
            alert(`Deposit successful. New balance: ${response.data}`);
        } catch (error) {
            alert('Deposit failed');
        }
    };

    return (
        <div>
            <h2>Deposit</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleDeposit}>Deposit</button>
        </div>
    );
};

export default Deposit;
