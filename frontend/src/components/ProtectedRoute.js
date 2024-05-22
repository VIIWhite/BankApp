import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        // User is not authenticated, redirect to login page
        return <Navigate to="/login" />;
    }

    // User is authenticated, render the children components
    return children;
}

export default ProtectedRoute;