@echo off
echo.
echo [1/3] Checking for node_modules...
if not exist "node_modules\" (
    echo node_modules not found. Installing dependencies...
    call npm install
) else (
    echo node_modules already exists.
)

echo.
echo [2/3] Cleaning up old builds...
if exist "dist\" rmdir /s /q dist

echo.
echo [3/3] Starting development server...
call npm run dev
pause
