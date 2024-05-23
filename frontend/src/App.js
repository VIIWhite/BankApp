import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AccountPage from './components/AccountPage';
import AdminPage from './components/AdminPage'; // Import AdminPage component
import { AuthProvider } from './components/AuthContext';
import './App.css';

function App() {
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
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
