import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AccountPage from './components/AccountPage';
import AdminPage from './components/AdminPage'; // Import AdminPage component
import { AuthProvider } from './components/AuthContext';
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
            <Router>
                <div>
                    <h1>Online Banking Application</h1>
                    <nav>
                        <ul>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/account/:username" element={<AccountPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                    {/* show current protocol */}
                    <div style={{ position: 'fixed', bottom: '10px', right: '10px', padding: '10px', backgroundColor: '#f8f8f8', border: '1px solid #ccc' }}>
                        Current Protocol: {protocol}
                    </div>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
