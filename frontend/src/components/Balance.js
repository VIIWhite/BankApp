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

        // get username from local storage
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
                setError('Failed to fetch balance');
            } else if (error.request) {
                setError('No response received from server.');
            } else {
                setError('Error: ' + error.message);
            }
        }
    };

    // return (
    //     <div>
    //         <h2>Balance</h2>
    //         <button onClick={checkBalance}>Check Balance</button>
    //         {error && <p>{error}</p>}
    //         {balance !== null && <p>Your balance: {balance}</p>}
    //     </div>
    // );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '30vh' }}>
            <h2>Balance</h2>
            <button onClick={checkBalance}>Check Balance</button>
            {error && <p>{error}</p>}
            {balance !== null && <p>Your balance: {balance}</p>}
        </div>
    );
}

export default Balance;
