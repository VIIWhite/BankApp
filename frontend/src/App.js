import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Balance from './components/Balance';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import './App.css'; // 确保引入 App.css 文件

function App() {
    return (
        <Router>
            <div>
                <h1>Online Banking Application</h1>
                <nav>
                    <ul>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/balance">Check Balance</Link></li>
                        <li><Link to="/deposit">Deposit</Link></li>
                        <li><Link to="/withdraw">Withdraw</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/balance" element={<Balance />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
