Write-Host "`n[1/3] Checking for node_modules..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) {
    Write-Host "node_modules not found. Installing dependencies..." -ForegroundColor Yellow
    npm install
} else {
    Write-Host "node_modules already exists." -ForegroundColor Green
}

Write-Host "`n[2/3] Cleaning up old builds..." -ForegroundColor Cyan
if (Test-Path "dist") {
    Remove-Item -Recurse -Force dist
}

Write-Host "`n[3/3] Starting development server..." -ForegroundColor Cyan
npm run dev
