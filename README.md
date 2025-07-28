# 🤖 AI-Powered PDF Chat with Automation

A modern, full-stack web application that allows users to upload PDF documents and ask questions about their content using AI-powered analysis.

## ✨ Features

- **📄 PDF Processing**: Upload and extract text from any PDF document
- **🤖 AI Analysis**: Real-time AI-powered Q&A using Hugging Face API
- **🎨 Modern UI**: Beautiful, responsive design with dark/light themes
- **💬 Chat History**: Persistent conversation history with timestamps
- **📱 Mobile Responsive**: Works perfectly on all devices
- **⚡ Real-time Processing**: Live AI responses with loading animations
- **🔧 Error Handling**: Comprehensive error management and user feedback

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API communication

### Backend
- **Python Flask** - Lightweight web framework
- **PyMuPDF** - PDF text extraction
- **Hugging Face API** - AI model integration
- **Flask-CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai-pdf-chatbot
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   python -m venv venv
   
   # On Windows
   .\venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   
   pip install -r requirements.txt
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   python app.py
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 📖 Usage Guide

### Basic Usage
1. **Upload a PDF**: Click the upload area or drag & drop a PDF file
2. **Ask a Question**: Type your question in the input field
3. **Get AI Response**: Click "Ask" to receive AI-powered analysis
4. **View History**: All conversations are saved in the chat history

### Example Questions
- "What are the key skills in this resume?"
- "What is the main topic of this document?"
- "Summarize the key points from this PDF"
- "What experience does this person have?"

## 🏗️ Project Structure

```
ai-pdf-chatbot/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── App.css          # Styling and themes
│   │   └── main.jsx         # Application entry point
│   ├── package.json         # Frontend dependencies
│   └── README.md           # Frontend documentation
├── backend/                  # Python Flask backend
│   ├── app.py              # Main Flask application
│   ├── requirements.txt    # Python dependencies
│   ├── temp/              # Temporary file storage
│   └── uploads/           # Uploaded file storage
└── README.md              # This file
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
# Optional: Hugging Face API Token (for better rate limits)
HUGGINGFACE_API_TOKEN=your_token_here
```

### Customizing AI Models
Edit `backend/app.py` to change the AI model:
```python
AI_API_URL = "https://api-inference.huggingface.co/models/your-model"
```

## 🎨 UI Features

### Themes
- **Dark Mode**: Default theme with gradient backgrounds
- **Light Mode**: Clean, professional light theme
- **Toggle**: Click the sun/moon icon in the header

### Responsive Design
- **Desktop**: Full-featured interface
- **Tablet**: Optimized layout
- **Mobile**: Touch-friendly design

### Animations
- **Loading Spinners**: Real-time feedback
- **Hover Effects**: Interactive elements
- **Smooth Transitions**: Professional feel

## 🐛 Troubleshooting

### Common Issues

**Backend won't start:**
```bash
# Check Python version
python --version

# Reinstall dependencies
pip install -r requirements.txt

# Activate virtual environment
.\venv\Scripts\activate  # Windows
source venv/bin/activate # macOS/Linux
```

**Frontend won't start:**
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**PDF upload issues:**
- Ensure file is a valid PDF
- Check file size (max 10MB recommended)
- Verify file permissions

**AI responses not working:**
- Check internet connection
- Verify API endpoints are accessible
- Check browser console for errors

## 📝 API Documentation

### Backend Endpoints

**POST /ask**
- **Purpose**: Process PDF and get AI response
- **Parameters**: 
  - `file`: PDF file upload
  - `question`: Text question
- **Response**: JSON with `answer` field

### Frontend API Calls
```javascript
// Example API call
const formData = new FormData();
formData.append("file", pdfFile);
formData.append("question", userQuestion);

const response = await axios.post("http://localhost:5000/ask", formData);
const answer = response.data.answer;
```

## 🚀 Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy dist/ folder to your hosting service
```

### Backend Deployment
```bash
# Using Gunicorn (recommended)
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app

# Using Flask development server (not for production)
python app.py
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Hugging Face** for providing free AI APIs
- **PyMuPDF** for PDF processing capabilities
- **React** and **Vite** for the modern development experience
- **Tailwind CSS** for the beautiful styling framework

---

**Made with ❤️ for document intelligence and AI-powered analysis** 