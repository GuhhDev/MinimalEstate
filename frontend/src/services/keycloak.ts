import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: 'http://localhost:8180',
    realm: 'my-realm',
    clientId: 'frontend-client'
};

export const keycloak = new Keycloak(keycloakConfig);

export const initKeycloak = () => {
    return keycloak.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256'
    });
};
