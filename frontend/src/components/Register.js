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
    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = { username, fullName, password, initialBalance, email, phoneNumber, age, gender };

        try {
            const response = await axios.post('http://localhost:8080/api/register', user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('Registration successful!');
            console.log(response.data);
            setErrors({});
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                if (error.response.data instanceof Object) {
                    setErrors(error.response.data);
                } else {
                    alert('Registration failed: ' + error.response.data);
                }
            } else if (error.request) {
                console.error('Error request:', error.request);
                alert('No response received from server.');
            } else {
                console.error('Error', error.message);
                alert('Error: ' + error.message);
            }
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label>Full Name: </label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    {errors.fullName && <p>{errors.fullName}</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <label>Initial Balance: </label>
                    <input type="text" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} required />
                    {errors.initialBalance && <p>{errors.initialBalance}</p>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Phone Number: </label>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                </div>
                <div>
                    <label>Age: </label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                    {errors.age && <p>{errors.age}</p>}
                </div>
                <div>
                    <label>Gender: </label>
                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                    {errors.gender && <p>{errors.gender}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
