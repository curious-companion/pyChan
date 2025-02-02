import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './styles/aitutor.css';

const AiTutor = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setAnswer('');

    const userMessage = {
      text: question,
      type: 'user-message',
    };

    // Add the user message to the chat
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setQuestion('');

    try {
      // Change to the deployed 
      const response = await axios.get(`https://aitutor-awt2cdqd4-vibhanshu-jains-projects-198d7ba8.vercel.app/ask-python/${encodeURIComponent(question)}`);
      const cleanedAnswer = response.data.answer
        .replace(/\*/g, '')  // Removes the '*' from the response
        .replace(/\n/g, '<br/>');  // Makes newlines into actual line breaks

      const aiMessage = {
        text: cleanedAnswer,
        type: 'ai-message',
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (err) {
      setError('Error occurred. Please try again later.');
      console.error("Error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-tutor-container">
      <h2>AI Python Tutor</h2>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={message.type}>
            <p dangerouslySetInnerHTML={{ __html: message.text }} /> {/* Render HTML like line breaks */}
          </div>
        ))}
        {loading && (
          <div className="typing-indicator">
            <span>...</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask a question about Python..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Asking...' : 'Ask'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default AiTutor;
