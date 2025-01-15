import React, { useState, useRef } from 'react';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    Avatar,
    IconButton,
    Grid,
    Divider,
    Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAuth } from '../contexts/AuthContext';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(1),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(16),
    height: theme.spacing(16),
    border: `3px solid ${theme.palette.primary.main}`,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
        opacity: 0.9,
    },
}));

const PhotoUploadButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    bottom: -theme.spacing(2),
    right: -theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export const Profile: React.FC = () => {
    const { username, updateProfile } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [displayName, setDisplayName] = useState(username || '');
    const [avatarUrl, setAvatarUrl] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateProfile({ displayName, avatarUrl });
            setIsEditing(false);
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
        }
    };

    return (
        <Container maxWidth="md">
            <StyledPaper elevation={0}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                            <Typography variant="h4" color="primary" fontWeight="500">
                                Meu Perfil
                            </Typography>
                            {!isEditing && (
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<EditIcon />}
                                    onClick={() => setIsEditing(true)}
                                >
                                    Editar Perfil
                                </Button>
                            )}
                        </Box>
                        <Divider />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box position="relative" display="flex" justifyContent="center">
                            <StyledAvatar
                                src={avatarUrl || undefined}
                                alt={displayName}
                                onClick={handleAvatarClick}
                            >
                                {!avatarUrl && displayName?.[0]?.toUpperCase()}
                            </StyledAvatar>
                            <PhotoUploadButton
                                size="small"
                                onClick={handleAvatarClick}
                            >
                                <PhotoCameraIcon />
                            </PhotoUploadButton>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                                style={{ display: 'none' }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField
                                    label="Nome de exibição"
                                    fullWidth
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    disabled={!isEditing}
                                    variant="outlined"
                                    InputProps={{
                                        sx: { backgroundColor: 'background.paper' }
                                    }}
                                />

                                <TextField
                                    label="Email"
                                    fullWidth
                                    value={username || ''}
                                    disabled
                                    variant="outlined"
                                    InputProps={{
                                        sx: { backgroundColor: 'action.hover' }
                                    }}
                                />

                                {isEditing && (
                                    <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
                                        <Button
                                            variant="outlined"
                                            color="inherit"
                                            onClick={() => setIsEditing(false)}
                                            startIcon={<CancelIcon />}
                                        >
                                            Cancelar
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            startIcon={<SaveIcon />}
                                        >
                                            Salvar
                                        </Button>
                                    </Box>
                                )}
                            </Stack>
                        </form>
                    </Grid>
                </Grid>
            </StyledPaper>
        </Container>
    );
};
