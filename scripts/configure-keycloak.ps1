$KEYCLOAK_URL = "http://localhost:8180"
$REALM = "my-realm"
$CLIENT = "frontend-client"
$ADMIN_USER = "admin"
$ADMIN_PASSWORD = "admin"

# Function to wait for Keycloak to be ready
function Wait-ForKeycloak {
    Write-Host "Waiting for Keycloak to be ready..."
    do {
        try {
            $response = Invoke-WebRequest -Uri $KEYCLOAK_URL -Method Get -UseBasicParsing
            if ($response.StatusCode -eq 200) {
                break
            }
        }
        catch {
            Write-Host "Still waiting..."
            Start-Sleep -Seconds 2
        }
    } while ($true)
    Write-Host "Keycloak is up!"
    Start-Sleep -Seconds 5  # Give it a few more seconds to fully initialize
}

# Get admin token
function Get-KeycloakToken {
    $body = @{
        client_id = "admin-cli"
        username = $ADMIN_USER
        password = $ADMIN_PASSWORD
        grant_type = "password"
    }
    
    $response = Invoke-RestMethod -Uri "$KEYCLOAK_URL/realms/master/protocol/openid-connect/token" -Method Post -Body $body
    return $response.access_token
}

# Create realm
function New-KeycloakRealm {
    param($Token)
    
    Write-Host "Creating realm '$REALM'..."
    $headers = @{
        Authorization = "Bearer $Token"
        "Content-Type" = "application/json"
    }
    
    $body = @{
        realm = $REALM
        enabled = $true
    } | ConvertTo-Json
    
    try {
        Invoke-RestMethod -Uri "$KEYCLOAK_URL/admin/realms" -Method Post -Headers $headers -Body $body
        Write-Host "Realm created successfully"
    }
    catch {
        if ($_.Exception.Response.StatusCode.value__ -eq 409) {
            Write-Host "Realm already exists"
        }
        else {
            Write-Host "Error creating realm: $_"
        }
    }
}

# Create client
function New-KeycloakClient {
    param($Token)
    
    Write-Host "Creating client '$CLIENT'..."
    $headers = @{
        Authorization = "Bearer $Token"
        "Content-Type" = "application/json"
    }
    
    $body = @{
        clientId = $CLIENT
        enabled = $true
        publicClient = $true
        redirectUris = @("http://localhost:5173/*")
        webOrigins = @("http://localhost:5173")
        protocol = "openid-connect"
    } | ConvertTo-Json
    
    try {
        Invoke-RestMethod -Uri "$KEYCLOAK_URL/admin/realms/$REALM/clients" -Method Post -Headers $headers -Body $body
        Write-Host "Client created successfully"
    }
    catch {
        if ($_.Exception.Response.StatusCode.value__ -eq 409) {
            Write-Host "Client already exists"
        }
        else {
            Write-Host "Error creating client: $_"
        }
    }
}

# Main execution
Wait-ForKeycloak

Write-Host "Getting admin token..."
$token = Get-KeycloakToken

if (-not $token) {
    Write-Host "Failed to get admin token"
    exit 1
}

New-KeycloakRealm -Token $token
New-KeycloakClient -Token $token

Write-Host "Keycloak configuration completed!"
