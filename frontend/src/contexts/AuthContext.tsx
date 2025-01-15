import React, { createContext, useContext, useEffect, useState } from 'react';
import { keycloak } from '../config/keycloak';

interface AuthContextType {
    isAuthenticated: boolean;
    token: string | null;
    username: string | null;
    displayName: string | null;
    avatarUrl: string | null;
    login: () => void;
    logout: () => void;
    updateProfile: (profile: { displayName?: string; avatarUrl?: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    token: null,
    username: null,
    displayName: null,
    avatarUrl: null,
    login: () => {},
    logout: () => {},
    updateProfile: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [displayName, setDisplayName] = useState<string | null>(null);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    const updateToken = () => {
        if (keycloak.authenticated && keycloak.token) {
            setToken(keycloak.token);
            setUsername(keycloak.tokenParsed?.preferred_username || null);
            setDisplayName(keycloak.tokenParsed?.name || keycloak.tokenParsed?.preferred_username || null);
            setAvatarUrl(localStorage.getItem(`avatar_${keycloak.subject}`) || null);
            setIsAuthenticated(true);
        } else {
            setToken(null);
            setUsername(null);
            setDisplayName(null);
            setAvatarUrl(null);
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        keycloak.init({
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            pkceMethod: 'S256'
        })
        .then(() => {
            updateToken();
            
            keycloak.onTokenExpired = () => {
                keycloak.updateToken(70)
                    .then(updateToken)
                    .catch(console.error);
            };

            keycloak.onAuthSuccess = updateToken;
            keycloak.onAuthError = () => setIsAuthenticated(false);
            keycloak.onAuthLogout = () => setIsAuthenticated(false);
        })
        .catch(console.error);
    }, []);

    const login = () => {
        keycloak.login();
    };

    const logout = () => {
        keycloak.logout({ redirectUri: window.location.origin });
    };

    const updateProfile = async (profile: { displayName?: string; avatarUrl?: string }) => {
        if (!keycloak.subject) return;

        if (profile.displayName) {
            setDisplayName(profile.displayName);
            // Aqui você pode adicionar uma chamada à API para salvar o displayName
        }

        if (profile.avatarUrl) {
            setAvatarUrl(profile.avatarUrl);
            localStorage.setItem(`avatar_${keycloak.subject}`, profile.avatarUrl);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                token,
                username,
                displayName,
                avatarUrl,
                login,
                logout,
                updateProfile
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
