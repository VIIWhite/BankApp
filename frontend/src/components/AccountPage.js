import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Balance from './Balance';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import '../AccountPage.css'; // Import CSS for styling

function AccountPage() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <div className="header">
                <h2>Account Management</h2>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
            <div className="account-actions">
                <Balance />
                <Deposit />
                <Withdraw />
            </div>
        </div>
    );
}

export default AccountPage;