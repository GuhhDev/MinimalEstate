# Sistema de Gestão Imobiliária

Sistema web completo para gestão imobiliária com autenticação Keycloak, backend Spring Boot e frontend React.

## 🚀 Tecnologias

### Backend
- Java 17
- Spring Boot 3.x
- Spring Security
- Spring Data JPA
- PostgreSQL
- Keycloak 22.x
- Maven

### Frontend
- React 18
- TypeScript
- Material-UI
- React Router
- Keycloak JS Adapter
- Vite

## 📋 Pré-requisitos

- Java 17+
- Node.js 18+
- PostgreSQL 14+
- Docker (para Keycloak)
- Maven 3.8+

## 🔧 Configuração

### 1. Keycloak

```bash
# Inicie o Keycloak via Docker
docker run -p 8180:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:22.0.1 start-dev
```

Acesse http://localhost:8180 e configure:

1. Crie um realm chamado "my-realm"
2. Crie um cliente chamado "frontend-client":
   - Access Type: public
   - Valid Redirect URIs: http://localhost:5173/*
   - Web Origins: http://localhost:5173

### 2. Backend

1. Configure o banco de dados PostgreSQL:
```sql
CREATE DATABASE imobiliaria;
```

2. Configure o arquivo `backend/src/main/resources/application.yml`:
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/imobiliaria
    username: seu_usuario
    password: sua_senha
```

3. Execute o backend:
```bash
cd backend
mvn spring-boot:run
```

### 3. Frontend

1. Crie o arquivo `.env` na pasta `frontend`:
```env
VITE_KEYCLOAK_URL=http://localhost:8180
VITE_KEYCLOAK_REALM=my-realm
VITE_KEYCLOAK_CLIENT_ID=frontend-client
VITE_API_URL=http://localhost:8081
VITE_APP_URL=http://localhost:5173
```

2. Instale as dependências e execute:
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Acessando o Sistema

1. Frontend: http://localhost:5173
2. Backend: http://localhost:8081
3. Keycloak: http://localhost:8180

## 🔐 Autenticação

O sistema usa Keycloak para autenticação:

1. Acesse o Keycloak Admin Console (http://localhost:8180)
2. Login: admin / Password: admin
3. Crie usuários em Realm Settings > Users

## 📦 Estrutura do Projeto

```
.
├── backend/                 # Projeto Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/      # Código fonte Java
│   │   │   └── resources/ # Configurações
│   │   └── test/          # Testes
│   └── pom.xml            # Dependências Maven
│
└── frontend/               # Projeto React
    ├── src/
    │   ├── components/    # Componentes React
    │   ├── pages/        # Páginas da aplicação
    │   ├── contexts/     # Contextos React
    │   ├── services/     # Serviços e APIs
    │   └── config/       # Configurações
    ├── package.json      # Dependências NPM
    └── vite.config.ts    # Configuração Vite
```

## 🛠️ Principais Funcionalidades

- Autenticação segura com Keycloak
- Gestão de perfil de usuário
- Upload de fotos de perfil
- Cadastro e gestão de imóveis
- Interface responsiva e moderna
- Proteção de rotas
- Integração completa frontend-backend

## 📝 Desenvolvimento

Para adicionar novas funcionalidades:

1. Backend: Crie novos controllers em `backend/src/main/java/.../controllers`
2. Frontend: Adicione componentes em `frontend/src/components`
3. Rotas: Configure em `frontend/src/App.tsx`

## ⚙️ Variáveis de Ambiente

### Backend (application.yml)
- `KEYCLOAK_URL`
- `KEYCLOAK_REALM`
- `KEYCLOAK_CLIENT_ID`
- `KEYCLOAK_CLIENT_SECRET`
- `DATABASE_URL`
- `DATABASE_USERNAME`
- `DATABASE_PASSWORD`

### Frontend (.env)
- `VITE_KEYCLOAK_URL`
- `VITE_KEYCLOAK_REALM`
- `VITE_KEYCLOAK_CLIENT_ID`
- `VITE_API_URL`
- `VITE_APP_URL`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
