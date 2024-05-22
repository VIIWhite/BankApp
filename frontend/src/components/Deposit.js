import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Deposit() {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [balance, setBalance] = useState(null);

    const handleDeposit = async () => {
        if (!isAuthenticated) {
            alert('You need to log in first');
            navigate('/login');
            return;
        }

        // Get username from local storage
        const storedUsername = localStorage.getItem('username');
        if (!storedUsername) {
            alert('Username is not available');
            navigate('/login');
            return;
        }

        // Validate the deposit amount
        const depositAmount = parseFloat(amount);
        if (isNaN(depositAmount) || depositAmount <= 0) {
            setError('Please enter a valid amount greater than 0');
            setMessage('');
            setBalance(null);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/deposit', {
                username: storedUsername,
                amount: depositAmount
            });
            setMessage(`Deposit successful !`);
            setBalance(response.data.balance);
            setError('');
        } catch (error) {
            if (error.response) {
                setError('Failed to make deposit');
            } else if (error.request) {
                setError('No response received from server.');
            } else {
                setError('Error: ' + error.message);
            }
            setMessage('');
            setBalance(null);
        }
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '30vh' }}>
            <h2>Deposit</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
                <button onClick={handleDeposit} style={{ marginLeft: '10px' }}>Deposit</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p>{message}</p>}
            {balance !== null && <p>Your balance: {balance}</p>}
        </div>
    );
}

export default Deposit;
