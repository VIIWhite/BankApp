import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AccountPage from './components/AccountPage';
import AdminPage from './components/AdminPage';
import Balance from './components/Balance';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import { AuthProvider } from './components/AuthContext';
import { BalanceProvider } from './components/BalanceContext';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
    const [protocol, setProtocol] = useState('');

    useEffect(() => {
        // check current protocol
        const currentProtocol = window.location.protocol;
        setProtocol(currentProtocol);
    }, []);

    return (
        <AuthProvider>
            <BalanceProvider>
                <Router>
                    <div>
                        <h1>Online Banking Application</h1>
                        <nav>
                            <ul>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                {/*<li><Link to="/balance">Balance</Link></li>*/}
                                {/*<li><Link to="/deposit">Deposit</Link></li>*/}
                                {/*<li><Link to="/withdraw">Withdraw</Link></li>*/}
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/account/:username" element={<AccountPage />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/balance" element={
                                <ProtectedRoute>
                                    <Balance />
                                </ProtectedRoute>
                            } />
                            <Route path="/deposit" element={
                                <ProtectedRoute>
                                    <Deposit />
                                </ProtectedRoute>
                            } />
                            <Route path="/withdraw" element={
                                <ProtectedRoute>
                                    <Withdraw />
                                </ProtectedRoute>
                            } />
                        </Routes>
                        {/* show current protocol */}
                        <div style={{ position: 'fixed', bottom: '10px', right: '10px', padding: '10px', backgroundColor: '#f8f8f8', border: '1px solid #ccc' }}>
                            Current Protocol: {protocol}
                        </div>
                    </div>
                </Router>
            </BalanceProvider>
        </AuthProvider>
    );
}

export default App;
