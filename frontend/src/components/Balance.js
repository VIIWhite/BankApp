// frontend/src/components/Balance.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Balance() {
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState('');

    const checkBalance = async () => {
        if (!isAuthenticated) {
            alert('You need to log in first');
            navigate('/login');
            return;
        }

        // get username from local
        const storedUsername = localStorage.getItem('username');
        if (!storedUsername) {
            alert('Username is not available');
            navigate('/login');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8080/api/balance?username=${storedUsername}`);
            setBalance(response.data);
            setError('');
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                setError('Failed to fetch balance');
            } else if (error.request) {
                console.error('Error request:', error.request);
                setError('No response received from server.');
            } else {
                console.error('Error', error.message);
                setError('Error: ' + error.message);
            }
        }
    };

    return (
        <div>
            <h2>Balance</h2>
            <button onClick={checkBalance}>Check Balance</button>
            {error && <p>{error}</p>}
            {balance !== null && <p>Your balance: {balance}</p>}
        </div>
    );
}

export default Balance;
