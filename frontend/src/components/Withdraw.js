import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Withdraw() {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [balance, setBalance] = useState(null);

    const handleWithdraw = async () => {
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

        // Validate the withdrawal amount
        const withdrawAmount = parseFloat(amount);
        const amountRegex = /^\d+(\.\d{1,2})?$/;

        if (!amountRegex.test(amount)) {
            setError('Please enter a valid amount with up to two decimal places');
            setMessage('');
            setBalance(null);
            return;
        }

        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            setError('Please enter a valid amount greater than 0');
            setMessage('');
            setBalance(null);
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/withdraw', {
                username: storedUsername,
                amount: withdrawAmount
            });
            setMessage(`Withdrawal successful!`);
            setBalance(response.data.balance);
            setError('');
        } catch (error) {
            if (error.response && error.response.data === 'Insufficient balance') {
                setError('Withdrawal failed: Insufficient balance');
            } else if (error.response) {
                setError('Failed to make withdrawal');
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
            <h2>Withdraw</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    step="0.01"
                />
                <button onClick={handleWithdraw} style={{ marginLeft: '10px' }}>Withdraw</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p>{message}</p>}
            {balance !== null && <p>Your balance: {balance}</p>}
        </div>
    );
}

export default Withdraw;
