// frontend/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [initialBalance, setInitialBalance] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { username, fullName, password, initialBalance, email, phoneNumber, age, gender };
        axios.post('http://localhost:8080/api/register', user)
            .then(response => {
                console.log(response.data);
                alert("Registration successful!");
            })
            .catch(error => {
                console.error("There was an error registering!", error);
            });
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Full Name: </label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Initial Balance: </label>
                    <input type="text" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} required />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Phone Number: </label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div>
                <div>
                    <label>Age: </label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Gender: </label>
                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
