import React from 'react';
import { Button } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

export const LoginButton: React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();

    return (
        <Button 
            variant="contained" 
            color={isAuthenticated ? "secondary" : "primary"}
            onClick={() => isAuthenticated ? logout() : login()}
        >
            {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
    );
};
