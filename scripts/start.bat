@echo off
echo Iniciando os servicos do projeto...

REM Verifica se o Docker esta instalado
docker --version > nul 2>&1
if %errorlevel% neq 0 (
    echo Docker nao encontrado! Por favor, instale o Docker Desktop primeiro.
    echo Download: https://www.docker.com/products/docker-desktop
    pause
    exit /b 1
)

REM Verifica se o Docker esta rodando
docker info > nul 2>&1
if %errorlevel% neq 0 (
    echo Por favor, inicie o Docker Desktop primeiro!
    pause
    exit /b 1
)

echo Iniciando os containers...
cd ..
docker-compose up -d

echo Aguardando os servicos iniciarem...
timeout /t 30 /nobreak

echo Configurando o Keycloak...
powershell -ExecutionPolicy Bypass -File scripts\configure-keycloak.ps1

echo.
echo Servicos iniciados com sucesso!
echo.
echo Acesse:
echo Frontend: http://localhost:5173
echo Keycloak: http://localhost:8180
echo.
echo Pressione qualquer tecla para encerrar os servicos...
pause

echo Encerrando os servicos...
docker-compose down

echo Pronto! Todos os servicos foram encerrados.
