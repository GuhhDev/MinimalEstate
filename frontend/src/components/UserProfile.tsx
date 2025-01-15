import React from 'react';
import { Button, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export const UserProfile: React.FC = () => {
    const { isAuthenticated, login, logout, displayName, avatarUrl } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        navigate('/profile');
        handleClose();
    };

    const handleLogout = () => {
        logout();
        handleClose();
    };

    if (!isAuthenticated) {
        return (
            <Button
                variant="outlined"
                color="primary"
                onClick={login}
                size="small"
                sx={{
                    borderRadius: 20,
                    textTransform: 'none',
                    minWidth: 100
                }}
            >
                Entrar
            </Button>
        );
    }

    return (
        <>
            <IconButton
                onClick={handleMenu}
                size="small"
                sx={{ padding: 0 }}
            >
                <Avatar
                    src={avatarUrl || undefined}
                    alt={displayName || ''}
                    sx={{
                        width: 32,
                        height: 32,
                        border: '2px solid',
                        borderColor: 'primary.main'
                    }}
                >
                    {!avatarUrl && displayName?.[0]?.toUpperCase()}
                </Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    elevation: 2,
                    sx: {
                        minWidth: 150,
                        mt: 1
                    }
                }}
            >
                <MenuItem onClick={handleProfile}>
                    Meu Perfil
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    Sair
                </MenuItem>
            </Menu>
        </>
    );
};
