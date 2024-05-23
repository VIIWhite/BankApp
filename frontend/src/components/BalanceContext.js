// BalanceContext.js
import React, { createContext, useState } from 'react';

export const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
    const [balance, setBalance] = useState(null);
    const [operation, setOperation] = useState('');

    return (
        <BalanceContext.Provider value={{ balance, setBalance, operation, setOperation }}>
            {children}
        </BalanceContext.Provider>
    );
};
