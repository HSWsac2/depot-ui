Write-Host "Starting Depot-UI..."
docker compose down 1> tmp.txt
Remove-Item tmp.txt
Write-Host "Still starting Depot-UI...."
docker compose build --quiet
Write-Host "Still starting Depot-UI....."
docker compose up -d 1> tmp.txt
Remove-Item tmp.txt

Write-Host ""
Write-Host "Depot-UI has been started!"
Write-Host ""