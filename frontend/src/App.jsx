import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [file, setFile] = useState(null)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [chatHistory, setChatHistory] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file || !question) {
      setShowPopup(true)
      return
    }

    const formData = new FormData()
    formData.append("file", file)
    formData.append("question", question)

    try {
      setLoading(true)
      const res = await axios.post("http://localhost:5000/ask", formData)
      const newAnswer = res.data.answer
      setAnswer(newAnswer)
      
      // Add to chat history
      setChatHistory(prev => [...prev, {
        question,
        answer: newAnswer,
        timestamp: new Date().toLocaleTimeString()
      }])
      
      setQuestion('')
    } catch (err) {
      setAnswer("Error: " + (err?.response?.data?.error || err.message))
    } finally {
      setLoading(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const clearHistory = () => {
    setChatHistory([])
    setAnswer('')
  }

  return (
    <div className={`app ${theme}`}>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="title">
            <span className="emoji">🤖</span>
            AI-Powered PDF Chat
          </h1>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Upload Section */}
        <div className="upload-section">
          <div className="upload-area">
            <div className="upload-icon">📄</div>
            <input 
              type="file" 
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="file-input"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="upload-label">
              {file ? file.name : "Choose PDF File"}
            </label>
            {file && (
              <button 
                onClick={() => setFile(null)} 
                className="clear-file"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Chat Interface */}
        <div className="chat-container">
          <form onSubmit={handleSubmit} className="chat-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Ask a question about your PDF..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="question-input"
                disabled={loading}
              />
              <button 
                type="submit" 
                className={`ask-button ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <div className="loading-spinner">
                    <div className="spinner"></div>
                  </div>
                ) : (
                  'Ask'
                )}
              </button>
            </div>
          </form>

          {/* Chat History */}
          {chatHistory.length > 0 && (
            <div className="chat-history">
              <div className="history-header">
                <h3>Chat History</h3>
                <button onClick={clearHistory} className="clear-history">
                  Clear
                </button>
              </div>
              <div className="history-list">
                {chatHistory.map((chat, index) => (
                  <div key={index} className="chat-item">
                    <div className="question-bubble">
                      <strong>Q:</strong> {chat.question}
                    </div>
                    <div className="answer-bubble">
                      <strong>A:</strong> {chat.answer}
                    </div>
                    <div className="timestamp">{chat.timestamp}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Current Answer */}
          {answer && (
            <div className="answer-section">
              <h3 className="answer-title">Latest Answer:</h3>
              <div className="answer-content">
                {answer}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>⚠️ Missing Information</h3>
              <button 
                onClick={() => setShowPopup(false)}
                className="popup-close"
              >
                ✕
              </button>
            </div>
            <div className="popup-content">
              <p>Please upload a PDF file and type a question before asking.</p>
            </div>
            <div className="popup-actions">
              <button 
                onClick={() => setShowPopup(false)}
                className="popup-button"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
