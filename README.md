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
- Maven

### Frontend
- React 18
- TypeScript
- Material-UI
- React Router
- Keycloak JS Adapter
- Vite

## Pré-requisitos

O único pré-requisito para executar o projeto é ter o Docker Desktop instalado:
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

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

5. Acesse as aplicações:
   - Frontend: http://localhost:5173
   - Keycloak Admin: http://localhost:8180
     - Usuário: admin
     - Senha: admin

6. Para encerrar os serviços:
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
│   └── pom.xml            # Dependências Maven
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

4. **Erro: Script do Keycloak falha**
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
