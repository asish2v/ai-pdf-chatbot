@echo off
echo ========================================
echo    AI-Powered PDF Chat - Startup Script
echo ========================================
echo.

echo Starting the application...
echo.

echo [1/3] Checking if Python is installed...
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python 3.8 or higher
    pause
    exit /b 1
)
echo ✓ Python found

echo [2/3] Checking if Node.js is installed...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js 16 or higher
    pause
    exit /b 1
)
echo ✓ Node.js found

echo [3/3] Starting servers...
echo.

echo Starting Backend Server...
cd backend
start "Backend Server" cmd /k "python app.py"

echo Starting Frontend Server...
cd ../frontend
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ========================================
echo    Servers are starting...
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Opening browser...
timeout /t 3 >nul
start http://localhost:5173
echo.
echo Press any key to close this window...
pause >nul 