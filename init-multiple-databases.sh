#!/bin/bash

set -e

# Create keycloak database
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE keycloak;
    GRANT ALL PRIVILEGES ON DATABASE keycloak TO postgres;
EOSQL

# Create userdb database (if it doesn't exist)
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    SELECT 'CREATE DATABASE userdb'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'userdb')\gexec
    GRANT ALL PRIVILEGES ON DATABASE userdb TO postgres;
EOSQL
