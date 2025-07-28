#!/bin/bash

echo "========================================"
echo "   AI-Powered PDF Chat - Startup Script"
echo "========================================"
echo

echo "Starting the application..."
echo

echo "[1/3] Checking if Python is installed..."
if ! command -v python3 &> /dev/null; then
    echo "ERROR: Python is not installed or not in PATH"
    echo "Please install Python 3.8 or higher"
    exit 1
fi
echo "✓ Python found"

echo "[2/3] Checking if Node.js is installed..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed or not in PATH"
    echo "Please install Node.js 16 or higher"
    exit 1
fi
echo "✓ Node.js found"

echo "[3/3] Starting servers..."
echo

# Function to cleanup background processes
cleanup() {
    echo "Shutting down servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

echo "Starting Backend Server..."
cd backend
python3 app.py &
BACKEND_PID=$!

echo "Starting Frontend Server..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo
echo "========================================"
echo "   Servers are starting..."
echo "========================================"
echo
echo "Backend: http://localhost:5000"
echo "Frontend: http://localhost:5173"
echo
echo "Opening browser..."
sleep 3
if command -v xdg-open &> /dev/null; then
    xdg-open http://localhost:5173
elif command -v open &> /dev/null; then
    open http://localhost:5173
else
    echo "Please open http://localhost:5173 in your browser"
fi
echo
echo "Press Ctrl+C to stop all servers"
echo

# Wait for user to stop
wait 