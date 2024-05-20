import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Balance from './components/Balance';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

function App() {
  return (
      <div className="App">
        <h1>Online Banking Application</h1>
        <Register />
        <Login />
        <Balance />
        <Deposit />
        <Withdraw />
      </div>
  );
}

export default App;
