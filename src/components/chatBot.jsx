import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! I’m Kiran your AI Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

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

  return (
    <div style={styles.page}>
      {/* Fixed Navbar */}
  

      {/* Chat container below navbar */}
      <div style={styles.overlay}>
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

          {/* Typing animation */}
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
      </div>
    </div>
  );
};

// --- Styles ---
const styles = {
  page: {
    fontFamily: "Poppins, sans-serif",
    background: "linear-gradient(135deg, #eef2ff, #f9faff)",
    height: "100vh",
    overflow: "hidden",
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "linear-gradient(90deg, #3f51b5, #5c6bc0)",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "1.5rem",
    zIndex: 9999,
    boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
  },
  overlay: {
    position: "absolute",
    top: "80px", // pushes below navbar
    left: 0,
    width: "100%",
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chatContainer: {
    width: "80%",
    maxWidth: "900px",
    height: "80vh",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  chatBox: {
    flex: 1,
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    overflowY: "auto",
    background: "#f7f9fc",
  },
  message: {
    maxWidth: "70%",
    padding: "12px 16px",
    borderRadius: "14px",
    fontSize: "16px",
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
    padding: "1rem",
    borderTop: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },
  button: {
    marginLeft: "12px",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#3f51b5",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default ChatBot;
