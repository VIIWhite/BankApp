import React, { useState } from 'react';
import axios from 'axios';

const Withdraw = () => {
    const [username, setUsername] = useState('');
    const [amount, setAmount] = useState('');

    const handleWithdraw = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/withdraw', {
                username,
                amount: parseFloat(amount)
            });
            alert(`Withdraw successful. New balance: ${response.data}`);
        } catch (error) {
            alert('Withdraw failed');
        }
    };

    return (
        <div>
            <h2>Withdraw</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
};

export default Withdraw;
