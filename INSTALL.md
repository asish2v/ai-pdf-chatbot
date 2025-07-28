# 📋 Installation Guide

This guide will help you set up the AI-Powered PDF Chat application on your system.

## 🎯 Prerequisites

Before installing, make sure you have the following installed:

### Required Software
- **Python 3.8+** - [Download here](https://www.python.org/downloads/)
- **Node.js 16+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)

### Verify Installation
Open a terminal/command prompt and run:
```bash
python --version  # Should show Python 3.8 or higher
node --version    # Should show Node.js 16 or higher
npm --version     # Should show npm version
git --version     # Should show git version
```

## 🚀 Quick Installation

### Option 1: One-Click Start (Recommended)

**Windows:**
1. Double-click `start.bat`
2. Wait for servers to start
3. Browser will open automatically

**macOS/Linux:**
1. Open terminal in project folder
2. Run: `chmod +x start.sh && ./start.sh`
3. Browser will open automatically

### Option 2: Manual Installation

#### Step 1: Clone/Download Project
```bash
# If using Git
git clone <your-repo-url>
cd ai-pdf-chatbot

# Or download and extract ZIP file
# Then navigate to the folder
```

#### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
```

#### Step 3: Install Backend Dependencies
```bash
cd ../backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
.\venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

#### Step 4: Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
python app.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

#### Step 5: Open Browser
Navigate to: `http://localhost:5173`

## 🔧 Troubleshooting

### Common Issues

**"Python not found"**
- Install Python from [python.org](https://www.python.org/downloads/)
- Make sure to check "Add to PATH" during installation
- Restart your terminal after installation

**"Node.js not found"**
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Choose the LTS version
- Restart your terminal after installation

**"npm install failed"**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**"pip install failed"**
```bash
# Upgrade pip
python -m pip install --upgrade pip

# Reinstall requirements
pip install -r requirements.txt
```

**"Backend server won't start"**
```bash
# Check if port 5000 is in use
# Windows:
netstat -ano | findstr :5000
# macOS/Linux:
lsof -i :5000

# Kill process if needed
# Windows:
taskkill /PID <process_id>
# macOS/Linux:
kill <process_id>
```

**"Frontend server won't start"**
```bash
# Check if port 5173 is in use
# Windows:
netstat -ano | findstr :5173
# macOS/Linux:
lsof -i :5173

# Kill process if needed (same as above)
```

### Platform-Specific Issues

**Windows:**
- Use `start.bat` for easiest setup
- If PowerShell execution policy blocks scripts:
  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  ```

**macOS:**
- Use `start.sh` for easiest setup
- If you get permission errors:
  ```bash
  chmod +x start.sh
  ```

**Linux:**
- Use `start.sh` for easiest setup
- If you get permission errors:
  ```bash
  chmod +x start.sh
  ```

## 📁 Project Structure After Installation

```
ai-pdf-chatbot/
├── frontend/
│   ├── node_modules/     # Created after npm install
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/
│   ├── venv/            # Created after python -m venv venv
│   ├── app.py
│   ├── requirements.txt
│   └── ...
├── start.bat            # Windows startup script
├── start.sh             # Unix startup script
├── README.md
└── INSTALL.md          # This file
```

## ✅ Verification

After installation, you should see:

1. **Backend running** on `http://localhost:5000`
2. **Frontend running** on `http://localhost:5173`
3. **Beautiful UI** with dark theme and upload area
4. **No error messages** in terminal

## 🆘 Getting Help

If you encounter issues:

1. **Check the README.md** for detailed documentation
2. **Review error messages** in terminal
3. **Verify prerequisites** are installed correctly
4. **Try the troubleshooting steps** above

## 🎉 Success!

Once everything is running, you can:
- Upload PDF files
- Ask questions about the content
- Get AI-powered responses
- Switch between dark/light themes
- View chat history

**Happy coding! 🚀** 