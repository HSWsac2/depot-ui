Write-Host "Removing old instances of Depot-UI..."
docker compose down

Write-Host "Building Depot-UI..."
docker compose build

Write-Host "Starting Depot-UI...."
docker compose up -d

Write-Host ""
Write-Host "Depot-UI has been started!"
Write-Host ""