# Sistema de Gestão Imobiliária

Sistema web completo para gestão imobiliária com autenticação Keycloak, backend Spring Boot e frontend React.

## Tecnologias

### Backend
- Java 17
- Spring Boot 3.x
- Spring Security
- Spring Data JPA
- PostgreSQL
- Keycloak 22.x
- Gradle

### Frontend
- React 18
- TypeScript
- Material-UI
- React Router
- Keycloak JS Adapter
- Vite

## Pré-requisitos

1. [Docker Desktop](https://www.docker.com/products/docker-desktop)

2. Java Development Kit (JDK) 17:
   - Baixe e instale o [Eclipse Temurin JDK 17](https://adoptium.net/temurin/releases/?version=17)
   - Configure a variável de ambiente JAVA_HOME:
     ```bash
     # No Windows (PowerShell Admin):
     setx JAVA_HOME "C:\Program Files\Eclipse Adoptium\jdk-17.x.x.x-hotspot" /M
     setx PATH "%PATH%;%JAVA_HOME%\bin" /M
     
     # Verifique a instalação:
     java -version
     echo %JAVA_HOME%
     ```

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sistema-imobiliario.git
   cd sistema-imobiliario
   ```

2. Inicie os serviços:
   ```bash
   docker-compose up -d
   ```

3. Configure o Keycloak:
   ```bash
   cd scripts
   powershell -ExecutionPolicy Bypass -File configure-keycloak.ps1
   cd ..
   ```

4. Aguarde alguns minutos até todos os serviços iniciarem
   - O processo pode ser mais demorado na primeira execução

5. Configure e inicie o backend:
   ```bash
   cd backend
   
   # Configure o application.yml
   echo "spring:
     datasource:
       url: jdbc:postgresql://localhost:5432/userdb
       username: postgres
       password: postgres
     jpa:
       hibernate:
         ddl-auto: update
     security:
       oauth2:
         resourceserver:
           jwt:
             issuer-uri: http://localhost:8180/realms/my-realm
   
   server:
     port: 8081" > src/main/resources/application.yml
   
   # Execute o backend # pode demorar alguns minutos na primeira execução
   # Para Windows:
   ./gradlew.bat bootRun --info --stacktrace  # Aguarde até ver "Started ImobiliariaApplication in X seconds"
                                             # A aplicação continuará rodando (não feche o terminal)
   
   # Para Linux/Mac:
   ./gradlew bootRun --info --stacktrace
   
   # Abra um novo terminal para os próximos comandos, mantenha este rodando
   ```

6. Configure e inicie o frontend:
   ```bash
   cd frontend
   npm install
   
   # Crie o arquivo .env com as configurações
   echo "VITE_KEYCLOAK_URL=http://localhost:8180
   VITE_KEYCLOAK_REALM=my-realm
   VITE_KEYCLOAK_CLIENT_ID=frontend-client
   VITE_API_URL=http://localhost:8081
   VITE_APP_URL=http://localhost:5173" > .env
   
   # Inicie o frontend
   npm run dev
   ```

7. Acesse as aplicações:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:8081
   - Keycloak Admin: http://localhost:8180
     - Usuário: admin
     - Senha: admin

8. Para encerrar os serviços:
   ```bash
   docker-compose down
   ```

## Estrutura do Projeto

```
.
├── backend/                 # Projeto Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/      # Código fonte Java
│   │   │   └── resources/ # Configurações
│   │   └── test/          # Testes
│   └── build.gradle        # Dependências Gradle
│
├── frontend/               # Projeto React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── contexts/     # Contextos React
│   │   ├── services/     # Serviços e APIs
│   │   └── config/       # Configurações
│   ├── package.json      # Dependências NPM
│   └── vite.config.ts    # Configuração Vite
│
├── scripts/               # Scripts de automação
│   ├── configure-keycloak.ps1  # Configuração do Keycloak
│   └── start.bat              # Script de inicialização do projeto
│
├── init-multiple-databases.sh  # Script de inicialização dos bancos
└── docker-compose.yml         # Configuração dos containers

```

## Principais Funcionalidades

- Autenticação segura com Keycloak
- Gestão de perfil de usuário
- Upload de fotos de perfil
- Cadastro e gestão de imóveis
- Interface responsiva e moderna
- Proteção de rotas
- Integração completa frontend-backend

## Solução de Problemas

1. **Erro: Docker não encontrado**
   - Certifique-se de que o Docker Desktop está instalado
   - Reinicie o computador após a instalação

2. **Erro: Portas em uso**
   - Verifique se as portas 5173, 8180 e 5432 estão livres
   - Encerre aplicações que possam estar usando essas portas

3. **Erro: Serviços não iniciam**
   - Verifique se o Docker Desktop está em execução
   - Tente reiniciar o Docker Desktop

4. **Erro: Gradle não executa**
   - Verifique se o Java está instalado: `java -version`
   - Verifique se JAVA_HOME está configurado: `echo %JAVA_HOME%`
   - Certifique-se que está usando Java 17
   - Tente executar: `java -version` para confirmar que o Java está no PATH

5. **Tempo de Execução**
   - Primeira execução do Gradle: 5-10 minutos (download de dependências)
   - Execuções posteriores: 15-30 segundos
   - Se demorar mais que isso, verifique:
     - Conexão com a internet (para download das dependências)
     - Se o Docker está consumindo muita memória
     - Se há outros processos pesados rodando

6. **Erro: Script do Keycloak falha**
   - Verifique se o PowerShell está instalado
   - Aguarde alguns segundos e tente novamente, pois o Keycloak pode ainda estar iniciando

## Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
