import React, { useState, useEffect } from "react";
import { sendMessage, subscribeToMessages } from "../firebaseChat";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const unsubscribe = subscribeToMessages(setMessages);
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (text.trim()) {
      await sendMessage(text, "Wilby"); // Replace "Wilby" with dynamic username later
      setText("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chatterly - Chat</h2>
      <div style={{ marginBottom: "20px" }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type your message..."
        style={{ padding: "10px", width: "80%" }}
      />
      <button onClick={handleSend} style={{ padding: "10px", marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
}
