import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! I’m Kiran your AI Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("https://taskbackend-eight.vercel.app/chat", {
        message: input,
      });

      const botMessage = { sender: "bot", text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={styles.page}>
      <div style={styles.chatContainer}>
        <div style={styles.chatBox}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                ...(msg.sender === "user" ? styles.userMessage : styles.botMessage),
              }}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div style={styles.botMessage}>
              <span className="typing-dots">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div style={styles.inputContainer}>
          <input
            type="text"
            value={input}
            placeholder="Type your message..."
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} style={styles.button}>
            ➤
          </button>
        </div>
      </div>

      <style>
        {`
          .typing-dots span {
            display: inline-block;
            animation: blink 1.4s infinite both;
          }
          .typing-dots span:nth-child(2) {
            animation-delay: 0.2s;
          }
          .typing-dots span:nth-child(3) {
            animation-delay: 0.4s;
          }
          @keyframes blink {
            0% { opacity: 0.2; }
            20% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
    </div>
  );
};

// --- Styles ---
const styles = {
  page: {
    fontFamily: "Poppins, sans-serif",
    background: "linear-gradient(135deg, #eef2ff, #f9faff)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  chatContainer: {
    width: "100%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    borderRadius: "16px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  chatBox: {
    flex: 1,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    overflowY: "auto",
    background: "#f7f9fc",
  },
  message: {
    maxWidth: "80%",
    padding: "10px 14px",
    borderRadius: "14px",
    fontSize: "1rem",
    lineHeight: "1.5",
    wordBreak: "break-word",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#3f51b5",
    color: "#fff",
    borderBottomRightRadius: "2px",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e8eaf6",
    color: "#1a237e",
    borderBottomLeftRadius: "2px",
  },
  inputContainer: {
    display: "flex",
    padding: "0.5rem",
    borderTop: "1px solid #ddd",
    backgroundColor: "#fff",
    gap: "0.5rem",
  },
  input: {
    flex: 1,
    minWidth: "0", // ensures it shrinks properly
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    flex: "0 0 auto", // button size fixed, doesn't shrink
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#3f51b5",
    color: "#fff",
    fontSize: "1.2rem",
    cursor: "pointer",
  },
};

export default ChatBot;
