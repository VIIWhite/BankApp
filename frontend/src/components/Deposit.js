import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { BalanceContext } from './BalanceContext';
import { useNavigate } from 'react-router-dom';

function Deposit() {
    const { isAuthenticated } = useContext(AuthContext);
    const { balance, setBalance, operation, setOperation } = useContext(BalanceContext);
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleDeposit = async () => {
        if (!isAuthenticated) {
            alert('You need to log in first');
            navigate('/login');
            return;
        }

        setOperation('deposit');
        setMessage('');
        setError('');

        const storedUsername = localStorage.getItem('username');
        if (!storedUsername) {
            alert('Username is not available');
            navigate('/login');
            return;
        }

        const depositAmount = parseFloat(amount);
        const amountRegex = /^\d+(\.\d{1,2})?$/;

        if (!amountRegex.test(amount)) {
            setError('Please enter a valid amount with up to two decimal places');
            return;
        }

        if (isNaN(depositAmount) || depositAmount <= 0) {
            setError('Please enter a valid amount greater than 0');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/deposit', {
                username: storedUsername,
                amount: depositAmount
            });
            setMessage('Deposit successful!');
            setBalance(response.data.balance);
        } catch (error) {
            if (error.response) {
                setError('Failed to make deposit');
            } else if (error.request) {
                setError('No response received from server.');
            } else {
                setError('Error: ' + error.message);
            }
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
                    step="0.01"
                />
                <button onClick={handleDeposit} style={{ marginLeft: '10px' }}>Deposit</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {operation === 'deposit' && message && <p>{message}</p>}
            {operation === 'deposit' && balance !== null && <p>Your balance: {balance}</p>}
        </div>
    );
}

export default Deposit;
